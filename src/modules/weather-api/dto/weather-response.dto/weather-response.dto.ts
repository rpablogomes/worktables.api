import { CurrentWeatherDto, LocationDto } from "../get-weather.dto/get-weather.dto";

export class WeatherResponseDto {
    location: LocationDto;
    current: CurrentWeatherDto;
  }