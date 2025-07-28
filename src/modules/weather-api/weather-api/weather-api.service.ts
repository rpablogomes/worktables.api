import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { WeatherResponseDto } from '../dto/weather-response.dto/weather-response.dto';

@Injectable()
export class WeatherApiService {
  private readonly WEATHER_API_KEY: string | undefined;
  private readonly WEATHER_API_BASE_URL: string | undefined;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.WEATHER_API_KEY = this.configService.get<string>('WEATHER_API_KEY');
    this.WEATHER_API_BASE_URL = this.configService.get<string>(
      'WEATHER_API_BASE_URL',
    );
  }
  async getWeatherByCountry(countryName: string): Promise<WeatherResponseDto> {
    const url = `${this.WEATHER_API_BASE_URL}/current.json?key=${this.WEATHER_API_KEY}&q=${countryName}`;

    try {
      const { data } = await firstValueFrom(
        this.httpService.get<any>(url).pipe(
          catchError((error: AxiosError) => {
            console.error(
              'WeatherAPI request failed:',
              error.response?.data || error.message,
            );
            throw new HttpException(
              `WeatherAPI error: ${error.response?.data || 'Unknown error'}`,
              error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
          }),
        ),
      );

      return {
        location: {
          name: data.location.name,
          region: data.location.region,
          country: data.location.country,
          localtime: data.location.localtime,
        },
        current: {
          condition: {
            text: data.current.condition.text,
          },
          wind_mph: data.current.wind_mph,
          humidity: data.current.humidity,
          cloud: data.current.cloud,
        },
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to connect to weather service.',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
