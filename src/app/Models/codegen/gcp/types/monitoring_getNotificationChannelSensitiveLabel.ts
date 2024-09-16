import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface monitoring_getNotificationChannelSensitiveLabel {
  // An authorization token for a notification channel. Channel types that support this field include: slack
  authToken?: string;

  // An password for a notification channel. Channel types that support this field include: webhook_basicauth
  password?: string;

  // An servicekey token for a notification channel. Channel types that support this field include: pagerduty
  serviceKey?: string;
}

export function monitoring_getNotificationChannelSensitiveLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'authToken',
      'An authorization token for a notification channel. Channel types that support this field include: slack',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'password',
      'An password for a notification channel. Channel types that support this field include: webhook_basicauth',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceKey',
      'An servicekey token for a notification channel. Channel types that support this field include: pagerduty',
      () => [],
      true,
      false,
    ),
  ];
}
