import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cfg_RuleSourceSourceDetail {
  // The source of the event, such as an AWS service, that triggers AWS Config to evaluate your AWSresources. This defaults to `aws.config` and is the only valid value.
  eventSource?: string;

  // The frequency that you want AWS Config to run evaluations for a rule that istriggered periodically. If specified, requires `message_type` to be `ScheduledNotification`.
  maximumExecutionFrequency?: string;

  /*
The type of notification that triggers AWS Config to run an evaluation for a rule. You canspecify the following notification types:
- `ConfigurationItemChangeNotification` - Triggers an evaluation when AWS Config delivers a configuration item as a result of a resource change.
- `OversizedConfigurationItemChangeNotification` - Triggers an evaluation when AWS Config delivers an oversized configuration item. AWS Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.
- `ScheduledNotification` - Triggers a periodic evaluation at the frequency specified for `maximum_execution_frequency`.
- `ConfigurationSnapshotDeliveryCompleted` - Triggers a periodic evaluation when AWS Config delivers a configuration snapshot.
*/
  messageType?: string;
}

export function cfg_RuleSourceSourceDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'eventSource',
      'The source of the event, such as an AWS service, that triggers AWS Config to evaluate your AWSresources. This defaults to `aws.config` and is the only valid value.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'maximumExecutionFrequency',
      'The frequency that you want AWS Config to run evaluations for a rule that istriggered periodically. If specified, requires `message_type` to be `ScheduledNotification`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'messageType',
      'The type of notification that triggers AWS Config to run an evaluation for a rule. You canspecify the following notification types:\n* `ConfigurationItemChangeNotification` - Triggers an evaluation when AWS Config delivers a configuration item as a result of a resource change.\n* `OversizedConfigurationItemChangeNotification` - Triggers an evaluation when AWS Config delivers an oversized configuration item. AWS Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.\n* `ScheduledNotification` - Triggers a periodic evaluation at the frequency specified for `maximum_execution_frequency`.\n* `ConfigurationSnapshotDeliveryCompleted` - Triggers a periodic evaluation when AWS Config delivers a configuration snapshot.',
      () => [],
      false,
      false,
    ),
  ];
}
