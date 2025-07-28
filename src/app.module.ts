import { Module } from '@nestjs/common';
import { WeatherApiModule } from './modules/weather-api/weather-api.module';

@Module({
  imports: [WeatherApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
