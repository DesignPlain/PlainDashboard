import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface budgets_BudgetAutoAdjustDataHistoricalOptions {
  //
  budgetAdjustmentPeriod?: number;

  //
  lookbackAvailablePeriods?: number;
}

export function budgets_BudgetAutoAdjustDataHistoricalOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "budgetAdjustmentPeriod",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "lookbackAvailablePeriods",
      "",
      [],
      false,
      false,
    ),
  ];
}
