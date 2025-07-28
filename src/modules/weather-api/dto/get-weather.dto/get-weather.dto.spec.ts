import { GetWeatherDto } from './get-weather.dto';

describe('GetWeatherDto', () => {
  it('should be defined', () => {
    expect(new GetWeatherDto()).toBeDefined();
  });
});
