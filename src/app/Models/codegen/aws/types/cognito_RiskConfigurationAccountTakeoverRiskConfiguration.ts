import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationActions,
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationActions_GetTypes,
} from "./cognito_RiskConfigurationAccountTakeoverRiskConfigurationActions";
import {
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration,
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration_GetTypes,
} from "./cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration";

export interface cognito_RiskConfigurationAccountTakeoverRiskConfiguration {
  // Account takeover risk configuration actions. See details below.
  actions?: cognito_RiskConfigurationAccountTakeoverRiskConfigurationActions;

  // The notify configuration used to construct email notifications. See details below.
  notifyConfiguration?: cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration;
}

export function cognito_RiskConfigurationAccountTakeoverRiskConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "actions",
      "Account takeover risk configuration actions. See details below.",
      () =>
        cognito_RiskConfigurationAccountTakeoverRiskConfigurationActions_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "notifyConfiguration",
      "The notify configuration used to construct email notifications. See details below.",
      () =>
        cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
