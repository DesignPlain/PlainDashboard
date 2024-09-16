import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface EventRuleArgs {
  // The description of the rule.
  description?: string;

  // Used to delete managed rules created by AWS. Defaults to `false`.
  forceDestroy?: boolean;

  // The name of the rule. If omitted, this provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // The Amazon Resource Name (ARN) associated with the role that is used for target invocation.
  roleArn?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The name or ARN of the event bus to associate with this rule.
If you omit this, the `default` event bus is used.
*/
  eventBusName?: string;

  // The event pattern described a JSON object. At least one of `schedule_expression` or `event_pattern` is required. See full documentation of [Events and Event Patterns in EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) for details. --Note--: The event pattern size is 2048 by default but it is adjustable up to 4096 characters by submitting a service quota increase request. See [Amazon EventBridge quotas](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-quota.html) for details.
  eventPattern?: string;

  /*
Whether the rule should be enabled.
Defaults to `true`.
Conflicts with `state`.
*/
  isEnabled?: boolean;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`. --Note--: Due to the length of the generated suffix, must be 38 characters or less.
  namePrefix?: string;

  // The scheduling expression. For example, `cron(0 20 - - ? -)` or `rate(5 minutes)`. At least one of `schedule_expression` or `event_pattern` is required. Can only be used on the default event bus. For more information, refer to the AWS documentation [Schedule Expressions for Rules](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html).
  scheduleExpression?: string;

  /*
State of the rule.
Valid values are `DISABLED`, `ENABLED`, and `ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS`.
When state is `ENABLED`, the rule is enabled for all events except those delivered by CloudTrail.
To also enable the rule for events delivered by CloudTrail, set `state` to `ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS`.
Defaults to `ENABLED`.
Conflicts with `is_enabled`.

--NOTE:-- The rule state  `ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS` cannot be used in conjunction with the `schedule_expression` argument.
*/
  state?: string;
}
export class EventRule extends DS_Resource {
  /*
The name or ARN of the event bus to associate with this rule.
If you omit this, the `default` event bus is used.
*/
  public eventBusName?: string;

  // The event pattern described a JSON object. At least one of `schedule_expression` or `event_pattern` is required. See full documentation of [Events and Event Patterns in EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) for details. --Note--: The event pattern size is 2048 by default but it is adjustable up to 4096 characters by submitting a service quota increase request. See [Amazon EventBridge quotas](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-quota.html) for details.
  public eventPattern?: string;

  // Used to delete managed rules created by AWS. Defaults to `false`.
  public forceDestroy?: boolean;

  /*
Whether the rule should be enabled.
Defaults to `true`.
Conflicts with `state`.
*/
  public isEnabled?: boolean;

  // The name of the rule. If omitted, this provider will assign a random, unique name. Conflicts with `name_prefix`.
  public name?: string;

  // The Amazon Resource Name (ARN) associated with the role that is used for target invocation.
  public roleArn?: string;

  // The scheduling expression. For example, `cron(0 20 - - ? -)` or `rate(5 minutes)`. At least one of `schedule_expression` or `event_pattern` is required. Can only be used on the default event bus. For more information, refer to the AWS documentation [Schedule Expressions for Rules](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html).
  public scheduleExpression?: string;

  // The Amazon Resource Name (ARN) of the rule.
  public arn?: string;

  // The description of the rule.
  public description?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`. --Note--: Due to the length of the generated suffix, must be 38 characters or less.
  public namePrefix?: string;

  /*
State of the rule.
Valid values are `DISABLED`, `ENABLED`, and `ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS`.
When state is `ENABLED`, the rule is enabled for all events except those delivered by CloudTrail.
To also enable the rule for events delivered by CloudTrail, set `state` to `ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS`.
Defaults to `ENABLED`.
Conflicts with `is_enabled`.

--NOTE:-- The rule state  `ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS` cannot be used in conjunction with the `schedule_expression` argument.
*/
  public state?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'The Amazon Resource Name (ARN) associated with the role that is used for target invocation.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'eventPattern',
        'The event pattern described a JSON object. At least one of `schedule_expression` or `event_pattern` is required. See full documentation of [Events and Event Patterns in EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) for details. **Note**: The event pattern size is 2048 by default but it is adjustable up to 4096 characters by submitting a service quota increase request. See [Amazon EventBridge quotas](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-quota.html) for details.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'isEnabled',
        'Whether the rule should be enabled.\nDefaults to `true`.\nConflicts with `state`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'namePrefix',
        'Creates a unique name beginning with the specified prefix. Conflicts with `name`. **Note**: Due to the length of the generated suffix, must be 38 characters or less.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'scheduleExpression',
        'The scheduling expression. For example, `cron(0 20 * * ? *)` or `rate(5 minutes)`. At least one of `schedule_expression` or `event_pattern` is required. Can only be used on the default event bus. For more information, refer to the AWS documentation [Schedule Expressions for Rules](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'state',
        'State of the rule.\nValid values are `DISABLED`, `ENABLED`, and `ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS`.\nWhen state is `ENABLED`, the rule is enabled for all events except those delivered by CloudTrail.\nTo also enable the rule for events delivered by CloudTrail, set `state` to `ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS`.\nDefaults to `ENABLED`.\nConflicts with `is_enabled`.\n\n**NOTE:** The rule state  `ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS` cannot be used in conjunction with the `schedule_expression` argument.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'The description of the rule.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'forceDestroy',
        'Used to delete managed rules created by AWS. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the rule. If omitted, this provider will assign a random, unique name. Conflicts with `name_prefix`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'eventBusName',
        'The name or ARN of the event bus to associate with this rule.\nIf you omit this, the `default` event bus is used.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
