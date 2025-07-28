export class ConditionDto {
  text: string;
}

export class CurrentWeatherDto {
  condition: ConditionDto;
  wind_mph: number;
  humidity: number;
  cloud: number;
}

/**
 * DTO for location information.
 */
export class LocationDto {
  name: string;
  region: string;
  country: string;
  localtime: string;
}
