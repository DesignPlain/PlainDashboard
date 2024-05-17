import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigtable_InstanceClusterAutoscalingConfig {
  // The target CPU utilization for autoscaling, in percentage. Must be between 10 and 80.
  CpuTarget?: number;

  // The maximum number of nodes for autoscaling.
  MaxNodes?: number;

  // The minimum number of nodes for autoscaling.
  MinNodes?: number;

  /*
The target storage utilization for autoscaling, in GB, for each node in a cluster. This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and 16384 (16 TiB) for an HDD cluster. If not set, whatever is already set for the cluster will not change, or if the cluster is just being created, it will use the default value of 2560 for SSD clusters and 8192 for HDD clusters.

!> --Warning--: Only one of `autoscaling_config` or `num_nodes` should be set for a cluster. If both are set, `num_nodes` is ignored. If none is set, autoscaling will be disabled and sized to the current node count.
*/
  StorageTarget?: number;
}

export function Bigtable_InstanceClusterAutoscalingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxNodes",
      "The maximum number of nodes for autoscaling.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinNodes",
      "The minimum number of nodes for autoscaling.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "StorageTarget",
      "The target storage utilization for autoscaling, in GB, for each node in a cluster. This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and 16384 (16 TiB) for an HDD cluster. If not set, whatever is already set for the cluster will not change, or if the cluster is just being created, it will use the default value of 2560 for SSD clusters and 8192 for HDD clusters.\n\n!> **Warning**: Only one of `autoscaling_config` or `num_nodes` should be set for a cluster. If both are set, `num_nodes` is ignored. If none is set, autoscaling will be disabled and sized to the current node count.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "CpuTarget",
      "The target CPU utilization for autoscaling, in percentage. Must be between 10 and 80.",
      [],
      true,
      false,
    ),
  ];
}
