import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget,
  dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget_GetTypes,
} from './dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget';

export interface dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig {
  /*
A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster 
(the GKE cluster can be zonal or regional)
*/
  gkeClusterTarget?: string;

  /*
GKE node pools where workloads will be scheduled. At least one node pool must be assigned the `DEFAULT` 
GkeNodePoolTarget.Role. If a GkeNodePoolTarget is not specified, Dataproc constructs a `DEFAULT` GkeNodePoolTarget.
Each role can be given to only one GkeNodePoolTarget. All node pools must have the same location settings.
*/
  nodePoolTargets?: Array<dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget>;
}

export function dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'gkeClusterTarget',
      'A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster \n(the GKE cluster can be zonal or regional)',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'nodePoolTargets',
      'GKE node pools where workloads will be scheduled. At least one node pool must be assigned the `DEFAULT` \nGkeNodePoolTarget.Role. If a GkeNodePoolTarget is not specified, Dataproc constructs a `DEFAULT` GkeNodePoolTarget.\nEach role can be given to only one GkeNodePoolTarget. All node pools must have the same location settings.',
      () =>
        dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget_GetTypes(),
      false,
      false,
    ),
  ];
}
