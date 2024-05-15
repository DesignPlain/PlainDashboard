import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface IAMCustomRoleArgs {
  // The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified.
  Permissions?: Array<string>;

  /*
The project that the custom role will be created in.
Defaults to the provider project configuration.
*/
  Project?: string;

  // The camel case role id to use for this role. Cannot contain `-` characters.
  RoleId?: string;

  /*
The current launch stage of the role.
Defaults to `GA`.
List of possible stages is [here](https://cloud.google.com/iam/reference/rest/v1/organizations.roles#Role.RoleLaunchStage).
*/
  Stage?: string;

  // A human-readable title for the role.
  Title?: string;

  // A human-readable description for the role.
  Description?: string;
}
export class IAMCustomRole extends Resource {
  /*
The current launch stage of the role.
Defaults to `GA`.
List of possible stages is [here](https://cloud.google.com/iam/reference/rest/v1/organizations.roles#Role.RoleLaunchStage).
*/
  public Stage?: string;

  // A human-readable title for the role.
  public Title?: string;

  // (Optional) The current deleted state of the role.
  public Deleted?: boolean;

  // A human-readable description for the role.
  public Description?: string;

  // The name of the role in the format `projects/{{project}}/roles/{{role_id}}`. Like `id`, this field can be used as a reference in other resources such as IAM role bindings.
  public Name?: string;

  // The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified.
  public Permissions?: Array<string>;

  /*
The project that the custom role will be created in.
Defaults to the provider project configuration.
*/
  public Project?: string;

  // The camel case role id to use for this role. Cannot contain `-` characters.
  public RoleId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "Permissions",
        "The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project that the custom role will be created in.\nDefaults to the provider project configuration.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "RoleId",
        "The camel case role id to use for this role. Cannot contain `-` characters.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Stage",
        "The current launch stage of the role.\nDefaults to `GA`.\nList of possible stages is [here](https://cloud.google.com/iam/reference/rest/v1/organizations.roles#Role.RoleLaunchStage).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Title",
        "A human-readable title for the role.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-readable description for the role.",
        [],
        false,
        false,
      ),
    ];
  }
}
