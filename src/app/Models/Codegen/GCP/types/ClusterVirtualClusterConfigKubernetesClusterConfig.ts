import { ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig } from "./ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig";
import { ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig } from "./ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig";

export interface ClusterVirtualClusterConfigKubernetesClusterConfig {
  // The software configuration for this Dataproc cluster running on Kubernetes.
  KubernetesSoftwareConfig?: ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig;

  // The configuration for running the Dataproc cluster on GKE.
  GkeClusterConfig?: ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig;

  /*
A namespace within the Kubernetes cluster to deploy into. 
If this namespace does not exist, it is created.
If it  exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it.
If not specified, the name of the Dataproc Cluster is used.
*/
  KubernetesNamespace?: string;
}
