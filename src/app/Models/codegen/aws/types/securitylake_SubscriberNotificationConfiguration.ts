import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securitylake_SubscriberNotificationConfigurationHttpsNotificationConfiguration,
  securitylake_SubscriberNotificationConfigurationHttpsNotificationConfiguration_GetTypes,
} from './securitylake_SubscriberNotificationConfigurationHttpsNotificationConfiguration';
import {
  securitylake_SubscriberNotificationConfigurationSqsNotificationConfiguration,
  securitylake_SubscriberNotificationConfigurationSqsNotificationConfiguration_GetTypes,
} from './securitylake_SubscriberNotificationConfigurationSqsNotificationConfiguration';

export interface securitylake_SubscriberNotificationConfiguration {
  // The configurations for HTTPS subscriber notification.
  httpsNotificationConfiguration?: securitylake_SubscriberNotificationConfigurationHttpsNotificationConfiguration;

  /*
The configurations for SQS subscriber notification.
There are no parameters within `sqs_notification_configuration`.
*/
  sqsNotificationConfiguration?: securitylake_SubscriberNotificationConfigurationSqsNotificationConfiguration;
}

export function securitylake_SubscriberNotificationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'httpsNotificationConfiguration',
      'The configurations for HTTPS subscriber notification.',
      () =>
        securitylake_SubscriberNotificationConfigurationHttpsNotificationConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sqsNotificationConfiguration',
      'The configurations for SQS subscriber notification.\nThere are no parameters within `sqs_notification_configuration`.',
      () =>
        securitylake_SubscriberNotificationConfigurationSqsNotificationConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
