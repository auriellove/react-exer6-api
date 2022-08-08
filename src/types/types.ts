export interface WeatherForecast {
  properties: {
    periods: Period[];
  };
}

export interface Period {
  name: string;
  temperature: string;
  temperatureUnit: string;
  detailedForecase: string;
}
