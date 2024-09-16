import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroup,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroup_GetTypes,
} from './osconfig_OsPolicyAssignmentOsPolicyResourceGroup';

export interface osconfig_OsPolicyAssignmentOsPolicy {
  /*
This flag determines the OS
policy compliance status when none of the resource groups within the policy
are applicable for a VM. Set this value to `true` if the policy needs to be
reported as compliant even if the policy has nothing to validate or enforce.
*/
  allowNoResourceGroupMatch?: boolean;

  /*
Policy description. Length of the description is
limited to 1024 characters.
*/
  description?: string;

  /*
The id of the OS policy with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-63 characters.
-   Must end with a number or a letter.
-   Must be unique within the assignment.
*/
  id?: string;

  /*
Policy mode Possible values are: `MODE_UNSPECIFIED`,
`VALIDATION`, `ENFORCEMENT`.
*/
  mode?: string;

  /*
List of resource groups for the policy. For a
particular VM, resource groups are evaluated in the order specified and the
first resource group that is applicable is selected and the rest are
ignored. If none of the resource groups are applicable for a VM, the VM is
considered to be non-compliant w.r.t this policy. This behavior can be
toggled by the flag `allow_no_resource_group_match` Structure is
documented below.
*/
  resourceGroups?: Array<osconfig_OsPolicyAssignmentOsPolicyResourceGroup>;
}

export function osconfig_OsPolicyAssignmentOsPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'resourceGroups',
      'List of resource groups for the policy. For a\nparticular VM, resource groups are evaluated in the order specified and the\nfirst resource group that is applicable is selected and the rest are\nignored. If none of the resource groups are applicable for a VM, the VM is\nconsidered to be non-compliant w.r.t this policy. This behavior can be\ntoggled by the flag `allow_no_resource_group_match` Structure is\ndocumented below.',
      () => osconfig_OsPolicyAssignmentOsPolicyResourceGroup_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'allowNoResourceGroupMatch',
      'This flag determines the OS\npolicy compliance status when none of the resource groups within the policy\nare applicable for a VM. Set this value to `true` if the policy needs to be\nreported as compliant even if the policy has nothing to validate or enforce.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'Policy description. Length of the description is\nlimited to 1024 characters.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'id',
      'The id of the OS policy with the following restrictions:\n\n*   Must contain only lowercase letters, numbers, and hyphens.\n*   Must start with a letter.\n*   Must be between 1-63 characters.\n*   Must end with a number or a letter.\n*   Must be unique within the assignment.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'mode',
      'Policy mode Possible values are: `MODE_UNSPECIFIED`,\n`VALIDATION`, `ENFORCEMENT`.',
      () => [],
      true,
      false,
    ),
  ];
}
