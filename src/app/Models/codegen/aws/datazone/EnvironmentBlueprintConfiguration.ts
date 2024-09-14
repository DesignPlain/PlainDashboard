import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface EnvironmentBlueprintConfigurationArgs {
  // ARN of the provisioning role with which this blueprint is created.
  provisioningRoleArn?: string;

  // Parameters for each region in which the blueprint is enabled
  regionalParameters?: Map<string, Map<string, string>>;

  // ID of the Domain.
  domainId?: string;

  /*
Regions in which the blueprint is enabled

The following arguments are optional:
*/
  enabledRegions?: Array<string>;

  // ID of the Environment Blueprint
  environmentBlueprintId?: string;

  // ARN of the manage access role with which this blueprint is created.
  manageAccessRoleArn?: string;
}
export class EnvironmentBlueprintConfiguration extends DS_Resource {
  // ARN of the provisioning role with which this blueprint is created.
  public provisioningRoleArn?: string;

  // Parameters for each region in which the blueprint is enabled
  public regionalParameters?: Map<string, Map<string, string>>;

  // ID of the Domain.
  public domainId?: string;

  /*
Regions in which the blueprint is enabled

The following arguments are optional:
*/
  public enabledRegions?: Array<string>;

  // ID of the Environment Blueprint
  public environmentBlueprintId?: string;

  // ARN of the manage access role with which this blueprint is created.
  public manageAccessRoleArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "domainId",
        "ID of the Domain.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "enabledRegions",
        "Regions in which the blueprint is enabled\n\nThe following arguments are optional:",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "environmentBlueprintId",
        "ID of the Environment Blueprint",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "manageAccessRoleArn",
        "ARN of the manage access role with which this blueprint is created.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "provisioningRoleArn",
        "ARN of the provisioning role with which this blueprint is created.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "regionalParameters",
        "Parameters for each region in which the blueprint is enabled",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
