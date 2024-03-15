import { PatchDeploymentInstanceFilterGroupLabel } from "./PatchDeploymentInstanceFilterGroupLabel";

export interface PatchDeploymentInstanceFilter {
  // Target all VM instances in the project. If true, no other criteria is permitted.
  All?: boolean;

  /*
Targets VM instances matching ANY of these GroupLabels. This allows targeting of disparate groups of VM instances.
Structure is documented below.
*/
  GroupLabels?: Array<PatchDeploymentInstanceFilterGroupLabel>;

  /*
Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group
VMs when targeting configs, for example prefix="prod-".
*/
  InstanceNamePrefixes?: Array<string>;

  /*
Targets any of the VM instances specified. Instances are specified by their URI in the `form zones/{{zone}}/instances/{{instance_name}}`,
`projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}`, or
`https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}`
*/
  Instances?: Array<string>;

  // Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.
  Zones?: Array<string>;
}
