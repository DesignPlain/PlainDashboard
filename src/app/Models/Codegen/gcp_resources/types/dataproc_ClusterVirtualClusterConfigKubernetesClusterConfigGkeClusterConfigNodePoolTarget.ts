import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig,
  dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig_GetTypes,
} from "./dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig";

export interface dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget {
  /*
Node group roles. 
One of `"DRIVER"`.
*/
  roles?: Array<string>;

  // The target GKE node pool.
  nodePool?: string;

  /*
The configuration for the GKE node pool. 
If specified, Dataproc attempts to create a node pool with the specified shape.
If one with the same name already exists, it is verified against all specified fields.
If a field differs, the virtual cluster creation will fail.
*/
  nodePoolConfig?: dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig;
}

export function dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "roles",
      'Node group roles. \nOne of `"DRIVER"`.',
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodePool",
      "The target GKE node pool.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nodePoolConfig",
      "The configuration for the GKE node pool. \nIf specified, Dataproc attempts to create a node pool with the specified shape.\nIf one with the same name already exists, it is verified against all specified fields.\nIf a field differs, the virtual cluster creation will fail.",
      dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
