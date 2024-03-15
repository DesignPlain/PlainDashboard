import { BudgetAmountSpecifiedAmount } from "./BudgetAmountSpecifiedAmount";

export interface BudgetAmount {
  /*
Configures a budget amount that is automatically set to 100%!!(MISSING)o(MISSING)f
last period's spend.
Boolean. Set value to true to use. Do not set to false, instead
use the `specified_amount` block.
*/
  LastPeriodAmount?: boolean;

  /*
A specified amount to use as the budget. currencyCode is
optional. If specified, it must match the currency of the
billing account. The currencyCode is provided on output.
Structure is documented below.
*/
  SpecifiedAmount?: BudgetAmountSpecifiedAmount;
}
