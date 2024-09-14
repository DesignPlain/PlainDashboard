import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction {
  //
  eventAction?: string;

  // Whether to send a notification.
  notify?: boolean;
}

export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "eventAction",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "notify",
      "Whether to send a notification.",
      () => [],
      true,
      false,
    ),
  ];
}
