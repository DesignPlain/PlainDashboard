import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_getInstanceGroupManagerStatusStateful,
  compute_getInstanceGroupManagerStatusStateful_GetTypes,
} from "./compute_getInstanceGroupManagerStatusStateful";
import {
  compute_getInstanceGroupManagerStatusVersionTarget,
  compute_getInstanceGroupManagerStatusVersionTarget_GetTypes,
} from "./compute_getInstanceGroupManagerStatusVersionTarget";
import {
  compute_getInstanceGroupManagerStatusAllInstancesConfig,
  compute_getInstanceGroupManagerStatusAllInstancesConfig_GetTypes,
} from "./compute_getInstanceGroupManagerStatusAllInstancesConfig";

export interface compute_getInstanceGroupManagerStatus {
  // A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.
  isStable?: boolean;

  // Stateful status of the given Instance Group Manager.
  statefuls?: Array<compute_getInstanceGroupManagerStatusStateful>;

  // A status of consistency of Instances' versions with their target version specified by version field on Instance Group Manager.
  versionTargets?: Array<compute_getInstanceGroupManagerStatusVersionTarget>;

  // Status of all-instances configuration on the group.
  allInstancesConfigs?: Array<compute_getInstanceGroupManagerStatusAllInstancesConfig>;
}

export function compute_getInstanceGroupManagerStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "isStable",
      "A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "statefuls",
      "Stateful status of the given Instance Group Manager.",
      () => compute_getInstanceGroupManagerStatusStateful_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "versionTargets",
      "A status of consistency of Instances' versions with their target version specified by version field on Instance Group Manager.",
      () => compute_getInstanceGroupManagerStatusVersionTarget_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allInstancesConfigs",
      "Status of all-instances configuration on the group.",
      () => compute_getInstanceGroupManagerStatusAllInstancesConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
