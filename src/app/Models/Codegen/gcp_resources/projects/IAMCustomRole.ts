import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface IAMCustomRoleArgs {
  // The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified.
  permissions?: Array<string>;

  /*
The project that the custom role will be created in.
Defaults to the provider project configuration.
*/
  project?: string;

  // The camel case role id to use for this role. Cannot contain `-` characters.
  roleId?: string;

  /*
The current launch stage of the role.
Defaults to `GA`.
List of possible stages is [here](https://cloud.google.com/iam/reference/rest/v1/organizations.roles#Role.RoleLaunchStage).
*/
  stage?: string;

  // A human-readable title for the role.
  title?: string;

  // A human-readable description for the role.
  description?: string;
}
export class IAMCustomRole extends Resource {
  // The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified.
  public permissions?: Array<string>;

  /*
The project that the custom role will be created in.
Defaults to the provider project configuration.
*/
  public project?: string;

  // The camel case role id to use for this role. Cannot contain `-` characters.
  public roleId?: string;

  /*
The current launch stage of the role.
Defaults to `GA`.
List of possible stages is [here](https://cloud.google.com/iam/reference/rest/v1/organizations.roles#Role.RoleLaunchStage).
*/
  public stage?: string;

  // A human-readable title for the role.
  public title?: string;

  // (Optional) The current deleted state of the role.
  public deleted?: boolean;

  // A human-readable description for the role.
  public description?: string;

  // The name of the role in the format `projects/{{project}}/roles/{{role_id}}`. Like `id`, this field can be used as a reference in other resources such as IAM role bindings.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project that the custom role will be created in.\nDefaults to the provider project configuration.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleId",
        "The camel case role id to use for this role. Cannot contain `-` characters.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "stage",
        "The current launch stage of the role.\nDefaults to `GA`.\nList of possible stages is [here](https://cloud.google.com/iam/reference/rest/v1/organizations.roles#Role.RoleLaunchStage).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "title",
        "A human-readable title for the role.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A human-readable description for the role.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "permissions",
        "The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
