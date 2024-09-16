import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig,
  dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig_GetTypes,
} from './dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig';
import {
  dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig,
  dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig_GetTypes,
} from './dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig';

export interface dataproc_ClusterVirtualClusterConfigKubernetesClusterConfig {
  // The configuration for running the Dataproc cluster on GKE.
  gkeClusterConfig?: dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig;

  /*
A namespace within the Kubernetes cluster to deploy into. 
If this namespace does not exist, it is created.
If it  exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it.
If not specified, the name of the Dataproc Cluster is used.
*/
  kubernetesNamespace?: string;

  // The software configuration for this Dataproc cluster running on Kubernetes.
  kubernetesSoftwareConfig?: dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig;
}

export function dataproc_ClusterVirtualClusterConfigKubernetesClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'gkeClusterConfig',
      'The configuration for running the Dataproc cluster on GKE.',
      () =>
        dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'kubernetesNamespace',
      'A namespace within the Kubernetes cluster to deploy into. \nIf this namespace does not exist, it is created.\nIf it  exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it.\nIf not specified, the name of the Dataproc Cluster is used.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'kubernetesSoftwareConfig',
      'The software configuration for this Dataproc cluster running on Kubernetes.',
      () =>
        dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
