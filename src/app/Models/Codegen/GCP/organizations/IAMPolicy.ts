import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface IAMPolicyArgs {
  // The organization id of the target organization.
  orgId?: string;

  /*
The `gcp.organizations.getIAMPolicy` data source that represents
the IAM policy that will be applied to the organization. The policy will be
merged with any existing policy applied to the organization.

Changing this updates the policy.

Deleting this removes all policies from the organization, locking out users without
organization-level access.
*/
  policyData?: string;
}
export class IAMPolicy extends Resource {
  // (Computed) The etag of the organization's IAM policy.
  public etag?: string;

  // The organization id of the target organization.
  public orgId?: string;

  /*
The `gcp.organizations.getIAMPolicy` data source that represents
the IAM policy that will be applied to the organization. The policy will be
merged with any existing policy applied to the organization.

Changing this updates the policy.

Deleting this removes all policies from the organization, locking out users without
organization-level access.
*/
  public policyData?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "orgId",
        "The organization id of the target organization.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyData",
        "The `gcp.organizations.getIAMPolicy` data source that represents\nthe IAM policy that will be applied to the organization. The policy will be\nmerged with any existing policy applied to the organization.\n\nChanging this updates the policy.\n\nDeleting this removes all policies from the organization, locking out users without\norganization-level access.",
        [],
        true,
        false,
      ),
    ];
  }
}
