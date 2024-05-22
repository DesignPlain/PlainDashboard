import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfig";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfig";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigInitializationAction,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigInitializationAction_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigInitializationAction";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfig";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigLifecycleConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigLifecycleConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigLifecycleConfig";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigEndpointConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigEndpointConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigEndpointConfig";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig";

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfig {
  // Metastore configuration.
  metastoreConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig;

  // Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field is unset.
  autoscalingConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig;

  // Lifecycle setting for the cluster.
  lifecycleConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigLifecycleConfig;

  // The Compute Engine config settings for additional worker instances in a cluster.
  secondaryWorkerConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig;

  // The config settings for software inside the cluster.
  softwareConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig;

  /*
The Compute Engine config settings for additional worker instances in a cluster.

- - -
*/
  workerConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfig;

  // Encryption settings for the cluster.
  encryptionConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig;

  // The Kubernetes Engine config for Dataproc clusters deployed to Kubernetes. Setting this is considered mutually exclusive with Compute Engine-based options such as `gce_cluster_config`, `master_config`, `worker_config`, `secondary_worker_config`, and `autoscaling_config`.
  gkeClusterConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig;

  // Security settings for the cluster.
  securityConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfig;

  // A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)).
  stagingBucket?: string;

  // Port/endpoint configuration for this cluster
  endpointConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigEndpointConfig;

  // The shared Compute Engine config settings for all instances in a cluster.
  gceClusterConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig;

  // Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's `role` metadata to run an executable on a master or worker node, as shown below using `curl` (you can also use `wget`): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if ; then ... master specific actions ... else ... worker specific actions ... fi
  initializationActions?: Array<dataproc_WorkflowTemplatePlacementManagedClusterConfigInitializationAction>;

  // The Compute Engine config settings for additional worker instances in a cluster.
  masterConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfig;

  // A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket.
  tempBucket?: string;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tempBucket",
      "A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lifecycleConfig",
      "Lifecycle setting for the cluster.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigLifecycleConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "softwareConfig",
      "The config settings for software inside the cluster.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "securityConfig",
      "Security settings for the cluster.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "stagingBucket",
      "A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "initializationActions",
      "Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's `role` metadata to run an executable on a master or worker node, as shown below using `curl` (you can also use `wget`): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if ; then ... master specific actions ... else ... worker specific actions ... fi",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigInitializationAction_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "metastoreConfig",
      "Metastore configuration.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "workerConfig",
      "The Compute Engine config settings for additional worker instances in a cluster.\n\n- - -",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "encryptionConfig",
      "Encryption settings for the cluster.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gkeClusterConfig",
      "The Kubernetes Engine config for Dataproc clusters deployed to Kubernetes. Setting this is considered mutually exclusive with Compute Engine-based options such as `gce_cluster_config`, `master_config`, `worker_config`, `secondary_worker_config`, and `autoscaling_config`.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "masterConfig",
      "The Compute Engine config settings for additional worker instances in a cluster.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "autoscalingConfig",
      "Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field is unset.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "secondaryWorkerConfig",
      "The Compute Engine config settings for additional worker instances in a cluster.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "endpointConfig",
      "Port/endpoint configuration for this cluster",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigEndpointConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gceClusterConfig",
      "The shared Compute Engine config settings for all instances in a cluster.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
