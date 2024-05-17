import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Billing_BudgetAmount,
  Billing_BudgetAmount_GetTypes,
} from "../types/Billing_BudgetAmount";
import {
  Billing_BudgetBudgetFilter,
  Billing_BudgetBudgetFilter_GetTypes,
} from "../types/Billing_BudgetBudgetFilter";
import {
  Billing_BudgetThresholdRule,
  Billing_BudgetThresholdRule_GetTypes,
} from "../types/Billing_BudgetThresholdRule";
import {
  Billing_BudgetAllUpdatesRule,
  Billing_BudgetAllUpdatesRule_GetTypes,
} from "../types/Billing_BudgetAllUpdatesRule";

export interface BudgetArgs {
  /*
Defines notifications that are sent on every update to the
billing account's spend, regardless of the thresholds defined
using threshold rules.
Structure is documented below.
*/
  AllUpdatesRule?: Billing_BudgetAllUpdatesRule;

  /*
The budgeted amount for each usage period.
Structure is documented below.
*/
  Amount?: Billing_BudgetAmount;

  // ID of the billing account to set a budget on.
  BillingAccount?: string;

  /*
Filters that define which resources are used to compute the actual
spend against the budget.
Structure is documented below.
*/
  BudgetFilter?: Billing_BudgetBudgetFilter;

  // User data for display name in UI. Must be <= 60 chars.
  DisplayName?: string;

  /*
Rules that trigger alerts (notifications of thresholds being
crossed) when spend exceeds the specified percentages of the
budget.
Structure is documented below.
*/
  ThresholdRules?: Array<Billing_BudgetThresholdRule>;
}
export class Budget extends Resource {
  /*
Defines notifications that are sent on every update to the
billing account's spend, regardless of the thresholds defined
using threshold rules.
Structure is documented below.
*/
  public AllUpdatesRule?: Billing_BudgetAllUpdatesRule;

  /*
The budgeted amount for each usage period.
Structure is documented below.
*/
  public Amount?: Billing_BudgetAmount;

  // ID of the billing account to set a budget on.
  public BillingAccount?: string;

  /*
Filters that define which resources are used to compute the actual
spend against the budget.
Structure is documented below.
*/
  public BudgetFilter?: Billing_BudgetBudgetFilter;

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
  public ThresholdRules?: Array<Billing_BudgetThresholdRule>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User data for display name in UI. Must be <= 60 chars.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ThresholdRules",
        "Rules that trigger alerts (notifications of thresholds being\ncrossed) when spend exceeds the specified percentages of the\nbudget.\nStructure is documented below.",
        Billing_BudgetThresholdRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AllUpdatesRule",
        "Defines notifications that are sent on every update to the\nbilling account's spend, regardless of the thresholds defined\nusing threshold rules.\nStructure is documented below.",
        Billing_BudgetAllUpdatesRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Amount",
        "The budgeted amount for each usage period.\nStructure is documented below.",
        Billing_BudgetAmount_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "BillingAccount",
        "ID of the billing account to set a budget on.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BudgetFilter",
        "Filters that define which resources are used to compute the actual\nspend against the budget.\nStructure is documented below.",
        Billing_BudgetBudgetFilter_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
