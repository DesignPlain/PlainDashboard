import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  securityhub_ConfigurationPolicyConfigurationPolicy,
  securityhub_ConfigurationPolicyConfigurationPolicy_GetTypes,
} from "../types/securityhub_ConfigurationPolicyConfigurationPolicy";

export interface ConfigurationPolicyArgs {
  // The description of the configuration policy.
  description?: string;

  // The name of the configuration policy.
  name?: string;

  // Defines how Security Hub is configured. See below.
  configurationPolicy?: securityhub_ConfigurationPolicyConfigurationPolicy;
}
export class ConfigurationPolicy extends DS_Resource {
  //
  public arn?: string;

  // Defines how Security Hub is configured. See below.
  public configurationPolicy?: securityhub_ConfigurationPolicyConfigurationPolicy;

  // The description of the configuration policy.
  public description?: string;

  // The name of the configuration policy.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the configuration policy.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the configuration policy.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "configurationPolicy",
        "Defines how Security Hub is configured. See below.",
        () => securityhub_ConfigurationPolicyConfigurationPolicy_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
