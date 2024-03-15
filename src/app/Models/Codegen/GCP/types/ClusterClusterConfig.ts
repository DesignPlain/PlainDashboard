import { ClusterClusterConfigDataprocMetricConfig } from "./ClusterClusterConfigDataprocMetricConfig";
import { ClusterClusterConfigEncryptionConfig } from "./ClusterClusterConfigEncryptionConfig";
import { ClusterClusterConfigInitializationAction } from "./ClusterClusterConfigInitializationAction";
import { ClusterClusterConfigLifecycleConfig } from "./ClusterClusterConfigLifecycleConfig";
import { ClusterClusterConfigGceClusterConfig } from "./ClusterClusterConfigGceClusterConfig";
import { ClusterClusterConfigWorkerConfig } from "./ClusterClusterConfigWorkerConfig";
import { ClusterClusterConfigSecurityConfig } from "./ClusterClusterConfigSecurityConfig";
import { ClusterClusterConfigAutoscalingConfig } from "./ClusterClusterConfigAutoscalingConfig";
import { ClusterClusterConfigPreemptibleWorkerConfig } from "./ClusterClusterConfigPreemptibleWorkerConfig";
import { ClusterClusterConfigMasterConfig } from "./ClusterClusterConfigMasterConfig";
import { ClusterClusterConfigEndpointConfig } from "./ClusterClusterConfigEndpointConfig";
import { ClusterClusterConfigAuxiliaryNodeGroup } from "./ClusterClusterConfigAuxiliaryNodeGroup";
import { ClusterClusterConfigMetastoreConfig } from "./ClusterClusterConfigMetastoreConfig";
import { ClusterClusterConfigSoftwareConfig } from "./ClusterClusterConfigSoftwareConfig";

export interface ClusterClusterConfig {
  // The name of the cloud storage bucket ultimately used to house the staging data for the cluster. If staging_bucket is specified, it will contain this value, otherwise it will be the auto generated name.
  Bucket?: string;

  /*
The config settings for port access on the cluster.
Structure defined below.
*/
  EndpointConfig?: ClusterClusterConfigEndpointConfig;

  /*
The config setting for metastore service with the cluster.
Structure defined below.
- - -
*/
  MetastoreConfig?: ClusterClusterConfigMetastoreConfig;

  // Security related configuration. Structure defined below.
  SecurityConfig?: ClusterClusterConfigSecurityConfig;

  /*
A Dataproc NodeGroup resource is a group of Dataproc cluster nodes that execute an assigned role. 
Structure defined below.
*/
  AuxiliaryNodeGroups?: Array<ClusterClusterConfigAuxiliaryNodeGroup>;

  /*
Commands to execute on each node after config is completed.
You can specify multiple versions of these. Structure defined below.
*/
  InitializationActions?: Array<ClusterClusterConfigInitializationAction>;

  /*
The settings for auto deletion cluster schedule.
Structure defined below.
*/
  LifecycleConfig?: ClusterClusterConfigLifecycleConfig;

  /*
The Google Compute Engine config settings for the additional
instances in a cluster. Structure defined below.
- --NOTE-- : `preemptible_worker_config` is
an alias for the api's [secondaryWorkerConfig](https://cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig#InstanceGroupConfig). The name doesn't necessarily mean it is preemptible and is named as
such for legacy/compatibility reasons.
*/
  PreemptibleWorkerConfig?: ClusterClusterConfigPreemptibleWorkerConfig;

  /*
The config settings for software inside the cluster.
Structure defined below.
*/
  SoftwareConfig?: ClusterClusterConfigSoftwareConfig;

  /*
The autoscaling policy config associated with the cluster.
Note that once set, if `autoscaling_config` is the only field set in `cluster_config`, it can
only be removed by setting `policy_uri = ""`, rather than removing the whole block.
Structure defined below.
*/
  AutoscalingConfig?: ClusterClusterConfigAutoscalingConfig;

  /*
The Compute Engine accelerator (GPU) configuration for these instances. Can be specified multiple times.
Structure defined below.
*/
  DataprocMetricConfig?: ClusterClusterConfigDataprocMetricConfig;

  /*
The Google Compute Engine config settings for the master instances
in a cluster. Structure defined below.
*/
  MasterConfig?: ClusterClusterConfigMasterConfig;

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

  /*
The Cloud Storage temp bucket used to store ephemeral cluster
and jobs data, such as Spark and MapReduce history files.
Note: If you don't explicitly specify a `temp_bucket` then GCP will auto create / assign one for you.
*/
  TempBucket?: string;

  /*
The Customer managed encryption keys settings for the cluster.
Structure defined below.
*/
  EncryptionConfig?: ClusterClusterConfigEncryptionConfig;

  /*
Common config settings for resources of Google Compute Engine cluster
instances, applicable to all instances in the cluster. Structure defined below.
*/
  GceClusterConfig?: ClusterClusterConfigGceClusterConfig;

  /*
The Google Compute Engine config settings for the worker instances
in a cluster. Structure defined below.
*/
  WorkerConfig?: ClusterClusterConfigWorkerConfig;
}
