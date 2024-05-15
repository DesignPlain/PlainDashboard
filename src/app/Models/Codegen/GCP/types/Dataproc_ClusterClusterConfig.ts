import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterClusterConfigSoftwareConfig,
  Dataproc_ClusterClusterConfigSoftwareConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigSoftwareConfig";
import {
  Dataproc_ClusterClusterConfigSecurityConfig,
  Dataproc_ClusterClusterConfigSecurityConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigSecurityConfig";
import {
  Dataproc_ClusterClusterConfigWorkerConfig,
  Dataproc_ClusterClusterConfigWorkerConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigWorkerConfig";
import {
  Dataproc_ClusterClusterConfigAutoscalingConfig,
  Dataproc_ClusterClusterConfigAutoscalingConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigAutoscalingConfig";
import {
  Dataproc_ClusterClusterConfigEncryptionConfig,
  Dataproc_ClusterClusterConfigEncryptionConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigEncryptionConfig";
import {
  Dataproc_ClusterClusterConfigInitializationAction,
  Dataproc_ClusterClusterConfigInitializationAction_GetTypes,
} from "./Dataproc_ClusterClusterConfigInitializationAction";
import {
  Dataproc_ClusterClusterConfigMetastoreConfig,
  Dataproc_ClusterClusterConfigMetastoreConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigMetastoreConfig";
import {
  Dataproc_ClusterClusterConfigAuxiliaryNodeGroup,
  Dataproc_ClusterClusterConfigAuxiliaryNodeGroup_GetTypes,
} from "./Dataproc_ClusterClusterConfigAuxiliaryNodeGroup";
import {
  Dataproc_ClusterClusterConfigMasterConfig,
  Dataproc_ClusterClusterConfigMasterConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigMasterConfig";
import {
  Dataproc_ClusterClusterConfigPreemptibleWorkerConfig,
  Dataproc_ClusterClusterConfigPreemptibleWorkerConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigPreemptibleWorkerConfig";
import {
  Dataproc_ClusterClusterConfigEndpointConfig,
  Dataproc_ClusterClusterConfigEndpointConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigEndpointConfig";
import {
  Dataproc_ClusterClusterConfigDataprocMetricConfig,
  Dataproc_ClusterClusterConfigDataprocMetricConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigDataprocMetricConfig";
import {
  Dataproc_ClusterClusterConfigLifecycleConfig,
  Dataproc_ClusterClusterConfigLifecycleConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigLifecycleConfig";
import {
  Dataproc_ClusterClusterConfigGceClusterConfig,
  Dataproc_ClusterClusterConfigGceClusterConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigGceClusterConfig";

export interface Dataproc_ClusterClusterConfig {
  /*
The Customer managed encryption keys settings for the cluster.
Structure defined below.
*/
  EncryptionConfig?: Dataproc_ClusterClusterConfigEncryptionConfig;

  /*
The settings for auto deletion cluster schedule.
Structure defined below.
*/
  LifecycleConfig?: Dataproc_ClusterClusterConfigLifecycleConfig;

  /*
The Cloud Storage temp bucket used to store ephemeral cluster
and jobs data, such as Spark and MapReduce history files.
Note: If you don't explicitly specify a `temp_bucket` then GCP will auto create / assign one for you.
*/
  TempBucket?: string;

  /*
The Google Compute Engine config settings for the master instances
in a cluster. Structure defined below.
*/
  MasterConfig?: Dataproc_ClusterClusterConfigMasterConfig;

  /*
The Google Compute Engine config settings for the additional
instances in a cluster. Structure defined below.
- --NOTE-- : `preemptible_worker_config` is
an alias for the api's [secondaryWorkerConfig](https://cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig#InstanceGroupConfig). The name doesn't necessarily mean it is preemptible and is named as
such for legacy/compatibility reasons.
*/
  PreemptibleWorkerConfig?: Dataproc_ClusterClusterConfigPreemptibleWorkerConfig;

  // The name of the cloud storage bucket ultimately used to house the staging data for the cluster. If staging_bucket is specified, it will contain this value, otherwise it will be the auto generated name.
  Bucket?: string;

  /*
Common config settings for resources of Google Compute Engine cluster
instances, applicable to all instances in the cluster. Structure defined below.
*/
  GceClusterConfig?: Dataproc_ClusterClusterConfigGceClusterConfig;

  /*
Commands to execute on each node after config is completed.
You can specify multiple versions of these. Structure defined below.
*/
  InitializationActions?: Array<Dataproc_ClusterClusterConfigInitializationAction>;

  /*
The Compute Engine accelerator (GPU) configuration for these instances. Can be specified multiple times.
Structure defined below.
*/
  DataprocMetricConfig?: Dataproc_ClusterClusterConfigDataprocMetricConfig;

  /*
The config settings for software inside the cluster.
Structure defined below.
*/
  SoftwareConfig?: Dataproc_ClusterClusterConfigSoftwareConfig;

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
The config setting for metastore service with the cluster.
Structure defined below.
- - -
*/
  MetastoreConfig?: Dataproc_ClusterClusterConfigMetastoreConfig;

  // Security related configuration. Structure defined below.
  SecurityConfig?: Dataproc_ClusterClusterConfigSecurityConfig;

  /*
The Google Compute Engine config settings for the worker instances
in a cluster. Structure defined below.
*/
  WorkerConfig?: Dataproc_ClusterClusterConfigWorkerConfig;

  /*
The autoscaling policy config associated with the cluster.
Note that once set, if `autoscaling_config` is the only field set in `cluster_config`, it can
only be removed by setting `policy_uri = ""`, rather than removing the whole block.
Structure defined below.
*/
  AutoscalingConfig?: Dataproc_ClusterClusterConfigAutoscalingConfig;

  /*
A Dataproc NodeGroup resource is a group of Dataproc cluster nodes that execute an assigned role. 
Structure defined below.
*/
  AuxiliaryNodeGroups?: Array<Dataproc_ClusterClusterConfigAuxiliaryNodeGroup>;

  /*
The config settings for port access on the cluster.
Structure defined below.
*/
  EndpointConfig?: Dataproc_ClusterClusterConfigEndpointConfig;
}

export function Dataproc_ClusterClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AuxiliaryNodeGroups",
      "A Dataproc NodeGroup resource is a group of Dataproc cluster nodes that execute an assigned role. \nStructure defined below.",
      Dataproc_ClusterClusterConfigAuxiliaryNodeGroup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EndpointConfig",
      "The config settings for port access on the cluster.\nStructure defined below.",
      Dataproc_ClusterClusterConfigEndpointConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EncryptionConfig",
      "The Customer managed encryption keys settings for the cluster.\nStructure defined below.",
      Dataproc_ClusterClusterConfigEncryptionConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LifecycleConfig",
      "The settings for auto deletion cluster schedule.\nStructure defined below.",
      Dataproc_ClusterClusterConfigLifecycleConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Bucket",
      "The name of the cloud storage bucket ultimately used to house the staging data for the cluster. If staging_bucket is specified, it will contain this value, otherwise it will be the auto generated name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InitializationActions",
      "Commands to execute on each node after config is completed.\nYou can specify multiple versions of these. Structure defined below.",
      Dataproc_ClusterClusterConfigInitializationAction_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DataprocMetricConfig",
      "The Compute Engine accelerator (GPU) configuration for these instances. Can be specified multiple times.\nStructure defined below.",
      Dataproc_ClusterClusterConfigDataprocMetricConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StagingBucket",
      "The Cloud Storage staging bucket used to stage files,\nsuch as Hadoop jars, between client machines and the cluster.\nNote: If you don't explicitly specify a `staging_bucket`\nthen GCP will auto create / assign one for you. However, you are not guaranteed\nan auto generated bucket which is solely dedicated to your cluster; it may be shared\nwith other clusters in the same region/zone also choosing to use the auto generation\noption.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MetastoreConfig",
      "The config setting for metastore service with the cluster.\nStructure defined below.\n- - -",
      Dataproc_ClusterClusterConfigMetastoreConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WorkerConfig",
      "The Google Compute Engine config settings for the worker instances\nin a cluster. Structure defined below.",
      Dataproc_ClusterClusterConfigWorkerConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TempBucket",
      "The Cloud Storage temp bucket used to store ephemeral cluster\nand jobs data, such as Spark and MapReduce history files.\nNote: If you don't explicitly specify a `temp_bucket` then GCP will auto create / assign one for you.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MasterConfig",
      "The Google Compute Engine config settings for the master instances\nin a cluster. Structure defined below.",
      Dataproc_ClusterClusterConfigMasterConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PreemptibleWorkerConfig",
      "The Google Compute Engine config settings for the additional\ninstances in a cluster. Structure defined below.\n* **NOTE** : `preemptible_worker_config` is\nan alias for the api's [secondaryWorkerConfig](https://cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig#InstanceGroupConfig). The name doesn't necessarily mean it is preemptible and is named as\nsuch for legacy/compatibility reasons.",
      Dataproc_ClusterClusterConfigPreemptibleWorkerConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GceClusterConfig",
      "Common config settings for resources of Google Compute Engine cluster\ninstances, applicable to all instances in the cluster. Structure defined below.",
      Dataproc_ClusterClusterConfigGceClusterConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SoftwareConfig",
      "The config settings for software inside the cluster.\nStructure defined below.",
      Dataproc_ClusterClusterConfigSoftwareConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SecurityConfig",
      "Security related configuration. Structure defined below.",
      Dataproc_ClusterClusterConfigSecurityConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AutoscalingConfig",
      'The autoscaling policy config associated with the cluster.\nNote that once set, if `autoscaling_config` is the only field set in `cluster_config`, it can\nonly be removed by setting `policy_uri = ""`, rather than removing the whole block.\nStructure defined below.',
      Dataproc_ClusterClusterConfigAutoscalingConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
