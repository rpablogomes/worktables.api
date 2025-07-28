// src/modules/weatherApi/weather-api.controller.ts
import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { WeatherApiService } from './weather-api.service';
import { WeatherResponseDto } from '../dto/weather-response.dto/weather-response.dto';

@Controller('weather-api')
export class WeatherApiController {
  constructor(private readonly weatherApiService: WeatherApiService) {}

  @Get(':countryName')
  async getWeatherByCountry(
    @Param('countryName') countryName: string,
  ): Promise<WeatherResponseDto> {
    try {
      const weatherData =
        await this.weatherApiService.getWeatherByCountry(countryName);
      return weatherData;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
