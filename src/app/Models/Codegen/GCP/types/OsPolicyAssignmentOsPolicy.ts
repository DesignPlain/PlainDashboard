import { OsPolicyAssignmentOsPolicyResourceGroup } from "./OsPolicyAssignmentOsPolicyResourceGroup";

export interface OsPolicyAssignmentOsPolicy {
  /*
This flag determines the OS
policy compliance status when none of the resource groups within the policy
are applicable for a VM. Set this value to `true` if the policy needs to be
reported as compliant even if the policy has nothing to validate or enforce.
*/
  AllowNoResourceGroupMatch?: boolean;

  /*
Policy description. Length of the description is
limited to 1024 characters.
*/
  Description?: string;

  /*
The id of the OS policy with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-63 characters.
-   Must end with a number or a letter.
-   Must be unique within the assignment.
*/
  Id?: string;

  /*
Policy mode Possible values are: `MODE_UNSPECIFIED`,
`VALIDATION`, `ENFORCEMENT`.
*/
  Mode?: string;

  /*
List of resource groups for the policy. For a
particular VM, resource groups are evaluated in the order specified and the
first resource group that is applicable is selected and the rest are
ignored. If none of the resource groups are applicable for a VM, the VM is
considered to be non-compliant w.r.t this policy. This behavior can be
toggled by the flag `allow_no_resource_group_match` Structure is
documented below.
*/
  ResourceGroups?: Array<OsPolicyAssignmentOsPolicyResourceGroup>;
}
