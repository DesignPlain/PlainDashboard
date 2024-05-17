import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionInstanceGroupManagerStatusAllInstancesConfig,
  Compute_RegionInstanceGroupManagerStatusAllInstancesConfig_GetTypes,
} from "./Compute_RegionInstanceGroupManagerStatusAllInstancesConfig";
import {
  Compute_RegionInstanceGroupManagerStatusStateful,
  Compute_RegionInstanceGroupManagerStatusStateful_GetTypes,
} from "./Compute_RegionInstanceGroupManagerStatusStateful";
import {
  Compute_RegionInstanceGroupManagerStatusVersionTarget,
  Compute_RegionInstanceGroupManagerStatusVersionTarget_GetTypes,
} from "./Compute_RegionInstanceGroupManagerStatusVersionTarget";

export interface Compute_RegionInstanceGroupManagerStatus {
  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  AllInstancesConfigs?: Array<Compute_RegionInstanceGroupManagerStatusAllInstancesConfig>;

  // A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.
  IsStable?: boolean;

  // Stateful status of the given Instance Group Manager.
  Statefuls?: Array<Compute_RegionInstanceGroupManagerStatusStateful>;

  // A bit indicating whether version target has been reached in this managed instance group, i.e. all instances are in their target version. Instances' target version are specified by version field on Instance Group Manager.
  VersionTargets?: Array<Compute_RegionInstanceGroupManagerStatusVersionTarget>;
}

export function Compute_RegionInstanceGroupManagerStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Statefuls",
      "Stateful status of the given Instance Group Manager.",
      Compute_RegionInstanceGroupManagerStatusStateful_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VersionTargets",
      "A bit indicating whether version target has been reached in this managed instance group, i.e. all instances are in their target version. Instances' target version are specified by version field on Instance Group Manager.",
      Compute_RegionInstanceGroupManagerStatusVersionTarget_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllInstancesConfigs",
      "Properties to set on all instances in the group. After setting\nallInstancesConfig on the group, you must update the group's instances to\napply the configuration.",
      Compute_RegionInstanceGroupManagerStatusAllInstancesConfig_GetTypes(),
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
  ];
}
