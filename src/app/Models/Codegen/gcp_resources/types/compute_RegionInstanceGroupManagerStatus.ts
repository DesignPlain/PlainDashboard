import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RegionInstanceGroupManagerStatusVersionTarget,
  compute_RegionInstanceGroupManagerStatusVersionTarget_GetTypes,
} from "./compute_RegionInstanceGroupManagerStatusVersionTarget";
import {
  compute_RegionInstanceGroupManagerStatusAllInstancesConfig,
  compute_RegionInstanceGroupManagerStatusAllInstancesConfig_GetTypes,
} from "./compute_RegionInstanceGroupManagerStatusAllInstancesConfig";
import {
  compute_RegionInstanceGroupManagerStatusStateful,
  compute_RegionInstanceGroupManagerStatusStateful_GetTypes,
} from "./compute_RegionInstanceGroupManagerStatusStateful";

export interface compute_RegionInstanceGroupManagerStatus {
  // A bit indicating whether version target has been reached in this managed instance group, i.e. all instances are in their target version. Instances' target version are specified by version field on Instance Group Manager.
  versionTargets?: Array<compute_RegionInstanceGroupManagerStatusVersionTarget>;

  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  allInstancesConfigs?: Array<compute_RegionInstanceGroupManagerStatusAllInstancesConfig>;

  // A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.
  isStable?: boolean;

  // Stateful status of the given Instance Group Manager.
  statefuls?: Array<compute_RegionInstanceGroupManagerStatusStateful>;
}

export function compute_RegionInstanceGroupManagerStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "versionTargets",
      "A bit indicating whether version target has been reached in this managed instance group, i.e. all instances are in their target version. Instances' target version are specified by version field on Instance Group Manager.",
      compute_RegionInstanceGroupManagerStatusVersionTarget_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allInstancesConfigs",
      "Properties to set on all instances in the group. After setting\nallInstancesConfig on the group, you must update the group's instances to\napply the configuration.",
      compute_RegionInstanceGroupManagerStatusAllInstancesConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isStable",
      "A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "statefuls",
      "Stateful status of the given Instance Group Manager.",
      compute_RegionInstanceGroupManagerStatusStateful_GetTypes(),
      false,
      false,
    ),
  ];
}
