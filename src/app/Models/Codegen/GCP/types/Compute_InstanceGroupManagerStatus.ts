import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceGroupManagerStatusVersionTarget,
  Compute_InstanceGroupManagerStatusVersionTarget_GetTypes,
} from "./Compute_InstanceGroupManagerStatusVersionTarget";
import {
  Compute_InstanceGroupManagerStatusAllInstancesConfig,
  Compute_InstanceGroupManagerStatusAllInstancesConfig_GetTypes,
} from "./Compute_InstanceGroupManagerStatusAllInstancesConfig";
import {
  Compute_InstanceGroupManagerStatusStateful,
  Compute_InstanceGroupManagerStatusStateful_GetTypes,
} from "./Compute_InstanceGroupManagerStatusStateful";

export interface Compute_InstanceGroupManagerStatus {
  // A bit indicating whether version target has been reached in this managed instance group, i.e. all instances are in their target version. Instances' target version are specified by version field on Instance Group Manager.
  VersionTargets?: Array<Compute_InstanceGroupManagerStatusVersionTarget>;

  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  AllInstancesConfigs?: Array<Compute_InstanceGroupManagerStatusAllInstancesConfig>;

  // A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.
  IsStable?: boolean;

  // Stateful status of the given Instance Group Manager.
  Statefuls?: Array<Compute_InstanceGroupManagerStatusStateful>;
}

export function Compute_InstanceGroupManagerStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "VersionTargets",
      "A bit indicating whether version target has been reached in this managed instance group, i.e. all instances are in their target version. Instances' target version are specified by version field on Instance Group Manager.",
      Compute_InstanceGroupManagerStatusVersionTarget_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllInstancesConfigs",
      "Properties to set on all instances in the group. After setting\nallInstancesConfig on the group, you must update the group's instances to\napply the configuration.",
      Compute_InstanceGroupManagerStatusAllInstancesConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IsStable",
      "A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Statefuls",
      "Stateful status of the given Instance Group Manager.",
      Compute_InstanceGroupManagerStatusStateful_GetTypes(),
      false,
      false,
    ),
  ];
}
