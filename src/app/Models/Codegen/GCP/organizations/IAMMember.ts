import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Organizations_IAMMemberCondition,
  Organizations_IAMMemberCondition_GetTypes,
} from "../types/Organizations_IAMMemberCondition";

export interface IAMMemberArgs {
  //
  Member?: string;

  // The organization id of the target organization.
  OrgId?: string;

  /*
The role that should be applied. Only one
`gcp.organizations.IAMBinding` can be used per role. Note that custom roles must be of the format
`organizations/{{org_id}}/roles/{{role_id}}`.
*/
  Role?: string;

  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  Condition?: Organizations_IAMMemberCondition;
}
export class IAMMember extends Resource {
  //
  public Member?: string;

  // The organization id of the target organization.
  public OrgId?: string;

  /*
The role that should be applied. Only one
`gcp.organizations.IAMBinding` can be used per role. Note that custom roles must be of the format
`organizations/{{org_id}}/roles/{{role_id}}`.
*/
  public Role?: string;

  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  public Condition?: Organizations_IAMMemberCondition;

  // (Computed) The etag of the organization's IAM policy.
  public Etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Member", "", [], true, true),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The organization id of the target organization.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.organizations.IAMBinding` can be used per role. Note that custom roles must be of the format\n`organizations/{{org_id}}/roles/{{role_id}}`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.\nStructure is documented below.",
        Organizations_IAMMemberCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
