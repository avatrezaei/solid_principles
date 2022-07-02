import { Notifier } from "./notifier";

export class Phone implements Notifier {
    alertWeather(weather: string): string {
        return `Phone: Alerting ${weather}`
    }
}