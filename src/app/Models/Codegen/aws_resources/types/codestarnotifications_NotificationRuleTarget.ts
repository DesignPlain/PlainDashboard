import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface codestarnotifications_NotificationRuleTarget {
  // The type of the notification target. Default value is `SNS`.
  type?: string;

  // The ARN of notification rule target. For example, a SNS Topic ARN.
  address?: string;

  // The status of the notification rule. Possible values are `ENABLED` and `DISABLED`, default is `ENABLED`.
  status?: string;
}

export function codestarnotifications_NotificationRuleTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of the notification target. Default value is `SNS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "address",
      "The ARN of notification rule target. For example, a SNS Topic ARN.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of the notification rule. Possible values are `ENABLED` and `DISABLED`, default is `ENABLED`.",
      [],
      false,
      false,
    ),
  ];
}
