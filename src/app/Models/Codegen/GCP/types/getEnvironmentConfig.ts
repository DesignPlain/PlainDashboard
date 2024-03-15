import { getEnvironmentConfigEncryptionConfig } from "./getEnvironmentConfigEncryptionConfig";
import { getEnvironmentConfigMaintenanceWindow } from "./getEnvironmentConfigMaintenanceWindow";
import { getEnvironmentConfigWebServerConfig } from "./getEnvironmentConfigWebServerConfig";
import { getEnvironmentConfigWorkloadsConfig } from "./getEnvironmentConfigWorkloadsConfig";
import { getEnvironmentConfigDataRetentionConfig } from "./getEnvironmentConfigDataRetentionConfig";
import { getEnvironmentConfigWebServerNetworkAccessControl } from "./getEnvironmentConfigWebServerNetworkAccessControl";
import { getEnvironmentConfigPrivateEnvironmentConfig } from "./getEnvironmentConfigPrivateEnvironmentConfig";
import { getEnvironmentConfigRecoveryConfig } from "./getEnvironmentConfigRecoveryConfig";
import { getEnvironmentConfigDatabaseConfig } from "./getEnvironmentConfigDatabaseConfig";
import { getEnvironmentConfigMasterAuthorizedNetworksConfig } from "./getEnvironmentConfigMasterAuthorizedNetworksConfig";
import { getEnvironmentConfigSoftwareConfig } from "./getEnvironmentConfigSoftwareConfig";
import { getEnvironmentConfigNodeConfig } from "./getEnvironmentConfigNodeConfig";

export interface getEnvironmentConfig {
  // The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using '/'-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with this prefix.
  DagGcsPrefix?: string;

  // Optional. If true, a private Composer environment will be created.
  EnablePrivateEnvironment?: boolean;

  // The encryption options for the Composer environment and its dependencies.
  EncryptionConfigs?: Array<getEnvironmentConfigEncryptionConfig>;

  // The Kubernetes Engine cluster used to run this environment.
  GkeCluster?: string;

  // Network-level access control policy for the Airflow web server.
  WebServerNetworkAccessControls?: Array<getEnvironmentConfigWebServerNetworkAccessControl>;

  // The URI of the Apache Airflow Web UI hosted within this environment.
  AirflowUri?: string;

  // The configuration for Cloud Composer maintenance window.
  MaintenanceWindows?: Array<getEnvironmentConfigMaintenanceWindow>;

  // The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  NodeCount?: number;

  // The configuration used for the Private IP Cloud Composer environment.
  PrivateEnvironmentConfigs?: Array<getEnvironmentConfigPrivateEnvironmentConfig>;

  // The recovery configuration settings for the Cloud Composer environment
  RecoveryConfigs?: Array<getEnvironmentConfigRecoveryConfig>;

  // The configuration settings for the Airflow web server App Engine instance. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  WebServerConfigs?: Array<getEnvironmentConfigWebServerConfig>;

  // The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  WorkloadsConfigs?: Array<getEnvironmentConfigWorkloadsConfig>;

  // The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  EnvironmentSize?: string;

  // The configuration of Cloud SQL instance that is used by the Apache Airflow software. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  DatabaseConfigs?: Array<getEnvironmentConfigDatabaseConfig>;

  // Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
  MasterAuthorizedNetworksConfigs?: Array<getEnvironmentConfigMasterAuthorizedNetworksConfig>;

  // The configuration settings for software inside the environment.
  SoftwareConfigs?: Array<getEnvironmentConfigSoftwareConfig>;

  // The configuration setting for Airflow data retention mechanism. This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4. or newer
  DataRetentionConfigs?: Array<getEnvironmentConfigDataRetentionConfig>;

  // The configuration used for the Kubernetes Engine cluster.
  NodeConfigs?: Array<getEnvironmentConfigNodeConfig>;

  // Whether high resilience is enabled or not. This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow--.-.- and newer.
  ResilienceMode?: string;

  // Optional. If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.
  EnablePrivateBuildsOnly?: boolean;
}
