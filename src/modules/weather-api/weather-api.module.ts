import { Module } from '@nestjs/common';
import { WeatherApiController } from './weather-api/weather-api.controller';
import { WeatherApiService } from './weather-api/weather-api.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
  ],
  controllers: [WeatherApiController],
  providers: [WeatherApiService]
})
export class WeatherApiModule {}
