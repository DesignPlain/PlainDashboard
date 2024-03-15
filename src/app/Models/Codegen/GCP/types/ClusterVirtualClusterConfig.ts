import { ClusterVirtualClusterConfigAuxiliaryServicesConfig } from "./ClusterVirtualClusterConfigAuxiliaryServicesConfig";
import { ClusterVirtualClusterConfigKubernetesClusterConfig } from "./ClusterVirtualClusterConfigKubernetesClusterConfig";

export interface ClusterVirtualClusterConfig {
  /*
Configuration of auxiliary services used by this cluster. 
Structure defined below.
*/
  AuxiliaryServicesConfig?: ClusterVirtualClusterConfigAuxiliaryServicesConfig;

  /*
The configuration for running the Dataproc cluster on Kubernetes.
Structure defined below.
- - -
*/
  KubernetesClusterConfig?: ClusterVirtualClusterConfigKubernetesClusterConfig;

  /*
The Cloud Storage staging bucket used to stage files,
such as Hadoop jars, between client machines and the cluster.
Note: If you don't explicitly specify a `staging_bucket`
then GCP will auto create / assign one for you. However, you are not guaranteed
an auto generated bucket which is solely dedicated to your cluster; it may be shared
with other clusters in the same region/zone also choosing to use the auto generation
option.
*/
  StagingBucket?: string;
}
