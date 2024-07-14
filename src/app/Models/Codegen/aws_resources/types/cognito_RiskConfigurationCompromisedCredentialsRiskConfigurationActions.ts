import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cognito_RiskConfigurationCompromisedCredentialsRiskConfigurationActions {
  // The event action. Valid values are `BLOCK` or `NO_ACTION`.
  eventAction?: string;
}

export function cognito_RiskConfigurationCompromisedCredentialsRiskConfigurationActions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "eventAction",
      "The event action. Valid values are `BLOCK` or `NO_ACTION`.",
      [],
      true,
      false,
    ),
  ];
}
