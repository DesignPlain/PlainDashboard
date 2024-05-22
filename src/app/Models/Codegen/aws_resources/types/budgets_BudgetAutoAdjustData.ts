import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  budgets_BudgetAutoAdjustDataHistoricalOptions,
  budgets_BudgetAutoAdjustDataHistoricalOptions_GetTypes,
} from "./budgets_BudgetAutoAdjustDataHistoricalOptions";

export interface budgets_BudgetAutoAdjustData {
  //
  historicalOptions?: budgets_BudgetAutoAdjustDataHistoricalOptions;

  //
  lastAutoAdjustTime?: string;

  //
  autoAdjustType?: string;
}

export function budgets_BudgetAutoAdjustData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "lastAutoAdjustTime",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "autoAdjustType", "", [], true, false),
    new DynamicUIProps(
      InputType.Object,
      "historicalOptions",
      "",
      budgets_BudgetAutoAdjustDataHistoricalOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
