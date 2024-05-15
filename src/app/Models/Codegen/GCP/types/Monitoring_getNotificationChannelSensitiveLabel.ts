import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_getNotificationChannelSensitiveLabel {
  // An authorization token for a notification channel. Channel types that support this field include: slack
  AuthToken?: string;

  // An password for a notification channel. Channel types that support this field include: webhook_basicauth
  Password?: string;

  // An servicekey token for a notification channel. Channel types that support this field include: pagerduty
  ServiceKey?: string;
}

export function Monitoring_getNotificationChannelSensitiveLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AuthToken",
      "An authorization token for a notification channel. Channel types that support this field include: slack",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Password",
      "An password for a notification channel. Channel types that support this field include: webhook_basicauth",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceKey",
      "An servicekey token for a notification channel. Channel types that support this field include: pagerduty",
      [],
      true,
      false,
    ),
  ];
}
