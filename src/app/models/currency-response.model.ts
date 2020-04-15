export interface CurrencyResponse {
  terms_of_use: string;
  time_last_update: number;
  time_zone: string;
  conversion_rates: { [key: string]: number };
  time_next_update: number;
  result: string;
  documentation: string;
  base: string;
}
