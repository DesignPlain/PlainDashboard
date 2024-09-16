import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling {
  // The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount.
  minNodeCount?: number;

  // The maximum number of nodes in the node pool. Must be >= minNodeCount, and must be > 0.
  maxNodeCount?: number;
}

export function dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'minNodeCount',
      'The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxNodeCount',
      'The maximum number of nodes in the node pool. Must be >= minNodeCount, and must be > 0.',
      () => [],
      false,
      true,
    ),
  ];
}
