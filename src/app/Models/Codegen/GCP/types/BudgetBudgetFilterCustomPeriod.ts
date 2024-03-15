import { BudgetBudgetFilterCustomPeriodEndDate } from "./BudgetBudgetFilterCustomPeriodEndDate";
import { BudgetBudgetFilterCustomPeriodStartDate } from "./BudgetBudgetFilterCustomPeriodStartDate";

export interface BudgetBudgetFilterCustomPeriod {
  /*
Optional. The end date of the time period. Budgets with elapsed end date won't be processed.
If unset, specifies to track all usage incurred since the startDate.
Structure is documented below.
*/
  EndDate?: BudgetBudgetFilterCustomPeriodEndDate;

  /*
A start date is required. The start date must be after January 1, 2017.
Structure is documented below.
*/
  StartDate?: BudgetBudgetFilterCustomPeriodStartDate;
}
