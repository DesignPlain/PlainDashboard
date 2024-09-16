import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_AzureNodePoolAutoscaling {
  // Maximum number of nodes in the node pool. Must be >= min_node_count.
  maxNodeCount?: number;

  // Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count.
  minNodeCount?: number;
}

export function container_AzureNodePoolAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maxNodeCount',
      'Maximum number of nodes in the node pool. Must be >= min_node_count.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minNodeCount',
      'Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count.',
      () => [],
      true,
      false,
    ),
  ];
}
