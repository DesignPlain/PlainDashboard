import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction,
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction_GetTypes,
} from "./cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction";
import {
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction,
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction_GetTypes,
} from "./cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction";
import {
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction,
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction_GetTypes,
} from "./cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction";

export interface cognito_RiskConfigurationAccountTakeoverRiskConfigurationActions {
  // Action to take for a high risk. See action block below.
  highAction?: cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction;

  // Action to take for a low risk. See action block below.
  lowAction?: cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction;

  // Action to take for a medium risk. See action block below.
  mediumAction?: cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction;
}

export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationActions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "highAction",
      "Action to take for a high risk. See action block below.",
      cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lowAction",
      "Action to take for a low risk. See action block below.",
      cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "mediumAction",
      "Action to take for a medium risk. See action block below.",
      cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction_GetTypes(),
      false,
      false,
    ),
  ];
}
