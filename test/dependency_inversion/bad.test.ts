import { WeatherTracker } from '../../dependency_inversion/bad/weatherTracker';

test('should return the current weather', () => {
     const weather = new WeatherTracker();
     expect(weather.alertWeather('sunny')).toBe('Phone: Alerting sunny');
});

