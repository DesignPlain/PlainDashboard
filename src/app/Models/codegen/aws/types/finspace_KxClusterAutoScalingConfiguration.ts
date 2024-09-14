import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface finspace_KxClusterAutoScalingConfiguration {
  // Highest number of nodes to scale. Cannot be greater than 5
  maxNodeCount?: number;

  // Desired value of chosen `auto_scaling_metric`. When metric drops below this value, cluster will scale in. When metric goes above this value, cluster will scale out. Can be set between 0 and 100 percent.
  metricTarget?: number;

  // Lowest number of nodes to scale. Must be at least 1 and less than the `max_node_count`. If nodes in cluster belong to multiple availability zones, then `min_node_count` must be at least 3.
  minNodeCount?: number;

  // Duration in seconds that FinSpace will wait after a scale in event before initiating another scaling event.
  scaleInCooldownSeconds?: number;

  // Duration in seconds that FinSpace will wait after a scale out event before initiating another scaling event.
  scaleOutCooldownSeconds?: number;

  // Metric your cluster will track in order to scale in and out. For example, CPU_UTILIZATION_PERCENTAGE is the average CPU usage across all nodes in a cluster.
  autoScalingMetric?: string;
}

export function finspace_KxClusterAutoScalingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "metricTarget",
      "Desired value of chosen `auto_scaling_metric`. When metric drops below this value, cluster will scale in. When metric goes above this value, cluster will scale out. Can be set between 0 and 100 percent.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minNodeCount",
      "Lowest number of nodes to scale. Must be at least 1 and less than the `max_node_count`. If nodes in cluster belong to multiple availability zones, then `min_node_count` must be at least 3.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "scaleInCooldownSeconds",
      "Duration in seconds that FinSpace will wait after a scale in event before initiating another scaling event.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "scaleOutCooldownSeconds",
      "Duration in seconds that FinSpace will wait after a scale out event before initiating another scaling event.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "autoScalingMetric",
      "Metric your cluster will track in order to scale in and out. For example, CPU_UTILIZATION_PERCENTAGE is the average CPU usage across all nodes in a cluster.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxNodeCount",
      "Highest number of nodes to scale. Cannot be greater than 5",
      () => [],
      true,
      true,
    ),
  ];
}
