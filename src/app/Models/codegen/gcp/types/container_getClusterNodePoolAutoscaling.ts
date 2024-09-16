import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterNodePoolAutoscaling {
  // Location policy specifies the algorithm used when scaling-up the node pool. "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.
  locationPolicy?: string;

  // Maximum number of nodes per zone in the node pool. Must be >= min_node_count. Cannot be used with total limits.
  maxNodeCount?: number;

  // Minimum number of nodes per zone in the node pool. Must be >=0 and <= max_node_count. Cannot be used with total limits.
  minNodeCount?: number;

  // Maximum number of all nodes in the node pool. Must be >= total_min_node_count. Cannot be used with per zone limits.
  totalMaxNodeCount?: number;

  // Minimum number of all nodes in the node pool. Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.
  totalMinNodeCount?: number;
}

export function container_getClusterNodePoolAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'locationPolicy',
      'Location policy specifies the algorithm used when scaling-up the node pool. "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxNodeCount',
      'Maximum number of nodes per zone in the node pool. Must be >= min_node_count. Cannot be used with total limits.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minNodeCount',
      'Minimum number of nodes per zone in the node pool. Must be >=0 and <= max_node_count. Cannot be used with total limits.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'totalMaxNodeCount',
      'Maximum number of all nodes in the node pool. Must be >= total_min_node_count. Cannot be used with per zone limits.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'totalMinNodeCount',
      'Minimum number of all nodes in the node pool. Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.',
      () => [],
      true,
      false,
    ),
  ];
}
