import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling {
  // The maximum number of nodes in the node pool. Must be >= minNodeCount, and must be > 0.
  MaxNodeCount?: number;

  // The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount.
  MinNodeCount?: number;
}

export function Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxNodeCount",
      "The maximum number of nodes in the node pool. Must be >= minNodeCount, and must be > 0.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinNodeCount",
      "The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount.",
      [],
      false,
      true,
    ),
  ];
}
