import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfig";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigLifecycleConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigLifecycleConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigLifecycleConfig";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfig";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigEndpointConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigEndpointConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigEndpointConfig";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfig";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigInitializationAction,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigInitializationAction_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigInitializationAction";

export interface Dataproc_WorkflowTemplatePlacementManagedClusterConfig {
  // Port/endpoint configuration for this cluster
  EndpointConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigEndpointConfig;

  // The shared Compute Engine config settings for all instances in a cluster.
  GceClusterConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig;

  // The Compute Engine config settings for additional worker instances in a cluster.
  MasterConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfig;

  // The Compute Engine config settings for additional worker instances in a cluster.
  SecondaryWorkerConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig;

  // A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)).
  StagingBucket?: string;

  // Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field is unset.
  AutoscalingConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig;

  // A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket.
  TempBucket?: string;

  // The Kubernetes Engine config for Dataproc clusters deployed to Kubernetes. Setting this is considered mutually exclusive with Compute Engine-based options such as `gce_cluster_config`, `master_config`, `worker_config`, `secondary_worker_config`, and `autoscaling_config`.
  GkeClusterConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig;

  // Lifecycle setting for the cluster.
  LifecycleConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigLifecycleConfig;

  // Metastore configuration.
  MetastoreConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig;

  // Security settings for the cluster.
  SecurityConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfig;

  // Encryption settings for the cluster.
  EncryptionConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig;

  // The config settings for software inside the cluster.
  SoftwareConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig;

  /*
The Compute Engine config settings for additional worker instances in a cluster.

- - -
*/
  WorkerConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfig;

  // Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's `role` metadata to run an executable on a master or worker node, as shown below using `curl` (you can also use `wget`): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if ; then ... master specific actions ... else ... worker specific actions ... fi
  InitializationActions?: Array<Dataproc_WorkflowTemplatePlacementManagedClusterConfigInitializationAction>;
}

export function Dataproc_WorkflowTemplatePlacementManagedClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "GceClusterConfig",
      "The shared Compute Engine config settings for all instances in a cluster.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SecondaryWorkerConfig",
      "The Compute Engine config settings for additional worker instances in a cluster.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MasterConfig",
      "The Compute Engine config settings for additional worker instances in a cluster.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "StagingBucket",
      "A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LifecycleConfig",
      "Lifecycle setting for the cluster.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigLifecycleConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MetastoreConfig",
      "Metastore configuration.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EncryptionConfig",
      "Encryption settings for the cluster.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SoftwareConfig",
      "The config settings for software inside the cluster.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AutoscalingConfig",
      "Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field is unset.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GkeClusterConfig",
      "The Kubernetes Engine config for Dataproc clusters deployed to Kubernetes. Setting this is considered mutually exclusive with Compute Engine-based options such as `gce_cluster_config`, `master_config`, `worker_config`, `secondary_worker_config`, and `autoscaling_config`.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SecurityConfig",
      "Security settings for the cluster.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigSecurityConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WorkerConfig",
      "The Compute Engine config settings for additional worker instances in a cluster.\n\n- - -",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InitializationActions",
      "Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's `role` metadata to run an executable on a master or worker node, as shown below using `curl` (you can also use `wget`): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if ; then ... master specific actions ... else ... worker specific actions ... fi",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigInitializationAction_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EndpointConfig",
      "Port/endpoint configuration for this cluster",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigEndpointConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "TempBucket",
      "A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket.",
      [],
      false,
      true,
    ),
  ];
}
