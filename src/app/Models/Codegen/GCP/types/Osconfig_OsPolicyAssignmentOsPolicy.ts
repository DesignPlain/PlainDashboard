import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroup,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroup_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroup";

export interface Osconfig_OsPolicyAssignmentOsPolicy {
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
  ResourceGroups?: Array<Osconfig_OsPolicyAssignmentOsPolicyResourceGroup>;
}

export function Osconfig_OsPolicyAssignmentOsPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AllowNoResourceGroupMatch",
      "This flag determines the OS\npolicy compliance status when none of the resource groups within the policy\nare applicable for a VM. Set this value to `true` if the policy needs to be\nreported as compliant even if the policy has nothing to validate or enforce.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "Policy description. Length of the description is\nlimited to 1024 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Id",
      "The id of the OS policy with the following restrictions:\n\n*   Must contain only lowercase letters, numbers, and hyphens.\n*   Must start with a letter.\n*   Must be between 1-63 characters.\n*   Must end with a number or a letter.\n*   Must be unique within the assignment.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Mode",
      "Policy mode Possible values are: `MODE_UNSPECIFIED`,\n`VALIDATION`, `ENFORCEMENT`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ResourceGroups",
      "List of resource groups for the policy. For a\nparticular VM, resource groups are evaluated in the order specified and the\nfirst resource group that is applicable is selected and the rest are\nignored. If none of the resource groups are applicable for a VM, the VM is\nconsidered to be non-compliant w.r.t this policy. This behavior can be\ntoggled by the flag `allow_no_resource_group_match` Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
