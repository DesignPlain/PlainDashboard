import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  budgets_BudgetActionSubscriber,
  budgets_BudgetActionSubscriber_GetTypes,
} from '../types/budgets_BudgetActionSubscriber';
import {
  budgets_BudgetActionDefinition,
  budgets_BudgetActionDefinition_GetTypes,
} from '../types/budgets_BudgetActionDefinition';
import {
  budgets_BudgetActionActionThreshold,
  budgets_BudgetActionActionThreshold_GetTypes,
} from '../types/budgets_BudgetActionActionThreshold';

export interface BudgetActionArgs {
  // A list of subscribers. See Subscriber.
  subscribers?: Array<budgets_BudgetActionSubscriber>;

  // The ID of the target account for budget. Will use current user's account_id by default if omitted.
  accountId?: string;

  // The name of a budget.
  budgetName?: string;

  // The type of a notification. Valid values are `ACTUAL` or `FORECASTED`.
  notificationType?: string;

  // Specifies all of the type-specific parameters. See Definition.
  definition?: budgets_BudgetActionDefinition;

  // The role passed for action execution and reversion. Roles and actions must be in the same account.
  executionRoleArn?: string;

  // Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The trigger threshold of the action. See Action Threshold.
  actionThreshold?: budgets_BudgetActionActionThreshold;

  // The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition. Valid values are `APPLY_IAM_POLICY`, `APPLY_SCP_POLICY`, and `RUN_SSM_DOCUMENTS`.
  actionType?: string;

  // This specifies if the action needs manual or automatic approval. Valid values are `AUTOMATIC` and `MANUAL`.
  approvalModel?: string;
}
export class BudgetAction extends DS_Resource {
  // The ID of the target account for budget. Will use current user's account_id by default if omitted.
  public accountId?: string;

  // The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition. Valid values are `APPLY_IAM_POLICY`, `APPLY_SCP_POLICY`, and `RUN_SSM_DOCUMENTS`.
  public actionType?: string;

  // The status of the budget action.
  public status?: string;

  // A list of subscribers. See Subscriber.
  public subscribers?: Array<budgets_BudgetActionSubscriber>;

  // The ARN of the budget action.
  public arn?: string;

  // The name of a budget.
  public budgetName?: string;

  // The type of a notification. Valid values are `ACTUAL` or `FORECASTED`.
  public notificationType?: string;

  // Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The id of the budget action.
  public actionId?: string;

  // The trigger threshold of the action. See Action Threshold.
  public actionThreshold?: budgets_BudgetActionActionThreshold;

  // This specifies if the action needs manual or automatic approval. Valid values are `AUTOMATIC` and `MANUAL`.
  public approvalModel?: string;

  // Specifies all of the type-specific parameters. See Definition.
  public definition?: budgets_BudgetActionDefinition;

  // The role passed for action execution and reversion. Roles and actions must be in the same account.
  public executionRoleArn?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'subscribers',
        'A list of subscribers. See Subscriber.',
        () => budgets_BudgetActionSubscriber_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'accountId',
        "The ID of the target account for budget. Will use current user's account_id by default if omitted.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'budgetName',
        'The name of a budget.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'actionThreshold',
        'The trigger threshold of the action. See Action Threshold.',
        () => budgets_BudgetActionActionThreshold_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'actionType',
        'The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition. Valid values are `APPLY_IAM_POLICY`, `APPLY_SCP_POLICY`, and `RUN_SSM_DOCUMENTS`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'approvalModel',
        'This specifies if the action needs manual or automatic approval. Valid values are `AUTOMATIC` and `MANUAL`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'notificationType',
        'The type of a notification. Valid values are `ACTUAL` or `FORECASTED`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'definition',
        'Specifies all of the type-specific parameters. See Definition.',
        () => budgets_BudgetActionDefinition_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'executionRoleArn',
        'The role passed for action execution and reversion. Roles and actions must be in the same account.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
