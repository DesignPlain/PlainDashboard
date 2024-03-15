import { WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig } from "./WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig";
import { WorkflowTemplatePlacementManagedClusterConfigLifecycleConfig } from "./WorkflowTemplatePlacementManagedClusterConfigLifecycleConfig";
import { WorkflowTemplatePlacementManagedClusterConfigEndpointConfig } from "./WorkflowTemplatePlacementManagedClusterConfigEndpointConfig";
import { WorkflowTemplatePlacementManagedClusterConfigWorkerConfig } from "./WorkflowTemplatePlacementManagedClusterConfigWorkerConfig";
import { WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig } from "./WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig";
import { WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig } from "./WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig";
import { WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig } from "./WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig";
import { WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig } from "./WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig";
import { WorkflowTemplatePlacementManagedClusterConfigSecurityConfig } from "./WorkflowTemplatePlacementManagedClusterConfigSecurityConfig";
import { WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig } from "./WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig";
import { WorkflowTemplatePlacementManagedClusterConfigMasterConfig } from "./WorkflowTemplatePlacementManagedClusterConfigMasterConfig";
import { WorkflowTemplatePlacementManagedClusterConfigInitializationAction } from "./WorkflowTemplatePlacementManagedClusterConfigInitializationAction";
import { WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig } from "./WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig";

export interface WorkflowTemplatePlacementManagedClusterConfig {
  // Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's `role` metadata to run an executable on a master or worker node, as shown below using `curl` (you can also use `wget`): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if ; then ... master specific actions ... else ... worker specific actions ... fi
  InitializationActions?: Array<WorkflowTemplatePlacementManagedClusterConfigInitializationAction>;

  // Metastore configuration.
  MetastoreConfig?: WorkflowTemplatePlacementManagedClusterConfigMetastoreConfig;

  // The Compute Engine config settings for additional worker instances in a cluster.
  SecondaryWorkerConfig?: WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig;

  // Security settings for the cluster.
  SecurityConfig?: WorkflowTemplatePlacementManagedClusterConfigSecurityConfig;

  // Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field is unset.
  AutoscalingConfig?: WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig;

  // Encryption settings for the cluster.
  EncryptionConfig?: WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig;

  // Lifecycle setting for the cluster.
  LifecycleConfig?: WorkflowTemplatePlacementManagedClusterConfigLifecycleConfig;

  // Port/endpoint configuration for this cluster
  EndpointConfig?: WorkflowTemplatePlacementManagedClusterConfigEndpointConfig;

  // The Kubernetes Engine config for Dataproc clusters deployed to Kubernetes. Setting this is considered mutually exclusive with Compute Engine-based options such as `gce_cluster_config`, `master_config`, `worker_config`, `secondary_worker_config`, and `autoscaling_config`.
  GkeClusterConfig?: WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig;

  // The Compute Engine config settings for additional worker instances in a cluster.
  MasterConfig?: WorkflowTemplatePlacementManagedClusterConfigMasterConfig;

  /*
The Compute Engine config settings for additional worker instances in a cluster.

- - -
*/
  WorkerConfig?: WorkflowTemplatePlacementManagedClusterConfigWorkerConfig;

  // The shared Compute Engine config settings for all instances in a cluster.
  GceClusterConfig?: WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig;

  // The config settings for software inside the cluster.
  SoftwareConfig?: WorkflowTemplatePlacementManagedClusterConfigSoftwareConfig;

  // A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)).
  StagingBucket?: string;

  // A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket.
  TempBucket?: string;
}
