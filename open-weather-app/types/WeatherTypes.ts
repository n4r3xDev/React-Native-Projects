export type WeatherUnit = "metric" | "imperial";
export type UrlPathParams = {
    lat: number;
    lon: number;
    units: string;
    appid: string;
};

export interface LocationData {
    latitude: number;
    longitude: number;
}

export interface CurrentWeather {
    statusCode: number;
    temp: number;
    tempMax?: number;
    tempMin?: number;
    feelsLike: number;
    city: string;
    country: string;
    date: number;
    sunrise?: number;
    sunset?: number;
    description: string;
    icon: string;
    humidity?: number;
    pressure?: number;
}

export interface ForecastItem {
    temp: number;
    tempMax: number;
    tempMin: number;
    feelsLike?: number;
    date: number;
    description: string;
    icon: string;
}