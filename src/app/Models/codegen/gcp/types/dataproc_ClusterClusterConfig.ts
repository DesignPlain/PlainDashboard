import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_ClusterClusterConfigMetastoreConfig,
  dataproc_ClusterClusterConfigMetastoreConfig_GetTypes,
} from './dataproc_ClusterClusterConfigMetastoreConfig';
import {
  dataproc_ClusterClusterConfigDataprocMetricConfig,
  dataproc_ClusterClusterConfigDataprocMetricConfig_GetTypes,
} from './dataproc_ClusterClusterConfigDataprocMetricConfig';
import {
  dataproc_ClusterClusterConfigSoftwareConfig,
  dataproc_ClusterClusterConfigSoftwareConfig_GetTypes,
} from './dataproc_ClusterClusterConfigSoftwareConfig';
import {
  dataproc_ClusterClusterConfigLifecycleConfig,
  dataproc_ClusterClusterConfigLifecycleConfig_GetTypes,
} from './dataproc_ClusterClusterConfigLifecycleConfig';
import {
  dataproc_ClusterClusterConfigSecurityConfig,
  dataproc_ClusterClusterConfigSecurityConfig_GetTypes,
} from './dataproc_ClusterClusterConfigSecurityConfig';
import {
  dataproc_ClusterClusterConfigAutoscalingConfig,
  dataproc_ClusterClusterConfigAutoscalingConfig_GetTypes,
} from './dataproc_ClusterClusterConfigAutoscalingConfig';
import {
  dataproc_ClusterClusterConfigWorkerConfig,
  dataproc_ClusterClusterConfigWorkerConfig_GetTypes,
} from './dataproc_ClusterClusterConfigWorkerConfig';
import {
  dataproc_ClusterClusterConfigEndpointConfig,
  dataproc_ClusterClusterConfigEndpointConfig_GetTypes,
} from './dataproc_ClusterClusterConfigEndpointConfig';
import {
  dataproc_ClusterClusterConfigPreemptibleWorkerConfig,
  dataproc_ClusterClusterConfigPreemptibleWorkerConfig_GetTypes,
} from './dataproc_ClusterClusterConfigPreemptibleWorkerConfig';
import {
  dataproc_ClusterClusterConfigAuxiliaryNodeGroup,
  dataproc_ClusterClusterConfigAuxiliaryNodeGroup_GetTypes,
} from './dataproc_ClusterClusterConfigAuxiliaryNodeGroup';
import {
  dataproc_ClusterClusterConfigInitializationAction,
  dataproc_ClusterClusterConfigInitializationAction_GetTypes,
} from './dataproc_ClusterClusterConfigInitializationAction';
import {
  dataproc_ClusterClusterConfigGceClusterConfig,
  dataproc_ClusterClusterConfigGceClusterConfig_GetTypes,
} from './dataproc_ClusterClusterConfigGceClusterConfig';
import {
  dataproc_ClusterClusterConfigMasterConfig,
  dataproc_ClusterClusterConfigMasterConfig_GetTypes,
} from './dataproc_ClusterClusterConfigMasterConfig';
import {
  dataproc_ClusterClusterConfigEncryptionConfig,
  dataproc_ClusterClusterConfigEncryptionConfig_GetTypes,
} from './dataproc_ClusterClusterConfigEncryptionConfig';

export interface dataproc_ClusterClusterConfig {
  /*
Common config settings for resources of Google Compute Engine cluster
instances, applicable to all instances in the cluster. Structure defined below.
*/
  gceClusterConfig?: dataproc_ClusterClusterConfigGceClusterConfig;

  /*
The config setting for metastore service with the cluster.
Structure defined below.
- - -
*/
  metastoreConfig?: dataproc_ClusterClusterConfigMetastoreConfig;

  /*
The Google Compute Engine config settings for the additional
instances in a cluster. Structure defined below.
- --NOTE-- : `preemptible_worker_config` is
an alias for the api's [secondaryWorkerConfig](https://cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig#InstanceGroupConfig). The name doesn't necessarily mean it is preemptible and is named as
such for legacy/compatibility reasons.
*/
  preemptibleWorkerConfig?: dataproc_ClusterClusterConfigPreemptibleWorkerConfig;

  // Security related configuration. Structure defined below.
  securityConfig?: dataproc_ClusterClusterConfigSecurityConfig;

  /*
The autoscaling policy config associated with the cluster.
Note that once set, if `autoscaling_config` is the only field set in `cluster_config`, it can
only be removed by setting `policy_uri = ""`, rather than removing the whole block.
Structure defined below.
*/
  autoscalingConfig?: dataproc_ClusterClusterConfigAutoscalingConfig;

  /*
A Dataproc NodeGroup resource is a group of Dataproc cluster nodes that execute an assigned role. 
Structure defined below.
*/
  auxiliaryNodeGroups?: Array<dataproc_ClusterClusterConfigAuxiliaryNodeGroup>;

  // The name of the cloud storage bucket ultimately used to house the staging data for the cluster. If staging_bucket is specified, it will contain this value, otherwise it will be the auto generated name.
  bucket?: string;

  /*
The Google Compute Engine config settings for the worker instances
in a cluster. Structure defined below.
*/
  workerConfig?: dataproc_ClusterClusterConfigWorkerConfig;

  /*
The Compute Engine accelerator (GPU) configuration for these instances. Can be specified multiple times.
Structure defined below.
*/
  dataprocMetricConfig?: dataproc_ClusterClusterConfigDataprocMetricConfig;

  /*
The config settings for software inside the cluster.
Structure defined below.
*/
  softwareConfig?: dataproc_ClusterClusterConfigSoftwareConfig;

  /*
Commands to execute on each node after config is completed.
You can specify multiple versions of these. Structure defined below.
*/
  initializationActions?: Array<dataproc_ClusterClusterConfigInitializationAction>;

  /*
The settings for auto deletion cluster schedule.
Structure defined below.
*/
  lifecycleConfig?: dataproc_ClusterClusterConfigLifecycleConfig;

  /*
The Google Compute Engine config settings for the master instances
in a cluster. Structure defined below.
*/
  masterConfig?: dataproc_ClusterClusterConfigMasterConfig;

  /*
The Cloud Storage staging bucket used to stage files,
such as Hadoop jars, between client machines and the cluster.
Note: If you don't explicitly specify a `staging_bucket`
then GCP will auto create / assign one for you. However, you are not guaranteed
an auto generated bucket which is solely dedicated to your cluster; it may be shared
with other clusters in the same region/zone also choosing to use the auto generation
option.
*/
  stagingBucket?: string;

  /*
The Cloud Storage temp bucket used to store ephemeral cluster
and jobs data, such as Spark and MapReduce history files.
Note: If you don't explicitly specify a `temp_bucket` then GCP will auto create / assign one for you.
*/
  tempBucket?: string;

  /*
The Customer managed encryption keys settings for the cluster.
Structure defined below.
*/
  encryptionConfig?: dataproc_ClusterClusterConfigEncryptionConfig;

  /*
The config settings for port access on the cluster.
Structure defined below.
*/
  endpointConfig?: dataproc_ClusterClusterConfigEndpointConfig;
}

export function dataproc_ClusterClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucket',
      'The name of the cloud storage bucket ultimately used to house the staging data for the cluster. If staging_bucket is specified, it will contain this value, otherwise it will be the auto generated name.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'workerConfig',
      'The Google Compute Engine config settings for the worker instances\nin a cluster. Structure defined below.',
      () => dataproc_ClusterClusterConfigWorkerConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'dataprocMetricConfig',
      'The Compute Engine accelerator (GPU) configuration for these instances. Can be specified multiple times.\nStructure defined below.',
      () => dataproc_ClusterClusterConfigDataprocMetricConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'softwareConfig',
      'The config settings for software inside the cluster.\nStructure defined below.',
      () => dataproc_ClusterClusterConfigSoftwareConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'initializationActions',
      'Commands to execute on each node after config is completed.\nYou can specify multiple versions of these. Structure defined below.',
      () => dataproc_ClusterClusterConfigInitializationAction_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'preemptibleWorkerConfig',
      "The Google Compute Engine config settings for the additional\ninstances in a cluster. Structure defined below.\n* **NOTE** : `preemptible_worker_config` is\nan alias for the api's [secondaryWorkerConfig](https://cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig#InstanceGroupConfig). The name doesn't necessarily mean it is preemptible and is named as\nsuch for legacy/compatibility reasons.",
      () => dataproc_ClusterClusterConfigPreemptibleWorkerConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'autoscalingConfig',
      'The autoscaling policy config associated with the cluster.\nNote that once set, if `autoscaling_config` is the only field set in `cluster_config`, it can\nonly be removed by setting `policy_uri = ""`, rather than removing the whole block.\nStructure defined below.',
      () => dataproc_ClusterClusterConfigAutoscalingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'auxiliaryNodeGroups',
      'A Dataproc NodeGroup resource is a group of Dataproc cluster nodes that execute an assigned role. \nStructure defined below.',
      () => dataproc_ClusterClusterConfigAuxiliaryNodeGroup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'metastoreConfig',
      'The config setting for metastore service with the cluster.\nStructure defined below.\n- - -',
      () => dataproc_ClusterClusterConfigMetastoreConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'lifecycleConfig',
      'The settings for auto deletion cluster schedule.\nStructure defined below.',
      () => dataproc_ClusterClusterConfigLifecycleConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'masterConfig',
      'The Google Compute Engine config settings for the master instances\nin a cluster. Structure defined below.',
      () => dataproc_ClusterClusterConfigMasterConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'stagingBucket',
      "The Cloud Storage staging bucket used to stage files,\nsuch as Hadoop jars, between client machines and the cluster.\nNote: If you don't explicitly specify a `staging_bucket`\nthen GCP will auto create / assign one for you. However, you are not guaranteed\nan auto generated bucket which is solely dedicated to your cluster; it may be shared\nwith other clusters in the same region/zone also choosing to use the auto generation\noption.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'tempBucket',
      "The Cloud Storage temp bucket used to store ephemeral cluster\nand jobs data, such as Spark and MapReduce history files.\nNote: If you don't explicitly specify a `temp_bucket` then GCP will auto create / assign one for you.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'endpointConfig',
      'The config settings for port access on the cluster.\nStructure defined below.',
      () => dataproc_ClusterClusterConfigEndpointConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'gceClusterConfig',
      'Common config settings for resources of Google Compute Engine cluster\ninstances, applicable to all instances in the cluster. Structure defined below.',
      () => dataproc_ClusterClusterConfigGceClusterConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'securityConfig',
      'Security related configuration. Structure defined below.',
      () => dataproc_ClusterClusterConfigSecurityConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'encryptionConfig',
      'The Customer managed encryption keys settings for the cluster.\nStructure defined below.',
      () => dataproc_ClusterClusterConfigEncryptionConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
