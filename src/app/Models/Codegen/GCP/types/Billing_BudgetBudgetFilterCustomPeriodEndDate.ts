import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Billing_BudgetBudgetFilterCustomPeriodEndDate {
  // Year of the date. Must be from 1 to 9999.
  Year?: number;

  // Day of a month. Must be from 1 to 31 and valid for the year and month.
  Day?: number;

  // Month of a year. Must be from 1 to 12.
  Month?: number;
}

export function Billing_BudgetBudgetFilterCustomPeriodEndDate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Year",
      "Year of the date. Must be from 1 to 9999.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Day",
      "Day of a month. Must be from 1 to 31 and valid for the year and month.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Month",
      "Month of a year. Must be from 1 to 12.",
      [],
      true,
      false,
    ),
  ];
}
