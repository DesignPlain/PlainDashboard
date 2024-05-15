import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getInstanceGroupManagerStatusStateful,
  Compute_getInstanceGroupManagerStatusStateful_GetTypes,
} from "./Compute_getInstanceGroupManagerStatusStateful";
import {
  Compute_getInstanceGroupManagerStatusVersionTarget,
  Compute_getInstanceGroupManagerStatusVersionTarget_GetTypes,
} from "./Compute_getInstanceGroupManagerStatusVersionTarget";
import {
  Compute_getInstanceGroupManagerStatusAllInstancesConfig,
  Compute_getInstanceGroupManagerStatusAllInstancesConfig_GetTypes,
} from "./Compute_getInstanceGroupManagerStatusAllInstancesConfig";

export interface Compute_getInstanceGroupManagerStatus {
  // Stateful status of the given Instance Group Manager.
  Statefuls?: Array<Compute_getInstanceGroupManagerStatusStateful>;

  // A status of consistency of Instances' versions with their target version specified by version field on Instance Group Manager.
  VersionTargets?: Array<Compute_getInstanceGroupManagerStatusVersionTarget>;

  // Status of all-instances configuration on the group.
  AllInstancesConfigs?: Array<Compute_getInstanceGroupManagerStatusAllInstancesConfig>;

  // A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.
  IsStable?: boolean;
}

export function Compute_getInstanceGroupManagerStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Statefuls",
      "Stateful status of the given Instance Group Manager.",
      Compute_getInstanceGroupManagerStatusStateful_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VersionTargets",
      "A status of consistency of Instances' versions with their target version specified by version field on Instance Group Manager.",
      Compute_getInstanceGroupManagerStatusVersionTarget_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllInstancesConfigs",
      "Status of all-instances configuration on the group.",
      Compute_getInstanceGroupManagerStatusAllInstancesConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IsStable",
      "A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.",
      [],
      true,
      false,
    ),
  ];
}
