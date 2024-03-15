import { EnvironmentConfigEncryptionConfig } from "./EnvironmentConfigEncryptionConfig";
import { EnvironmentConfigDatabaseConfig } from "./EnvironmentConfigDatabaseConfig";
import { EnvironmentConfigMaintenanceWindow } from "./EnvironmentConfigMaintenanceWindow";
import { EnvironmentConfigDataRetentionConfig } from "./EnvironmentConfigDataRetentionConfig";
import { EnvironmentConfigMasterAuthorizedNetworksConfig } from "./EnvironmentConfigMasterAuthorizedNetworksConfig";
import { EnvironmentConfigSoftwareConfig } from "./EnvironmentConfigSoftwareConfig";
import { EnvironmentConfigNodeConfig } from "./EnvironmentConfigNodeConfig";
import { EnvironmentConfigPrivateEnvironmentConfig } from "./EnvironmentConfigPrivateEnvironmentConfig";
import { EnvironmentConfigWebServerConfig } from "./EnvironmentConfigWebServerConfig";
import { EnvironmentConfigWorkloadsConfig } from "./EnvironmentConfigWorkloadsConfig";
import { EnvironmentConfigWebServerNetworkAccessControl } from "./EnvironmentConfigWebServerNetworkAccessControl";
import { EnvironmentConfigRecoveryConfig } from "./EnvironmentConfigRecoveryConfig";

export interface EnvironmentConfig {
  // The configuration of Cloud SQL instance that is used by the Apache Airflow software. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  DatabaseConfig?: EnvironmentConfigDatabaseConfig;

  // The configuration for Cloud Composer maintenance window.
  MaintenanceWindow?: EnvironmentConfigMaintenanceWindow;

  // Whether high resilience is enabled or not. This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow--.-.- and newer.
  ResilienceMode?: string;

  // The configuration settings for the Airflow web server App Engine instance. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  WebServerConfig?: EnvironmentConfigWebServerConfig;

  // The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  WorkloadsConfig?: EnvironmentConfigWorkloadsConfig;

  // The URI of the Apache Airflow Web UI hosted within this environment.
  AirflowUri?: string;

  // The configuration setting for Airflow data retention mechanism. This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4. or newer
  DataRetentionConfig?: EnvironmentConfigDataRetentionConfig;

  // Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
  MasterAuthorizedNetworksConfig?: EnvironmentConfigMasterAuthorizedNetworksConfig;

  // The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  NodeCount?: number;

  // Network-level access control policy for the Airflow web server.
  WebServerNetworkAccessControl?: EnvironmentConfigWebServerNetworkAccessControl;

  // The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using '/'-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with this prefix.
  DagGcsPrefix?: string;

  // The Kubernetes Engine cluster used to run this environment.
  GkeCluster?: string;

  // The recovery configuration settings for the Cloud Composer environment
  RecoveryConfig?: EnvironmentConfigRecoveryConfig;

  // The configuration settings for software inside the environment.
  SoftwareConfig?: EnvironmentConfigSoftwareConfig;

  // The encryption options for the Composer environment and its dependencies.
  EncryptionConfig?: EnvironmentConfigEncryptionConfig;

  // The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  EnvironmentSize?: string;

  // The configuration used for the Kubernetes Engine cluster.
  NodeConfig?: EnvironmentConfigNodeConfig;

  // The configuration used for the Private IP Cloud Composer environment.
  PrivateEnvironmentConfig?: EnvironmentConfigPrivateEnvironmentConfig;

  // Optional. If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.
  EnablePrivateBuildsOnly?: boolean;

  // Optional. If true, a private Composer environment will be created.
  EnablePrivateEnvironment?: boolean;
}
