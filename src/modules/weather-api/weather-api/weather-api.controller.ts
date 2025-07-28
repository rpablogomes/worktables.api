// src/modules/weatherApi/weather-api.controller.ts
import { Controller, Get } from '@nestjs/common'; // Import Get decorator

@Controller('weather-api')
export class WeatherApiController {
  @Get()
  getWeather(): string {
    return 'Somente para testar o endpoint / just to test the endpoint';
  }
}
