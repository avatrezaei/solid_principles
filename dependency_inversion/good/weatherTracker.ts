import { Notifier } from "./notifier";

export class WeatherTracker {
    private weather: string;

    constructor(weather: string) {
        this.weather = weather;
    } 

    public alertWeather(notifier: Notifier): string {
        return notifier.alertWeather(this.weather);
    }
}