import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddomains_RegistrationYearlyPrice {
  // The three-letter currency code defined in ISO 4217.
  CurrencyCode?: string;

  // The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.
  Units?: string;
}

export function Clouddomains_RegistrationYearlyPrice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CurrencyCode",
      "The three-letter currency code defined in ISO 4217.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Units",
      'The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.',
      [],
      false,
      true,
    ),
  ];
}
