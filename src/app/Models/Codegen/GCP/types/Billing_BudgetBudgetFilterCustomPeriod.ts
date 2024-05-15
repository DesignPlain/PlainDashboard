import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Billing_BudgetBudgetFilterCustomPeriodEndDate,
  Billing_BudgetBudgetFilterCustomPeriodEndDate_GetTypes,
} from "./Billing_BudgetBudgetFilterCustomPeriodEndDate";
import {
  Billing_BudgetBudgetFilterCustomPeriodStartDate,
  Billing_BudgetBudgetFilterCustomPeriodStartDate_GetTypes,
} from "./Billing_BudgetBudgetFilterCustomPeriodStartDate";

export interface Billing_BudgetBudgetFilterCustomPeriod {
  /*
Optional. The end date of the time period. Budgets with elapsed end date won't be processed.
If unset, specifies to track all usage incurred since the startDate.
Structure is documented below.
*/
  EndDate?: Billing_BudgetBudgetFilterCustomPeriodEndDate;

  /*
A start date is required. The start date must be after January 1, 2017.
Structure is documented below.
*/
  StartDate?: Billing_BudgetBudgetFilterCustomPeriodStartDate;
}

export function Billing_BudgetBudgetFilterCustomPeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "EndDate",
      "Optional. The end date of the time period. Budgets with elapsed end date won't be processed.\nIf unset, specifies to track all usage incurred since the startDate.\nStructure is documented below.",
      Billing_BudgetBudgetFilterCustomPeriodEndDate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StartDate",
      "A start date is required. The start date must be after January 1, 2017.\nStructure is documented below.",
      Billing_BudgetBudgetFilterCustomPeriodStartDate_GetTypes(),
      true,
      false,
    ),
  ];
}
