import { WeatherResponseDto } from './weather-response.dto';

describe('WeatherResponseDto', () => {
  it('should be defined', () => {
    expect(new WeatherResponseDto()).toBeDefined();
  });
});
