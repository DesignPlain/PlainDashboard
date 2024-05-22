import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface IAMCustomRoleArgs {
  // The numeric ID of the organization in which you want to create a custom role.
  orgId?: string;

  // The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified.
  permissions?: Array<string>;

  // The role id to use for this role.
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
  // A human-readable title for the role.
  public title?: string;

  // (Optional) The current deleted state of the role.
  public deleted?: boolean;

  // A human-readable description for the role.
  public description?: string;

  // The name of the role in the format `organizations/{{org_id}}/roles/{{role_id}}`. Like `id`, this field can be used as a reference in other resources such as IAM role bindings.
  public name?: string;

  // The numeric ID of the organization in which you want to create a custom role.
  public orgId?: string;

  // The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified.
  public permissions?: Array<string>;

  // The role id to use for this role.
  public roleId?: string;

  /*
The current launch stage of the role.
Defaults to `GA`.
List of possible stages is [here](https://cloud.google.com/iam/reference/rest/v1/organizations.roles#Role.RoleLaunchStage).
*/
  public stage?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "orgId",
        "The numeric ID of the organization in which you want to create a custom role.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "permissions",
        "The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleId",
        "The role id to use for this role.",
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
    ];
  }
}
