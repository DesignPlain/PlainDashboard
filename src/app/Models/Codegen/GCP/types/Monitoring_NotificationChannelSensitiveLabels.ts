import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_NotificationChannelSensitiveLabels {
  /*
An authorization token for a notification channel. Channel types that support this field include: slack
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  AuthToken?: string;

  /*
An password for a notification channel. Channel types that support this field include: webhook_basicauth
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  /*
An servicekey token for a notification channel. Channel types that support this field include: pagerduty
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  ServiceKey?: string;
}

export function Monitoring_NotificationChannelSensitiveLabels_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AuthToken",
      "An authorization token for a notification channel. Channel types that support this field include: slack\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Password",
      "An password for a notification channel. Channel types that support this field include: webhook_basicauth\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceKey",
      "An servicekey token for a notification channel. Channel types that support this field include: pagerduty\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      false,
    ),
  ];
}
