import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_NodePoolAutoscaling {
  /*
Location policy specifies the algorithm used when
scaling-up the node pool. Location policy is supported only in 1.24.1+ clusters.
- "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones.
- "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations,
and reduce preemption risk for Spot VMs.
*/
  locationPolicy?: string;

  /*
Maximum number of nodes per zone in the NodePool.
Must be >= min_node_count. Cannot be used with total limits.
*/
  maxNodeCount?: number;

  /*
Minimum number of nodes per zone in the NodePool.
Must be >=0 and <= `max_node_count`. Cannot be used with total limits.
*/
  minNodeCount?: number;

  /*
Total maximum number of nodes in the NodePool.
Must be >= total_min_node_count. Cannot be used with per zone limits.
Total size limits are supported only in 1.24.1+ clusters.
*/
  totalMaxNodeCount?: number;

  /*
Total minimum number of nodes in the NodePool.
Must be >=0 and <= `total_max_node_count`. Cannot be used with per zone limits.
Total size limits are supported only in 1.24.1+ clusters.
*/
  totalMinNodeCount?: number;
}

export function container_NodePoolAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minNodeCount",
      "Minimum number of nodes per zone in the NodePool.\nMust be >=0 and <= `max_node_count`. Cannot be used with total limits.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "totalMaxNodeCount",
      "Total maximum number of nodes in the NodePool.\nMust be >= total_min_node_count. Cannot be used with per zone limits.\nTotal size limits are supported only in 1.24.1+ clusters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "totalMinNodeCount",
      "Total minimum number of nodes in the NodePool.\nMust be >=0 and <= `total_max_node_count`. Cannot be used with per zone limits.\nTotal size limits are supported only in 1.24.1+ clusters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "locationPolicy",
      'Location policy specifies the algorithm used when\nscaling-up the node pool. Location policy is supported only in 1.24.1+ clusters.\n* "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones.\n* "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations,\nand reduce preemption risk for Spot VMs.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxNodeCount",
      "Maximum number of nodes per zone in the NodePool.\nMust be >= min_node_count. Cannot be used with total limits.",
      [],
      false,
      false,
    ),
  ];
}
