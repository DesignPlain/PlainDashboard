import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  billing_BudgetBudgetFilterCustomPeriodStartDate,
  billing_BudgetBudgetFilterCustomPeriodStartDate_GetTypes,
} from "./billing_BudgetBudgetFilterCustomPeriodStartDate";
import {
  billing_BudgetBudgetFilterCustomPeriodEndDate,
  billing_BudgetBudgetFilterCustomPeriodEndDate_GetTypes,
} from "./billing_BudgetBudgetFilterCustomPeriodEndDate";

export interface billing_BudgetBudgetFilterCustomPeriod {
  /*
A start date is required. The start date must be after January 1, 2017.
Structure is documented below.
*/
  startDate?: billing_BudgetBudgetFilterCustomPeriodStartDate;

  /*
Optional. The end date of the time period. Budgets with elapsed end date won't be processed.
If unset, specifies to track all usage incurred since the startDate.
Structure is documented below.
*/
  endDate?: billing_BudgetBudgetFilterCustomPeriodEndDate;
}

export function billing_BudgetBudgetFilterCustomPeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "startDate",
      "A start date is required. The start date must be after January 1, 2017.\nStructure is documented below.",
      billing_BudgetBudgetFilterCustomPeriodStartDate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "endDate",
      "Optional. The end date of the time period. Budgets with elapsed end date won't be processed.\nIf unset, specifies to track all usage incurred since the startDate.\nStructure is documented below.",
      billing_BudgetBudgetFilterCustomPeriodEndDate_GetTypes(),
      false,
      false,
    ),
  ];
}
