import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig,
  Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig_GetTypes,
} from "./Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig";

export interface Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget {
  /*
The configuration for the GKE node pool. 
If specified, Dataproc attempts to create a node pool with the specified shape.
If one with the same name already exists, it is verified against all specified fields.
If a field differs, the virtual cluster creation will fail.
*/
  NodePoolConfig?: Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig;

  /*
Node group roles. 
One of `"DRIVER"`.
*/
  Roles?: Array<string>;

  // The target GKE node pool.
  NodePool?: string;
}

export function Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "NodePoolConfig",
      "The configuration for the GKE node pool. \nIf specified, Dataproc attempts to create a node pool with the specified shape.\nIf one with the same name already exists, it is verified against all specified fields.\nIf a field differs, the virtual cluster creation will fail.",
      Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Roles",
      'Node group roles. \nOne of `"DRIVER"`.',
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "NodePool",
      "The target GKE node pool.",
      [],
      true,
      true,
    ),
  ];
}
