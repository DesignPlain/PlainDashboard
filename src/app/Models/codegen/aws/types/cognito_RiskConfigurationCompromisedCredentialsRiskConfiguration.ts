import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cognito_RiskConfigurationCompromisedCredentialsRiskConfigurationActions,
  cognito_RiskConfigurationCompromisedCredentialsRiskConfigurationActions_GetTypes,
} from "./cognito_RiskConfigurationCompromisedCredentialsRiskConfigurationActions";

export interface cognito_RiskConfigurationCompromisedCredentialsRiskConfiguration {
  // The compromised credentials risk configuration actions. See details below.
  actions?: cognito_RiskConfigurationCompromisedCredentialsRiskConfigurationActions;

  // Perform the action for these events. The default is to perform all events if no event filter is specified. Valid values are `SIGN_IN`, `PASSWORD_CHANGE`, and `SIGN_UP`.
  eventFilters?: Array<string>;
}

export function cognito_RiskConfigurationCompromisedCredentialsRiskConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "actions",
      "The compromised credentials risk configuration actions. See details below.",
      () =>
        cognito_RiskConfigurationCompromisedCredentialsRiskConfigurationActions_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "eventFilters",
      "Perform the action for these events. The default is to perform all events if no event filter is specified. Valid values are `SIGN_IN`, `PASSWORD_CHANGE`, and `SIGN_UP`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
