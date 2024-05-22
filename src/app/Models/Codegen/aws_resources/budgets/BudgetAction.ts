import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  budgets_BudgetActionDefinition,
  budgets_BudgetActionDefinition_GetTypes,
} from "../types/budgets_BudgetActionDefinition";
import {
  budgets_BudgetActionActionThreshold,
  budgets_BudgetActionActionThreshold_GetTypes,
} from "../types/budgets_BudgetActionActionThreshold";
import {
  budgets_BudgetActionSubscriber,
  budgets_BudgetActionSubscriber_GetTypes,
} from "../types/budgets_BudgetActionSubscriber";

export interface BudgetActionArgs {
  // The ID of the target account for budget. Will use current user's account_id by default if omitted.
  accountId?: string;

  // This specifies if the action needs manual or automatic approval. Valid values are `AUTOMATIC` and `MANUAL`.
  approvalModel?: string;

  // The name of a budget.
  budgetName?: string;

  // Specifies all of the type-specific parameters. See Definition.
  definition?: budgets_BudgetActionDefinition;

  // The type of a notification. Valid values are `ACTUAL` or `FORECASTED`.
  notificationType?: string;

  // The trigger threshold of the action. See Action Threshold.
  actionThreshold?: budgets_BudgetActionActionThreshold;

  // The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition. Valid values are `APPLY_IAM_POLICY`, `APPLY_SCP_POLICY`, and `RUN_SSM_DOCUMENTS`.
  actionType?: string;

  // The role passed for action execution and reversion. Roles and actions must be in the same account.
  executionRoleArn?: string;

  // A list of subscribers. See Subscriber.
  subscribers?: Array<budgets_BudgetActionSubscriber>;
}
export class BudgetAction extends Resource {
  // This specifies if the action needs manual or automatic approval. Valid values are `AUTOMATIC` and `MANUAL`.
  public approvalModel?: string;

  // The ARN of the budget action.
  public arn?: string;

  // The name of a budget.
  public budgetName?: string;

  // Specifies all of the type-specific parameters. See Definition.
  public definition?: budgets_BudgetActionDefinition;

  // The role passed for action execution and reversion. Roles and actions must be in the same account.
  public executionRoleArn?: string;

  // The ID of the target account for budget. Will use current user's account_id by default if omitted.
  public accountId?: string;

  // The id of the budget action.
  public actionId?: string;

  // The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition. Valid values are `APPLY_IAM_POLICY`, `APPLY_SCP_POLICY`, and `RUN_SSM_DOCUMENTS`.
  public actionType?: string;

  // The type of a notification. Valid values are `ACTUAL` or `FORECASTED`.
  public notificationType?: string;

  // The status of the budget action.
  public status?: string;

  // A list of subscribers. See Subscriber.
  public subscribers?: Array<budgets_BudgetActionSubscriber>;

  // The trigger threshold of the action. See Action Threshold.
  public actionThreshold?: budgets_BudgetActionActionThreshold;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "budgetName",
        "The name of a budget.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "notificationType",
        "The type of a notification. Valid values are `ACTUAL` or `FORECASTED`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "actionType",
        "The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition. Valid values are `APPLY_IAM_POLICY`, `APPLY_SCP_POLICY`, and `RUN_SSM_DOCUMENTS`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "executionRoleArn",
        "The role passed for action execution and reversion. Roles and actions must be in the same account.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subscribers",
        "A list of subscribers. See Subscriber.",
        budgets_BudgetActionSubscriber_GetTypes(),
        true,
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
      new DynamicUIProps(
        InputType.Object,
        "definition",
        "Specifies all of the type-specific parameters. See Definition.",
        budgets_BudgetActionDefinition_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "actionThreshold",
        "The trigger threshold of the action. See Action Threshold.",
        budgets_BudgetActionActionThreshold_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "approvalModel",
        "This specifies if the action needs manual or automatic approval. Valid values are `AUTOMATIC` and `MANUAL`.",
        [],
        true,
        false,
      ),
    ];
  }
}
