import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  osconfig_OsPolicyAssignmentInstanceFilterExclusionLabel,
  osconfig_OsPolicyAssignmentInstanceFilterExclusionLabel_GetTypes,
} from "./osconfig_OsPolicyAssignmentInstanceFilterExclusionLabel";
import {
  osconfig_OsPolicyAssignmentInstanceFilterInclusionLabel,
  osconfig_OsPolicyAssignmentInstanceFilterInclusionLabel_GetTypes,
} from "./osconfig_OsPolicyAssignmentInstanceFilterInclusionLabel";
import {
  osconfig_OsPolicyAssignmentInstanceFilterInventory,
  osconfig_OsPolicyAssignmentInstanceFilterInventory_GetTypes,
} from "./osconfig_OsPolicyAssignmentInstanceFilterInventory";

export interface osconfig_OsPolicyAssignmentInstanceFilter {
  /*
List of label sets used for VM inclusion. If
the list has more than one `LabelSet`, the VM is included if any of the
label sets are applicable for the VM. Structure is
documented below.
*/
  inclusionLabels?: Array<osconfig_OsPolicyAssignmentInstanceFilterInclusionLabel>;

  /*
List of inventories to select VMs. A VM is
selected if its inventory data matches at least one of the following
inventories. Structure is documented below.
*/
  inventories?: Array<osconfig_OsPolicyAssignmentInstanceFilterInventory>;

  /*
Target all VMs in the project. If true, no other criteria
is permitted.
*/
  all?: boolean;

  /*
List of label sets used for VM exclusion. If
the list has more than one label set, the VM is excluded if any of the label
sets are applicable for the VM. Structure is
documented below.
*/
  exclusionLabels?: Array<osconfig_OsPolicyAssignmentInstanceFilterExclusionLabel>;
}

export function osconfig_OsPolicyAssignmentInstanceFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "inclusionLabels",
      "List of label sets used for VM inclusion. If\nthe list has more than one `LabelSet`, the VM is included if any of the\nlabel sets are applicable for the VM. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentInstanceFilterInclusionLabel_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inventories",
      "List of inventories to select VMs. A VM is\nselected if its inventory data matches at least one of the following\ninventories. Structure is documented below.",
      osconfig_OsPolicyAssignmentInstanceFilterInventory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "all",
      "Target all VMs in the project. If true, no other criteria\nis permitted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "exclusionLabels",
      "List of label sets used for VM exclusion. If\nthe list has more than one label set, the VM is excluded if any of the label\nsets are applicable for the VM. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentInstanceFilterExclusionLabel_GetTypes(),
      false,
      false,
    ),
  ];
}
