import { getInstanceGroupManagerStatusStateful } from "./getInstanceGroupManagerStatusStateful";
import { getInstanceGroupManagerStatusVersionTarget } from "./getInstanceGroupManagerStatusVersionTarget";
import { getInstanceGroupManagerStatusAllInstancesConfig } from "./getInstanceGroupManagerStatusAllInstancesConfig";

export interface getInstanceGroupManagerStatus {
  // A status of consistency of Instances' versions with their target version specified by version field on Instance Group Manager.
  VersionTargets?: Array<getInstanceGroupManagerStatusVersionTarget>;

  // Status of all-instances configuration on the group.
  AllInstancesConfigs?: Array<getInstanceGroupManagerStatusAllInstancesConfig>;

  // A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.
  IsStable?: boolean;

  // Stateful status of the given Instance Group Manager.
  Statefuls?: Array<getInstanceGroupManagerStatusStateful>;
}
