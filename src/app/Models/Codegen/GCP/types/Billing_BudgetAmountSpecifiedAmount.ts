import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Billing_BudgetAmountSpecifiedAmount {
  // The 3-letter currency code defined in ISO 4217.
  CurrencyCode?: string;

  /*
Number of nano (10^-9) units of the amount.
The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000.

- - -
*/
  Nanos?: number;

  /*
The whole units of the amount. For example if currencyCode
is "USD", then 1 unit is one US dollar.
*/
  Units?: string;
}

export function Billing_BudgetAmountSpecifiedAmount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CurrencyCode",
      "The 3-letter currency code defined in ISO 4217.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Nanos",
      "Number of nano (10^-9) units of the amount.\nThe value must be between -999,999,999 and +999,999,999\ninclusive. If units is positive, nanos must be positive or\nzero. If units is zero, nanos can be positive, zero, or\nnegative. If units is negative, nanos must be negative or\nzero. For example $-1.75 is represented as units=-1 and\nnanos=-750,000,000.\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Units",
      'The whole units of the amount. For example if currencyCode\nis "USD", then 1 unit is one US dollar.',
      [],
      false,
      false,
    ),
  ];
}
