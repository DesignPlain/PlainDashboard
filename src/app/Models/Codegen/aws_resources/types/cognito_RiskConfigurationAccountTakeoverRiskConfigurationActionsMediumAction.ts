import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction {
  // The action to take in response to the account takeover action. Valid values are `BLOCK`, `MFA_IF_CONFIGURED`, `MFA_REQUIRED` and `NO_ACTION`.
  eventAction?: string;

  // Whether to send a notification.
  notify?: boolean;
}

export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "eventAction",
      "The action to take in response to the account takeover action. Valid values are `BLOCK`, `MFA_IF_CONFIGURED`, `MFA_REQUIRED` and `NO_ACTION`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "notify",
      "Whether to send a notification.",
      [],
      true,
      false,
    ),
  ];
}
