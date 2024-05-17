import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Billing_BudgetAmountSpecifiedAmount,
  Billing_BudgetAmountSpecifiedAmount_GetTypes,
} from "./Billing_BudgetAmountSpecifiedAmount";

export interface Billing_BudgetAmount {
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
  SpecifiedAmount?: Billing_BudgetAmountSpecifiedAmount;
}

export function Billing_BudgetAmount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "LastPeriodAmount",
      "Configures a budget amount that is automatically set to 100%!o(MISSING)f\nlast period's spend.\nBoolean. Set value to true to use. Do not set to false, instead\nuse the `specified_amount` block.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SpecifiedAmount",
      "A specified amount to use as the budget. currencyCode is\noptional. If specified, it must match the currency of the\nbilling account. The currencyCode is provided on output.\nStructure is documented below.",
      Billing_BudgetAmountSpecifiedAmount_GetTypes(),
      false,
      false,
    ),
  ];
}
