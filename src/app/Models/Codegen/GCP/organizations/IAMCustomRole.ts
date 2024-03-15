import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface IAMCustomRoleArgs {
  // A human-readable description for the role.
  Description?: string;

  // The numeric ID of the organization in which you want to create a custom role.
  OrgId?: string;

  // The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified.
  Permissions?: Array<string>;

  // The role id to use for this role.
  RoleId?: string;

  /*
The current launch stage of the role.
Defaults to `GA`.
List of possible stages is [here](https://cloud.google.com/iam/reference/rest/v1/organizations.roles#Role.RoleLaunchStage).
*/
  Stage?: string;

  // A human-readable title for the role.
  Title?: string;
}
export class IAMCustomRole extends Resource {
  // A human-readable title for the role.
  public Title?: string;

  // (Optional) The current deleted state of the role.
  public Deleted?: boolean;

  // A human-readable description for the role.
  public Description?: string;

  // The name of the role in the format `organizations/{{org_id}}/roles/{{role_id}}`. Like `id`, this field can be used as a reference in other resources such as IAM role bindings.
  public Name?: string;

  // The numeric ID of the organization in which you want to create a custom role.
  public OrgId?: string;

  // The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified.
  public Permissions?: Array<string>;

  // The role id to use for this role.
  public RoleId?: string;

  /*
The current launch stage of the role.
Defaults to `GA`.
List of possible stages is [here](https://cloud.google.com/iam/reference/rest/v1/organizations.roles#Role.RoleLaunchStage).
*/
  public Stage?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-readable description for the role.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The numeric ID of the organization in which you want to create a custom role.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Permissions",
        "The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RoleId",
        "The role id to use for this role.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Stage",
        "The current launch stage of the role.\nDefaults to `GA`.\nList of possible stages is [here](https://cloud.google.com/iam/reference/rest/v1/organizations.roles#Role.RoleLaunchStage).",
      ),
      new DynamicUIProps(
        InputType.String,
        "Title",
        "A human-readable title for the role.",
      ),
    ];
  }
}