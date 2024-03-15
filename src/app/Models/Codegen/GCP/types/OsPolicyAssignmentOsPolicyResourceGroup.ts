import { OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter } from "./OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter";
import { OsPolicyAssignmentOsPolicyResourceGroupResource } from "./OsPolicyAssignmentOsPolicyResourceGroupResource";

export interface OsPolicyAssignmentOsPolicyResourceGroup {
  /*
List of inventory filters for the resource
group. The resources in this resource group are applied to the target VM if
it satisfies at least one of the following inventory filters. For example,
to apply this resource group to VMs running either `RHEL` or `CentOS`
operating systems, specify 2 items for the list with following values:
inventory_filters[0].os_short_name='rhel' and
inventory_filters[1].os_short_name='centos' If the list is empty, this
resource group will be applied to the target VM unconditionally. Structure
is documented below.
*/
  InventoryFilters?: Array<OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter>;

  /*
List of resources configured for this resource
group. The resources are executed in the exact order specified here.
Structure is documented below.
*/
  Resources?: Array<OsPolicyAssignmentOsPolicyResourceGroupResource>;
}
