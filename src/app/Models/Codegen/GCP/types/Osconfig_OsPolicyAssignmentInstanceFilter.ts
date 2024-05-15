import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentInstanceFilterInventory,
  Osconfig_OsPolicyAssignmentInstanceFilterInventory_GetTypes,
} from "./Osconfig_OsPolicyAssignmentInstanceFilterInventory";
import {
  Osconfig_OsPolicyAssignmentInstanceFilterExclusionLabel,
  Osconfig_OsPolicyAssignmentInstanceFilterExclusionLabel_GetTypes,
} from "./Osconfig_OsPolicyAssignmentInstanceFilterExclusionLabel";
import {
  Osconfig_OsPolicyAssignmentInstanceFilterInclusionLabel,
  Osconfig_OsPolicyAssignmentInstanceFilterInclusionLabel_GetTypes,
} from "./Osconfig_OsPolicyAssignmentInstanceFilterInclusionLabel";

export interface Osconfig_OsPolicyAssignmentInstanceFilter {
  /*
Target all VMs in the project. If true, no other criteria
is permitted.
*/
  All?: boolean;

  /*
List of label sets used for VM exclusion. If
the list has more than one label set, the VM is excluded if any of the label
sets are applicable for the VM. Structure is
documented below.
*/
  ExclusionLabels?: Array<Osconfig_OsPolicyAssignmentInstanceFilterExclusionLabel>;

  /*
List of label sets used for VM inclusion. If
the list has more than one `LabelSet`, the VM is included if any of the
label sets are applicable for the VM. Structure is
documented below.
*/
  InclusionLabels?: Array<Osconfig_OsPolicyAssignmentInstanceFilterInclusionLabel>;

  /*
List of inventories to select VMs. A VM is
selected if its inventory data matches at least one of the following
inventories. Structure is documented below.
*/
  Inventories?: Array<Osconfig_OsPolicyAssignmentInstanceFilterInventory>;
}

export function Osconfig_OsPolicyAssignmentInstanceFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "All",
      "Target all VMs in the project. If true, no other criteria\nis permitted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExclusionLabels",
      "List of label sets used for VM exclusion. If\nthe list has more than one label set, the VM is excluded if any of the label\nsets are applicable for the VM. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentInstanceFilterExclusionLabel_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InclusionLabels",
      "List of label sets used for VM inclusion. If\nthe list has more than one `LabelSet`, the VM is included if any of the\nlabel sets are applicable for the VM. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentInstanceFilterInclusionLabel_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Inventories",
      "List of inventories to select VMs. A VM is\nselected if its inventory data matches at least one of the following\ninventories. Structure is documented below.",
      Osconfig_OsPolicyAssignmentInstanceFilterInventory_GetTypes(),
      false,
      false,
    ),
  ];
}
