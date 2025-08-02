import { WEATHER_API_KEY } from "@/data/Constants";
import { WeatherApi } from "@/data/WeatherApis";
import { CurrentWeather, ForecastItem, LocationData, UrlPathParams, WeatherUnit } from "@/types/WeatherTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type WeatherContextType = {
    currentWeather?: CurrentWeather | undefined | null;
    forecastWeather?: ForecastItem[] | undefined | null;
    tempUnit: WeatherUnit;
    loading: boolean;
    error: string | null;
    refreshWeather: () => void;
    getWeatherByCity: (city: string) => void;
    changeUnit: () => void;
};

const WeatherContext = createContext<WeatherContextType>({
    currentWeather: null,
    forecastWeather: null,
    tempUnit: "metric",
    loading: true,
    error: null,
    refreshWeather: () => {},
    getWeatherByCity: () => {},
    changeUnit: () => {},
})

import React from 'react';

export default function WeatherContextProvider({children} : {children: ReactNode}) {
    const [location, setLocation] = useState<LocationData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentWeather, setCurrentWeather] = useState<CurrentWeather>();
    const [forecastWeather, setForecastWeather] = useState<ForecastItem[]>();
    const [tempUnit, setTempUnit] = useState<WeatherUnit>("metric");

    useEffect(() => {
        getTempUnitFromStorage();
        detectDeviceLocation();
    }, [])

    useEffect(() => {
        getWeatherData();
    }, [location, tempUnit])

    async function detectDeviceLocation() {
        const {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            setError("Location permision is denied");
            return;
        }
        const currentLocation = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = currentLocation.coords;
        console.log(`${latitude} ${longitude}`)
        setLocation({
            latitude: latitude,
            longitude: longitude,
        })
    }

    async function getWeatherData() {
        if(!location) return;
        const params: UrlPathParams = {
            lat: location.latitude,
            lon: location.longitude,
            units: tempUnit,
            appid: WEATHER_API_KEY,
          };

          try {
            setLoading(true);
            setError(null);
            const [current, forecast] = await Promise.all([
                WeatherApi.getCurrentWeather(params),
                WeatherApi.getForecastWeather(params),
            ])
            setCurrentWeather(current);
            setForecastWeather(forecast);
            // console.log(current?.city);
            // console.log(forecast?.length);
          } catch (error: any) {
            setError(error.mesage)
          } finally {
            setLoading(false);
          }
    }

    async function convertCityToLatLng(city: string) {
        try {
            const locations = await Location.geocodeAsync(city);
            if (locations.length > 0) {
                const {latitude, longitude} = locations[0];
                setLocation({latitude: latitude, longitude: longitude})
            } else {
                setError("Invalid City Name");
            }
        }   catch (error: any) {
            console.log(error.message);
        }
    }

    async function setTempUnitToStorage(value: WeatherUnit) {
        try {
            await AsyncStorage.setItem("Unit", value)
        } catch (error: any) {
            console.log(error.message);
        }
    }

    async function getTempUnitFromStorage() {
        try {
            const value = await AsyncStorage.getItem("Unit");
            const unit: WeatherUnit = value === "metric" || value === "imperial" ? value : "metric";
            setTempUnit(unit);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    function refreshWeather() {
        detectDeviceLocation();
    }

    function getWeatherByCity(city: string) {
        convertCityToLatLng(city);
    }

    function changeUnit() {
        const unit = tempUnit === "metric" ? "imperial" : "metric";
        setTempUnitToStorage(unit);
        setTempUnit(unit);
    }

  return (
    <WeatherContext.Provider value = {{
        currentWeather,
        forecastWeather,
        tempUnit,
        loading,
        error,
        refreshWeather,
        getWeatherByCity,
        changeUnit
    }}>
        {children}
    </WeatherContext.Provider>
  )
}

export const useWeather = () => useContext(WeatherContext)