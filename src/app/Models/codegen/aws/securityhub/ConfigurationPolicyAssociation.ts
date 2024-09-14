import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ConfigurationPolicyAssociationArgs {
  // The universally unique identifier (UUID) of the configuration policy.
  policyId?: string;

  // The identifier of the target account, organizational unit, or the root to associate with the specified configuration.
  targetId?: string;
}
export class ConfigurationPolicyAssociation extends DS_Resource {
  // The universally unique identifier (UUID) of the configuration policy.
  public policyId?: string;

  // The identifier of the target account, organizational unit, or the root to associate with the specified configuration.
  public targetId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policyId",
        "The universally unique identifier (UUID) of the configuration policy.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetId",
        "The identifier of the target account, organizational unit, or the root to associate with the specified configuration.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
