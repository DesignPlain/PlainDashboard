import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter,
  securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter_GetTypes,
} from "./securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter";

export interface securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter {
  // The ID of the security control. For more information see the [Security Hub controls reference] documentation.
  securityControlId?: string;

  // An object that specifies parameter values for a control in a configuration policy. See below.
  parameters?: Array<securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter>;
}

export function securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "parameters",
      "An object that specifies parameter values for a control in a configuration policy. See below.",
      () =>
        securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "securityControlId",
      "The ID of the security control. For more information see the [Security Hub controls reference] documentation.",
      () => [],
      true,
      false,
    ),
  ];
}
