import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Organizations_IAMBindingCondition,
  Organizations_IAMBindingCondition_GetTypes,
} from "../types/Organizations_IAMBindingCondition";

export interface IAMBindingArgs {
  //
  Condition?: Organizations_IAMBindingCondition;

  // A list of users that the role should apply to. For more details on format and restrictions see https://cloud.google.com/billing/reference/rest/v1/Policy#Binding
  Members?: Array<string>;

  // The numeric ID of the organization in which you want to create a custom role.
  OrgId?: string;

  /*
The role that should be applied. Only one
`gcp.organizations.IAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  Role?: string;
}
export class IAMBinding extends Resource {
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

  //
  public Condition?: Organizations_IAMBindingCondition;

  // (Computed) The etag of the organization's IAM policy.
  public Etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Organizations_IAMBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Members",
        "A list of users that the role should apply to. For more details on format and restrictions see https://cloud.google.com/billing/reference/rest/v1/Policy#Binding",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The numeric ID of the organization in which you want to create a custom role.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.organizations.IAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
        [],
        true,
        true,
      ),
    ];
  }
}
