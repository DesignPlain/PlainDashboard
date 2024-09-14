import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface clouddomains_RegistrationYearlyPrice {
  // The three-letter currency code defined in ISO 4217.
  currencyCode?: string;

  // The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.
  units?: string;
}

export function clouddomains_RegistrationYearlyPrice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "currencyCode",
      "The three-letter currency code defined in ISO 4217.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "units",
      'The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.',
      () => [],
      false,
      true,
    ),
  ];
}
