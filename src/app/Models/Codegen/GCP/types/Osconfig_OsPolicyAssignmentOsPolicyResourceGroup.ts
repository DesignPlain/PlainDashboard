import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResource,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResource_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResource";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroup {
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
  InventoryFilters?: Array<Osconfig_OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter>;

  /*
List of resources configured for this resource
group. The resources are executed in the exact order specified here.
Structure is documented below.
*/
  Resources?: Array<Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResource>;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "InventoryFilters",
      "List of inventory filters for the resource\ngroup. The resources in this resource group are applied to the target VM if\nit satisfies at least one of the following inventory filters. For example,\nto apply this resource group to VMs running either `RHEL` or `CentOS`\noperating systems, specify 2 items for the list with following values:\ninventory_filters[0].os_short_name='rhel' and\ninventory_filters[1].os_short_name='centos' If the list is empty, this\nresource group will be applied to the target VM unconditionally. Structure\nis documented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Resources",
      "List of resources configured for this resource\ngroup. The resources are executed in the exact order specified here.\nStructure is documented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResource_GetTypes(),
      true,
      false,
    ),
  ];
}
