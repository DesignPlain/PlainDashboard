import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_InstanceGroupManagerStatusStateful,
  compute_InstanceGroupManagerStatusStateful_GetTypes,
} from "./compute_InstanceGroupManagerStatusStateful";
import {
  compute_InstanceGroupManagerStatusVersionTarget,
  compute_InstanceGroupManagerStatusVersionTarget_GetTypes,
} from "./compute_InstanceGroupManagerStatusVersionTarget";
import {
  compute_InstanceGroupManagerStatusAllInstancesConfig,
  compute_InstanceGroupManagerStatusAllInstancesConfig_GetTypes,
} from "./compute_InstanceGroupManagerStatusAllInstancesConfig";

export interface compute_InstanceGroupManagerStatus {
  // A bit indicating whether version target has been reached in this managed instance group, i.e. all instances are in their target version. Instances' target version are specified by version field on Instance Group Manager.
  versionTargets?: Array<compute_InstanceGroupManagerStatusVersionTarget>;

  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  allInstancesConfigs?: Array<compute_InstanceGroupManagerStatusAllInstancesConfig>;

  // A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.
  isStable?: boolean;

  // Stateful status of the given Instance Group Manager.
  statefuls?: Array<compute_InstanceGroupManagerStatusStateful>;
}

export function compute_InstanceGroupManagerStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "versionTargets",
      "A bit indicating whether version target has been reached in this managed instance group, i.e. all instances are in their target version. Instances' target version are specified by version field on Instance Group Manager.",
      () => compute_InstanceGroupManagerStatusVersionTarget_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allInstancesConfigs",
      "Properties to set on all instances in the group. After setting\nallInstancesConfig on the group, you must update the group's instances to\napply the configuration.",
      () => compute_InstanceGroupManagerStatusAllInstancesConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isStable",
      "A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "statefuls",
      "Stateful status of the given Instance Group Manager.",
      () => compute_InstanceGroupManagerStatusStateful_GetTypes(),
      false,
      false,
    ),
  ];
}
