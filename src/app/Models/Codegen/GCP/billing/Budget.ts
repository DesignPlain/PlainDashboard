import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BudgetAmount } from "../types/BudgetAmount";
import { BudgetBudgetFilter } from "../types/BudgetBudgetFilter";
import { BudgetThresholdRule } from "../types/BudgetThresholdRule";
import { BudgetAllUpdatesRule } from "../types/BudgetAllUpdatesRule";

export interface BudgetArgs {
  /*
Defines notifications that are sent on every update to the
billing account's spend, regardless of the thresholds defined
using threshold rules.
Structure is documented below.
*/
  AllUpdatesRule?: BudgetAllUpdatesRule;

  /*
The budgeted amount for each usage period.
Structure is documented below.
*/
  Amount?: BudgetAmount;

  // ID of the billing account to set a budget on.
  BillingAccount?: string;

  /*
Filters that define which resources are used to compute the actual
spend against the budget.
Structure is documented below.
*/
  BudgetFilter?: BudgetBudgetFilter;

  // User data for display name in UI. Must be <= 60 chars.
  DisplayName?: string;

  /*
Rules that trigger alerts (notifications of thresholds being
crossed) when spend exceeds the specified percentages of the
budget.
Structure is documented below.
*/
  ThresholdRules?: Array<BudgetThresholdRule>;
}
export class Budget extends Resource {
  // User data for display name in UI. Must be <= 60 chars.
  public DisplayName?: string;

  /*
Resource name of the budget. The resource name
implies the scope of a budget. Values are of the form
billingAccounts/{billingAccountId}/budgets/{budgetId}.
*/
  public Name?: string;

  /*
Rules that trigger alerts (notifications of thresholds being
crossed) when spend exceeds the specified percentages of the
budget.
Structure is documented below.
*/
  public ThresholdRules?: Array<BudgetThresholdRule>;

  /*
Defines notifications that are sent on every update to the
billing account's spend, regardless of the thresholds defined
using threshold rules.
Structure is documented below.
*/
  public AllUpdatesRule?: BudgetAllUpdatesRule;

  /*
The budgeted amount for each usage period.
Structure is documented below.
*/
  public Amount?: BudgetAmount;

  // ID of the billing account to set a budget on.
  public BillingAccount?: string;

  /*
Filters that define which resources are used to compute the actual
spend against the budget.
Structure is documented below.
*/
  public BudgetFilter?: BudgetBudgetFilter;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AllUpdatesRule",
        "Defines notifications that are sent on every update to the\nbilling account's spend, regardless of the thresholds defined\nusing threshold rules.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Amount",
        "The budgeted amount for each usage period.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BillingAccount",
        "ID of the billing account to set a budget on.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BudgetFilter",
        "Filters that define which resources are used to compute the actual\nspend against the budget.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User data for display name in UI. Must be <= 60 chars.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ThresholdRules",
        "Rules that trigger alerts (notifications of thresholds being\ncrossed) when spend exceeds the specified percentages of the\nbudget.\nStructure is documented below.",
      ),
    ];
  }
}
