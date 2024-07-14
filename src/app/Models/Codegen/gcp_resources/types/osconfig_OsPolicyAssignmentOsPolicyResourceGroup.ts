import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResource,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResource_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResource";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroup {
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
  inventoryFilters?: Array<osconfig_OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter>;

  /*
List of resources configured for this resource
group. The resources are executed in the exact order specified here.
Structure is documented below.
*/
  resources?: Array<osconfig_OsPolicyAssignmentOsPolicyResourceGroupResource>;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "inventoryFilters",
      "List of inventory filters for the resource\ngroup. The resources in this resource group are applied to the target VM if\nit satisfies at least one of the following inventory filters. For example,\nto apply this resource group to VMs running either `RHEL` or `CentOS`\noperating systems, specify 2 items for the list with following values:\ninventory_filters[0].os_short_name='rhel' and\ninventory_filters[1].os_short_name='centos' If the list is empty, this\nresource group will be applied to the target VM unconditionally. Structure\nis documented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resources",
      "List of resources configured for this resource\ngroup. The resources are executed in the exact order specified here.\nStructure is documented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResource_GetTypes(),
      true,
      false,
    ),
  ];
}
