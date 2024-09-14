import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  budgets_getBudgetAutoAdjustDataHistoricalOption,
  budgets_getBudgetAutoAdjustDataHistoricalOption_GetTypes,
} from "./budgets_getBudgetAutoAdjustDataHistoricalOption";

export interface budgets_getBudgetAutoAdjustData {
  // (Optional) - Configuration block of Historical Options. Required for `auto_adjust_type` of `HISTORICAL` Configuration block that defines the historical data that your auto-adjusting budget is based on.
  historicalOptions?: Array<budgets_getBudgetAutoAdjustDataHistoricalOption>;

  // (Optional) - The last time that your budget was auto-adjusted.
  lastAutoAdjustTime?: string;

  // (Required) - The string that defines whether your budget auto-adjusts based on historical or forecasted data. Valid values: `FORECAST`,`HISTORICAL`.
  autoAdjustType?: string;
}

export function budgets_getBudgetAutoAdjustData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "autoAdjustType",
      "(Required) - The string that defines whether your budget auto-adjusts based on historical or forecasted data. Valid values: `FORECAST`,`HISTORICAL`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "historicalOptions",
      "(Optional) - Configuration block of Historical Options. Required for `auto_adjust_type` of `HISTORICAL` Configuration block that defines the historical data that your auto-adjusting budget is based on.",
      () => budgets_getBudgetAutoAdjustDataHistoricalOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastAutoAdjustTime",
      "(Optional) - The last time that your budget was auto-adjusted.",
      () => [],
      true,
      false,
    ),
  ];
}
