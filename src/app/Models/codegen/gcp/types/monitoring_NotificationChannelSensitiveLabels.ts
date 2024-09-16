import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface monitoring_NotificationChannelSensitiveLabels {
  /*
An servicekey token for a notification channel. Channel types that support this field include: pagerduty
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  serviceKey?: string;

  /*
An authorization token for a notification channel. Channel types that support this field include: slack
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  authToken?: string;

  /*
An password for a notification channel. Channel types that support this field include: webhook_basicauth
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;
}

export function monitoring_NotificationChannelSensitiveLabels_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'serviceKey',
      'An servicekey token for a notification channel. Channel types that support this field include: pagerduty\n**Note**: This property is sensitive and will not be displayed in the plan.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'authToken',
      'An authorization token for a notification channel. Channel types that support this field include: slack\n**Note**: This property is sensitive and will not be displayed in the plan.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'password',
      'An password for a notification channel. Channel types that support this field include: webhook_basicauth\n**Note**: This property is sensitive and will not be displayed in the plan.',
      () => [],
      false,
      false,
    ),
  ];
}
