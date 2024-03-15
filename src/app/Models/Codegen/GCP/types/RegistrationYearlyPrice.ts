export interface RegistrationYearlyPrice {
  // The three-letter currency code defined in ISO 4217.
  CurrencyCode?: string;

  // The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.
  Units?: string;
}
