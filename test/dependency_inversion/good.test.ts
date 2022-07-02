//good
import { WeatherTracker } from '../../dependency_inversion/good/weatherTracker';
import { Phone } from '../../dependency_inversion/good/phone';

test('should return the current weather', () => {
     const weather = new WeatherTracker('sunny');
     const notifier = new Phone();
     expect(weather.alertWeather(notifier)).toBe('Phone: Alerting sunny');
});

 