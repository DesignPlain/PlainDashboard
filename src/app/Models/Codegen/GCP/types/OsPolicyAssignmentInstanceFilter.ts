import { OsPolicyAssignmentInstanceFilterExclusionLabel } from "./OsPolicyAssignmentInstanceFilterExclusionLabel";
import { OsPolicyAssignmentInstanceFilterInclusionLabel } from "./OsPolicyAssignmentInstanceFilterInclusionLabel";
import { OsPolicyAssignmentInstanceFilterInventory } from "./OsPolicyAssignmentInstanceFilterInventory";

export interface OsPolicyAssignmentInstanceFilter {
  /*
List of inventories to select VMs. A VM is
selected if its inventory data matches at least one of the following
inventories. Structure is documented below.
*/
  Inventories?: Array<OsPolicyAssignmentInstanceFilterInventory>;

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
  ExclusionLabels?: Array<OsPolicyAssignmentInstanceFilterExclusionLabel>;

  /*
List of label sets used for VM inclusion. If
the list has more than one `LabelSet`, the VM is included if any of the
label sets are applicable for the VM. Structure is
documented below.
*/
  InclusionLabels?: Array<OsPolicyAssignmentInstanceFilterInclusionLabel>;
}
