import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  billing_BudgetAllUpdatesRule,
  billing_BudgetAllUpdatesRule_GetTypes,
} from '../types/billing_BudgetAllUpdatesRule';
import {
  billing_BudgetAmount,
  billing_BudgetAmount_GetTypes,
} from '../types/billing_BudgetAmount';
import {
  billing_BudgetBudgetFilter,
  billing_BudgetBudgetFilter_GetTypes,
} from '../types/billing_BudgetBudgetFilter';
import {
  billing_BudgetThresholdRule,
  billing_BudgetThresholdRule_GetTypes,
} from '../types/billing_BudgetThresholdRule';

export interface BudgetArgs {
  /*
Defines notifications that are sent on every update to the
billing account's spend, regardless of the thresholds defined
using threshold rules.
Structure is documented below.
*/
  allUpdatesRule?: billing_BudgetAllUpdatesRule;

  /*
The budgeted amount for each usage period.
Structure is documented below.
*/
  amount?: billing_BudgetAmount;

  // ID of the billing account to set a budget on.
  billingAccount?: string;

  /*
Filters that define which resources are used to compute the actual
spend against the budget.
Structure is documented below.
*/
  budgetFilter?: billing_BudgetBudgetFilter;

  // User data for display name in UI. Must be <= 60 chars.
  displayName?: string;

  /*
Rules that trigger alerts (notifications of thresholds being
crossed) when spend exceeds the specified percentages of the
budget.
Structure is documented below.
*/
  thresholdRules?: Array<billing_BudgetThresholdRule>;
}
export class Budget extends DS_Resource {
  /*
Defines notifications that are sent on every update to the
billing account's spend, regardless of the thresholds defined
using threshold rules.
Structure is documented below.
*/
  public allUpdatesRule?: billing_BudgetAllUpdatesRule;

  /*
The budgeted amount for each usage period.
Structure is documented below.
*/
  public amount?: billing_BudgetAmount;

  // ID of the billing account to set a budget on.
  public billingAccount?: string;

  /*
Filters that define which resources are used to compute the actual
spend against the budget.
Structure is documented below.
*/
  public budgetFilter?: billing_BudgetBudgetFilter;

  // User data for display name in UI. Must be <= 60 chars.
  public displayName?: string;

  /*
Resource name of the budget. The resource name
implies the scope of a budget. Values are of the form
billingAccounts/{billingAccountId}/budgets/{budgetId}.
*/
  public name?: string;

  /*
Rules that trigger alerts (notifications of thresholds being
crossed) when spend exceeds the specified percentages of the
budget.
Structure is documented below.
*/
  public thresholdRules?: Array<billing_BudgetThresholdRule>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'budgetFilter',
        'Filters that define which resources are used to compute the actual\nspend against the budget.\nStructure is documented below.',
        () => billing_BudgetBudgetFilter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'User data for display name in UI. Must be <= 60 chars.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'thresholdRules',
        'Rules that trigger alerts (notifications of thresholds being\ncrossed) when spend exceeds the specified percentages of the\nbudget.\nStructure is documented below.',
        () => billing_BudgetThresholdRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'allUpdatesRule',
        "Defines notifications that are sent on every update to the\nbilling account's spend, regardless of the thresholds defined\nusing threshold rules.\nStructure is documented below.",
        () => billing_BudgetAllUpdatesRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'amount',
        'The budgeted amount for each usage period.\nStructure is documented below.',
        () => billing_BudgetAmount_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'billingAccount',
        'ID of the billing account to set a budget on.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
