import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  budgets_BudgetNotification,
  budgets_BudgetNotification_GetTypes,
} from "../types/budgets_BudgetNotification";
import {
  budgets_BudgetPlannedLimit,
  budgets_BudgetPlannedLimit_GetTypes,
} from "../types/budgets_BudgetPlannedLimit";
import {
  budgets_BudgetCostFilter,
  budgets_BudgetCostFilter_GetTypes,
} from "../types/budgets_BudgetCostFilter";
import {
  budgets_BudgetAutoAdjustData,
  budgets_BudgetAutoAdjustData_GetTypes,
} from "../types/budgets_BudgetAutoAdjustData";
import {
  budgets_BudgetCostTypes,
  budgets_BudgetCostTypes_GetTypes,
} from "../types/budgets_BudgetCostTypes";

export interface BudgetArgs {
  // Whether this budget tracks monetary cost or usage.
  budgetType?: string;

  // Object containing Planned Budget Limits. Can be used multiple times to plan more than one budget limit. See [PlannedBudgetLimits](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_Budget.html#awscostmanagement-Type-budgets_Budget-PlannedBudgetLimits) documentation.
  plannedLimits?: Array<budgets_BudgetPlannedLimit>;

  // A list of CostFilter name/values pair to apply to budget.
  costFilters?: Array<budgets_BudgetCostFilter>;

  // The unit of measurement used for the budget forecast, actual spend, or budget threshold, such as dollars or GB. See [Spend](http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/data-type-spend.html) documentation.
  limitUnit?: string;

  // The name of a budget. Unique within accounts.
  name?: string;

  // The end of the time period covered by the budget. There are no restrictions on the end date. Format: `2017-01-01_12:00`.
  timePeriodEnd?: string;

  // The ID of the target account for budget. Will use current user's account_id by default if omitted.
  accountId?: string;

  // Object containing [AutoAdjustData] which determines the budget amount for an auto-adjusting budget.
  autoAdjustData?: budgets_BudgetAutoAdjustData;

  // The prefix of the name of a budget. Unique within accounts.
  namePrefix?: string;

  // The start of the time period covered by the budget. If you don't specify a start date, AWS defaults to the start of your chosen time period. The start date must come before the end date. Format: `2017-01-01_12:00`.
  timePeriodStart?: string;

  // The length of time until a budget resets the actual and forecasted spend. Valid values: `MONTHLY`, `QUARTERLY`, `ANNUALLY`, and `DAILY`.
  timeUnit?: string;

  // Object containing CostTypes The types of cost included in a budget, such as tax and subscriptions.
  costTypes?: budgets_BudgetCostTypes;

  // The amount of cost or usage being measured for a budget.
  limitAmount?: string;

  // Object containing Budget Notifications. Can be used multiple times to define more than one budget notification.
  notifications?: Array<budgets_BudgetNotification>;
}
export class Budget extends Resource {
  // The name of a budget. Unique within accounts.
  public name?: string;

  // Object containing Planned Budget Limits. Can be used multiple times to plan more than one budget limit. See [PlannedBudgetLimits](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_Budget.html#awscostmanagement-Type-budgets_Budget-PlannedBudgetLimits) documentation.
  public plannedLimits?: Array<budgets_BudgetPlannedLimit>;

  // The start of the time period covered by the budget. If you don't specify a start date, AWS defaults to the start of your chosen time period. The start date must come before the end date. Format: `2017-01-01_12:00`.
  public timePeriodStart?: string;

  // Whether this budget tracks monetary cost or usage.
  public budgetType?: string;

  // The amount of cost or usage being measured for a budget.
  public limitAmount?: string;

  // The prefix of the name of a budget. Unique within accounts.
  public namePrefix?: string;

  // The ID of the target account for budget. Will use current user's account_id by default if omitted.
  public accountId?: string;

  // The ARN of the budget.
  public arn?: string;

  // Object containing [AutoAdjustData] which determines the budget amount for an auto-adjusting budget.
  public autoAdjustData?: budgets_BudgetAutoAdjustData;

  // The unit of measurement used for the budget forecast, actual spend, or budget threshold, such as dollars or GB. See [Spend](http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/data-type-spend.html) documentation.
  public limitUnit?: string;

  // Object containing Budget Notifications. Can be used multiple times to define more than one budget notification.
  public notifications?: Array<budgets_BudgetNotification>;

  // The end of the time period covered by the budget. There are no restrictions on the end date. Format: `2017-01-01_12:00`.
  public timePeriodEnd?: string;

  // A list of CostFilter name/values pair to apply to budget.
  public costFilters?: Array<budgets_BudgetCostFilter>;

  // Object containing CostTypes The types of cost included in a budget, such as tax and subscriptions.
  public costTypes?: budgets_BudgetCostTypes;

  // The length of time until a budget resets the actual and forecasted spend. Valid values: `MONTHLY`, `QUARTERLY`, `ANNUALLY`, and `DAILY`.
  public timeUnit?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "costFilters",
        "A list of CostFilter name/values pair to apply to budget.",
        budgets_BudgetCostFilter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "limitAmount",
        "The amount of cost or usage being measured for a budget.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "limitUnit",
        "The unit of measurement used for the budget forecast, actual spend, or budget threshold, such as dollars or GB. See [Spend](http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/data-type-spend.html) documentation.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "timePeriodEnd",
        "The end of the time period covered by the budget. There are no restrictions on the end date. Format: `2017-01-01_12:00`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "autoAdjustData",
        "Object containing [AutoAdjustData] which determines the budget amount for an auto-adjusting budget.",
        budgets_BudgetAutoAdjustData_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "The prefix of the name of a budget. Unique within accounts.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "timePeriodStart",
        "The start of the time period covered by the budget. If you don't specify a start date, AWS defaults to the start of your chosen time period. The start date must come before the end date. Format: `2017-01-01_12:00`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "timeUnit",
        "The length of time until a budget resets the actual and forecasted spend. Valid values: `MONTHLY`, `QUARTERLY`, `ANNUALLY`, and `DAILY`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "costTypes",
        "Object containing CostTypes The types of cost included in a budget, such as tax and subscriptions.",
        budgets_BudgetCostTypes_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "budgetType",
        "Whether this budget tracks monetary cost or usage.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of a budget. Unique within accounts.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "notifications",
        "Object containing Budget Notifications. Can be used multiple times to define more than one budget notification.",
        budgets_BudgetNotification_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "plannedLimits",
        "Object containing Planned Budget Limits. Can be used multiple times to plan more than one budget limit. See [PlannedBudgetLimits](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_Budget.html#awscostmanagement-Type-budgets_Budget-PlannedBudgetLimits) documentation.",
        budgets_BudgetPlannedLimit_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "The ID of the target account for budget. Will use current user's account_id by default if omitted.",
        [],
        false,
        true,
      ),
    ];
  }
}
