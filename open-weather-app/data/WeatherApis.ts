import { CurrentWeather, ForecastItem, UrlPathParams } from "@/types/WeatherTypes";
import axios from "axios";

export class WeatherApi {

    static async getCurrentWeather(params: UrlPathParams) : Promise<CurrentWeather | undefined> {
        const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
        try {
            const response = await axios.get(baseUrl, {params: params});
            const weather = response.data;
            return {
                statusCode: weather.cod,
                city: weather.name,
                country: weather.sys.country,
                date: weather.dt,
                description: weather.weather[0].description,
                icon: weather.weather[0].icon,
                feelsLike: weather.main.feels_like,
                temp: weather.main.temp,
            }
        } catch (error: any) {
            console.log(error.message);
            throw error;
        }
    }

    static async getForecastWeather(params: UrlPathParams) : Promise<ForecastItem[] | undefined> {
        const baseUrl = "https://api.openweathermap.org/data/2.5/forecast";
        try {
            const response = await axios.get(baseUrl, {params: params});
            const forecast = response.data;
            return forecast.list.map(item => ({
                temp: item.main.temp,
                tempMax: item.main.temp_max,
                tempMin: item.main.temp_min,
                date: item.dt,
                icon: item.weather[0].icon,
                description: item.weather[0].description,
            }))
        } catch (error: any) {
            console.log(error.message);
            throw error;
        }
    }  
}