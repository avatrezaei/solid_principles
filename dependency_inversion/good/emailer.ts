import { Notifier } from "./notifier";
export class Emailer implements Notifier {
    alertWeather(weather: string): void {
        console.log(`Emailer: Alerting ${weather}`);
    }
}