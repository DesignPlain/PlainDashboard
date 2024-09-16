import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  codestarnotifications_NotificationRuleTarget,
  codestarnotifications_NotificationRuleTarget_GetTypes,
} from '../types/codestarnotifications_NotificationRuleTarget';

export interface NotificationRuleArgs {
  // The level of detail to include in the notifications for this resource. Possible values are `BASIC` and `FULL`.
  detailType?: string;

  /*
A list of event types associated with this notification rule.
For list of allowed events see [here](https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api).
*/
  eventTypeIds?: Array<string>;

  // The name of notification rule.
  name?: string;

  // The ARN of the resource to associate with the notification rule.
  resource?: string;

  // The status of the notification rule. Possible values are `ENABLED` and `DISABLED`, default is `ENABLED`.
  status?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration blocks containing notification target information. Can be specified multiple times. At least one target must be specified on creation.
  targets?: Array<codestarnotifications_NotificationRuleTarget>;
}
export class NotificationRule extends DS_Resource {
  // The level of detail to include in the notifications for this resource. Possible values are `BASIC` and `FULL`.
  public detailType?: string;

  /*
A list of event types associated with this notification rule.
For list of allowed events see [here](https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api).
*/
  public eventTypeIds?: Array<string>;

  // The name of notification rule.
  public name?: string;

  // The ARN of the resource to associate with the notification rule.
  public resource?: string;

  // The status of the notification rule. Possible values are `ENABLED` and `DISABLED`, default is `ENABLED`.
  public status?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The codestar notification rule ARN.
  public arn?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Configuration blocks containing notification target information. Can be specified multiple times. At least one target must be specified on creation.
  public targets?: Array<codestarnotifications_NotificationRuleTarget>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of notification rule.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'resource',
        'The ARN of the resource to associate with the notification rule.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'status',
        'The status of the notification rule. Possible values are `ENABLED` and `DISABLED`, default is `ENABLED`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'targets',
        'Configuration blocks containing notification target information. Can be specified multiple times. At least one target must be specified on creation.',
        () => codestarnotifications_NotificationRuleTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'detailType',
        'The level of detail to include in the notifications for this resource. Possible values are `BASIC` and `FULL`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'eventTypeIds',
        'A list of event types associated with this notification rule.\nFor list of allowed events see [here](https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api).',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
