import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { IAMBindingCondition } from "../types/IAMBindingCondition";

export interface IAMBindingArgs {
  // The numeric ID of the organization in which you want to create a custom role.
  OrgId?: string;

  /*
The role that should be applied. Only one
`gcp.organizations.IAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  Role?: string;

  //
  Condition?: IAMBindingCondition;

  // A list of users that the role should apply to. For more details on format and restrictions see https://cloud.google.com/billing/reference/rest/v1/Policy#Binding
  Members?: Array<string>;
}
export class IAMBinding extends Resource {
  //
  public Condition?: IAMBindingCondition;

  // (Computed) The etag of the organization's IAM policy.
  public Etag?: string;

  // A list of users that the role should apply to. For more details on format and restrictions see https://cloud.google.com/billing/reference/rest/v1/Policy#Binding
  public Members?: Array<string>;

  // The numeric ID of the organization in which you want to create a custom role.
  public OrgId?: string;

  /*
The role that should be applied. Only one
`gcp.organizations.IAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.organizations.IAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
      ),
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(
        InputType.DropDown,
        "Members",
        "A list of users that the role should apply to. For more details on format and restrictions see https://cloud.google.com/billing/reference/rest/v1/Policy#Binding",
      ),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The numeric ID of the organization in which you want to create a custom role.",
      ),
    ];
  }
}
