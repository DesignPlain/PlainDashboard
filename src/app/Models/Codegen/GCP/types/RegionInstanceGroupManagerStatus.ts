import { RegionInstanceGroupManagerStatusStateful } from "./RegionInstanceGroupManagerStatusStateful";
import { RegionInstanceGroupManagerStatusVersionTarget } from "./RegionInstanceGroupManagerStatusVersionTarget";
import { RegionInstanceGroupManagerStatusAllInstancesConfig } from "./RegionInstanceGroupManagerStatusAllInstancesConfig";

export interface RegionInstanceGroupManagerStatus {
  // Stateful status of the given Instance Group Manager.
  Statefuls?: Array<RegionInstanceGroupManagerStatusStateful>;

  // A bit indicating whether version target has been reached in this managed instance group, i.e. all instances are in their target version. Instances' target version are specified by version field on Instance Group Manager.
  VersionTargets?: Array<RegionInstanceGroupManagerStatusVersionTarget>;

  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  AllInstancesConfigs?: Array<RegionInstanceGroupManagerStatusAllInstancesConfig>;

  // A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.
  IsStable?: boolean;
}
