import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { IAMMemberCondition } from "../types/IAMMemberCondition";

export interface IAMMemberArgs {
  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  Condition?: IAMMemberCondition;

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
}
export class IAMMember extends Resource {
  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  public Condition?: IAMMemberCondition;

  // (Computed) The etag of the organization's IAM policy.
  public Etag?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The organization id of the target organization.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.organizations.IAMBinding` can be used per role. Note that custom roles must be of the format\n`organizations/{{org_id}}/roles/{{role_id}}`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Condition",
        "An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.\nStructure is documented below.",
      ),
      new DynamicUIProps(InputType.String, "Member", ""),
    ];
  }
}
