import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datazone_EnvironmentProfileUserParameter,
  datazone_EnvironmentProfileUserParameter_GetTypes,
} from "../types/datazone_EnvironmentProfileUserParameter";

export interface EnvironmentProfileArgs {
  // Name of the environment profile.
  name?: string;

  /*
Project identifier for environment profile.

The following arguments are optional:
*/
  projectIdentifier?: string;

  // Array of user parameters of the environment profile with the following attributes:
  userParameters?: Array<datazone_EnvironmentProfileUserParameter>;

  // Id of the AWS account being used.
  awsAccountId?: string;

  // Desired region for environment profile.
  awsAccountRegion?: string;

  // Description of environment profile.
  description?: string;

  // Domain Identifier for environment profile.
  domainIdentifier?: string;

  // ID of the blueprint which the environment will be created with.
  environmentBlueprintIdentifier?: string;
}
export class EnvironmentProfile extends DS_Resource {
  // Id of the AWS account being used.
  public awsAccountId?: string;

  // Creation time of environment profile.
  public createdAt?: string;

  // Domain Identifier for environment profile.
  public domainIdentifier?: string;

  // ID of the blueprint which the environment will be created with.
  public environmentBlueprintIdentifier?: string;

  // Name of the environment profile.
  public name?: string;

  /*
Project identifier for environment profile.

The following arguments are optional:
*/
  public projectIdentifier?: string;

  // Time of last update to environment profile.
  public updatedAt?: string;

  // Desired region for environment profile.
  public awsAccountRegion?: string;

  // Creator of environment profile.
  public createdBy?: string;

  // Description of environment profile.
  public description?: string;

  // Array of user parameters of the environment profile with the following attributes:
  public userParameters?: Array<datazone_EnvironmentProfileUserParameter>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "projectIdentifier",
        "Project identifier for environment profile.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "userParameters",
        "Array of user parameters of the environment profile with the following attributes:",
        () => datazone_EnvironmentProfileUserParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "Id of the AWS account being used.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountRegion",
        "Desired region for environment profile.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of environment profile.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainIdentifier",
        "Domain Identifier for environment profile.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "environmentBlueprintIdentifier",
        "ID of the blueprint which the environment will be created with.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the environment profile.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
