import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfiguration,
  securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfiguration_GetTypes,
} from "./securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfiguration";

export interface securityhub_ConfigurationPolicyConfigurationPolicy {
  // A list that defines which security standards are enabled in the configuration policy. It must be defined if `service_enabled` is set to true.
  enabledStandardArns?: Array<string>;

  // Defines which security controls are enabled in the configuration policy and any customizations to parameters affecting them. See below.
  securityControlsConfiguration?: securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfiguration;

  // Indicates whether Security Hub is enabled in the policy.
  serviceEnabled?: boolean;
}

export function securityhub_ConfigurationPolicyConfigurationPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "enabledStandardArns",
      "A list that defines which security standards are enabled in the configuration policy. It must be defined if `service_enabled` is set to true.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "securityControlsConfiguration",
      "Defines which security controls are enabled in the configuration policy and any customizations to parameters affecting them. See below.",
      () =>
        securityhub_ConfigurationPolicyConfigurationPolicySecurityControlsConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "serviceEnabled",
      "Indicates whether Security Hub is enabled in the policy.",
      () => [],
      true,
      false,
    ),
  ];
}
