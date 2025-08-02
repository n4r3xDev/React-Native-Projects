import { format } from "date-fns";

export function getFormattedDate(timestamp: number, pattern = "EEE MMM, dd, yyyy") {
    const date = new Date(timestamp * 1000);
    return format(date, pattern)
}

export function getIconUrl(icon: string) {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}