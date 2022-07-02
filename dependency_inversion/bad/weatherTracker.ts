import { Phone } from "./phone";
import { Emailer } from "./emailer";

export class WeatherTracker{
    private phone : Phone;
    private emailer : Emailer;

    constructor(){
        this.phone = new Phone();
        this.emailer = new Emailer();
    }

    public alertWeather(weather : string){
        if(weather === 'sunny'){
            return this.phone.alert(weather);
        }
        if(weather === 'rainy'){
            return this.emailer.alert(weather);
        }
    }
}