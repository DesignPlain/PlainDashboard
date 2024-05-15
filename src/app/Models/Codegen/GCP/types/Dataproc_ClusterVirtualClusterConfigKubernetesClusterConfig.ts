import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig,
  Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig_GetTypes,
} from "./Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig";
import {
  Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig,
  Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig_GetTypes,
} from "./Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig";

export interface Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfig {
  // The configuration for running the Dataproc cluster on GKE.
  GkeClusterConfig?: Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig;

  /*
A namespace within the Kubernetes cluster to deploy into. 
If this namespace does not exist, it is created.
If it  exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it.
If not specified, the name of the Dataproc Cluster is used.
*/
  KubernetesNamespace?: string;

  // The software configuration for this Dataproc cluster running on Kubernetes.
  KubernetesSoftwareConfig?: Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig;
}

export function Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "KubernetesSoftwareConfig",
      "The software configuration for this Dataproc cluster running on Kubernetes.",
      Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GkeClusterConfig",
      "The configuration for running the Dataproc cluster on GKE.",
      Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "KubernetesNamespace",
      "A namespace within the Kubernetes cluster to deploy into. \nIf this namespace does not exist, it is created.\nIf it  exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it.\nIf not specified, the name of the Dataproc Cluster is used.",
      [],
      false,
      true,
    ),
  ];
}
