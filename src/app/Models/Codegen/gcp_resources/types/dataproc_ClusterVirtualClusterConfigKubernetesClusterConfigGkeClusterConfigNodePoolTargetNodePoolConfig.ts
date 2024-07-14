import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig,
  dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig_GetTypes,
} from "./dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig";
import {
  dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling,
  dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling_GetTypes,
} from "./dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling";

export interface dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig {
  /*
The list of Compute Engine zones where node pool nodes associated 
with a Dataproc on GKE virtual cluster will be located.
- - -
*/
  locations?: Array<string>;

  /*
The autoscaler configuration for this node pool. 
The autoscaler is enabled only when a valid configuration is present.
*/
  autoscaling?: dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling;

  // The node pool configuration.
  config?: dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig;
}

export function dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "config",
      "The node pool configuration.",
      dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "locations",
      "The list of Compute Engine zones where node pool nodes associated \nwith a Dataproc on GKE virtual cluster will be located.\n- - -",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "autoscaling",
      "The autoscaler configuration for this node pool. \nThe autoscaler is enabled only when a valid configuration is present.",
      dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling_GetTypes(),
      false,
      false,
    ),
  ];
}
