import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget,
  Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget_GetTypes,
} from "./Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget";

export interface Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig {
  /*
A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster 
(the GKE cluster can be zonal or regional)
*/
  GkeClusterTarget?: string;

  /*
GKE node pools where workloads will be scheduled. At least one node pool must be assigned the `DEFAULT` 
GkeNodePoolTarget.Role. If a GkeNodePoolTarget is not specified, Dataproc constructs a `DEFAULT` GkeNodePoolTarget.
Each role can be given to only one GkeNodePoolTarget. All node pools must have the same location settings.
*/
  NodePoolTargets?: Array<Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget>;
}

export function Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "GkeClusterTarget",
      "A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster \n(the GKE cluster can be zonal or regional)",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NodePoolTargets",
      "GKE node pools where workloads will be scheduled. At least one node pool must be assigned the `DEFAULT` \nGkeNodePoolTarget.Role. If a GkeNodePoolTarget is not specified, Dataproc constructs a `DEFAULT` GkeNodePoolTarget.\nEach role can be given to only one GkeNodePoolTarget. All node pools must have the same location settings.",
      Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget_GetTypes(),
      false,
      false,
    ),
  ];
}
