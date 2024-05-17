import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Composer_EnvironmentConfigPrivateEnvironmentConfig,
  Composer_EnvironmentConfigPrivateEnvironmentConfig_GetTypes,
} from "./Composer_EnvironmentConfigPrivateEnvironmentConfig";
import {
  Composer_EnvironmentConfigWebServerNetworkAccessControl,
  Composer_EnvironmentConfigWebServerNetworkAccessControl_GetTypes,
} from "./Composer_EnvironmentConfigWebServerNetworkAccessControl";
import {
  Composer_EnvironmentConfigMaintenanceWindow,
  Composer_EnvironmentConfigMaintenanceWindow_GetTypes,
} from "./Composer_EnvironmentConfigMaintenanceWindow";
import {
  Composer_EnvironmentConfigRecoveryConfig,
  Composer_EnvironmentConfigRecoveryConfig_GetTypes,
} from "./Composer_EnvironmentConfigRecoveryConfig";
import {
  Composer_EnvironmentConfigWebServerConfig,
  Composer_EnvironmentConfigWebServerConfig_GetTypes,
} from "./Composer_EnvironmentConfigWebServerConfig";
import {
  Composer_EnvironmentConfigNodeConfig,
  Composer_EnvironmentConfigNodeConfig_GetTypes,
} from "./Composer_EnvironmentConfigNodeConfig";
import {
  Composer_EnvironmentConfigWorkloadsConfig,
  Composer_EnvironmentConfigWorkloadsConfig_GetTypes,
} from "./Composer_EnvironmentConfigWorkloadsConfig";
import {
  Composer_EnvironmentConfigMasterAuthorizedNetworksConfig,
  Composer_EnvironmentConfigMasterAuthorizedNetworksConfig_GetTypes,
} from "./Composer_EnvironmentConfigMasterAuthorizedNetworksConfig";
import {
  Composer_EnvironmentConfigDatabaseConfig,
  Composer_EnvironmentConfigDatabaseConfig_GetTypes,
} from "./Composer_EnvironmentConfigDatabaseConfig";
import {
  Composer_EnvironmentConfigEncryptionConfig,
  Composer_EnvironmentConfigEncryptionConfig_GetTypes,
} from "./Composer_EnvironmentConfigEncryptionConfig";
import {
  Composer_EnvironmentConfigSoftwareConfig,
  Composer_EnvironmentConfigSoftwareConfig_GetTypes,
} from "./Composer_EnvironmentConfigSoftwareConfig";
import {
  Composer_EnvironmentConfigDataRetentionConfig,
  Composer_EnvironmentConfigDataRetentionConfig_GetTypes,
} from "./Composer_EnvironmentConfigDataRetentionConfig";

export interface Composer_EnvironmentConfig {
  // The configuration of Cloud SQL instance that is used by the Apache Airflow software. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  DatabaseConfig?: Composer_EnvironmentConfigDatabaseConfig;

  // The encryption options for the Composer environment and its dependencies.
  EncryptionConfig?: Composer_EnvironmentConfigEncryptionConfig;

  // The URI of the Apache Airflow Web UI hosted within this environment.
  AirflowUri?: string;

  // The configuration for Cloud Composer maintenance window.
  MaintenanceWindow?: Composer_EnvironmentConfigMaintenanceWindow;

  // The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  NodeCount?: number;

  // The recovery configuration settings for the Cloud Composer environment
  RecoveryConfig?: Composer_EnvironmentConfigRecoveryConfig;

  // The configuration settings for software inside the environment.
  SoftwareConfig?: Composer_EnvironmentConfigSoftwareConfig;

  // The configuration setting for Airflow data retention mechanism. This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4. or newer
  DataRetentionConfig?: Composer_EnvironmentConfigDataRetentionConfig;

  // Optional. If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.
  EnablePrivateBuildsOnly?: boolean;

  // The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  EnvironmentSize?: string;

  // The Kubernetes Engine cluster used to run this environment.
  GkeCluster?: string;

  // Whether high resilience is enabled or not. This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow--.-.- and newer.
  ResilienceMode?: string;

  // The configuration settings for the Airflow web server App Engine instance. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  WebServerConfig?: Composer_EnvironmentConfigWebServerConfig;

  // The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  WorkloadsConfig?: Composer_EnvironmentConfigWorkloadsConfig;

  // The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using '/'-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with this prefix.
  DagGcsPrefix?: string;

  // Optional. If true, a private Composer environment will be created.
  EnablePrivateEnvironment?: boolean;

  // Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
  MasterAuthorizedNetworksConfig?: Composer_EnvironmentConfigMasterAuthorizedNetworksConfig;

  // The configuration used for the Kubernetes Engine cluster.
  NodeConfig?: Composer_EnvironmentConfigNodeConfig;

  // The configuration used for the Private IP Cloud Composer environment.
  PrivateEnvironmentConfig?: Composer_EnvironmentConfigPrivateEnvironmentConfig;

  // Network-level access control policy for the Airflow web server.
  WebServerNetworkAccessControl?: Composer_EnvironmentConfigWebServerNetworkAccessControl;
}

export function Composer_EnvironmentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DagGcsPrefix",
      "The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using '/'-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with this prefix.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePrivateEnvironment",
      "Optional. If true, a private Composer environment will be created.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NodeConfig",
      "The configuration used for the Kubernetes Engine cluster.",
      Composer_EnvironmentConfigNodeConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WebServerNetworkAccessControl",
      "Network-level access control policy for the Airflow web server.",
      Composer_EnvironmentConfigWebServerNetworkAccessControl_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EncryptionConfig",
      "The encryption options for the Composer environment and its dependencies.",
      Composer_EnvironmentConfigEncryptionConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WebServerConfig",
      "The configuration settings for the Airflow web server App Engine instance. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      Composer_EnvironmentConfigWebServerConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DataRetentionConfig",
      "The configuration setting for Airflow data retention mechanism. This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4. or newer",
      Composer_EnvironmentConfigDataRetentionConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EnvironmentSize",
      "The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GkeCluster",
      "The Kubernetes Engine cluster used to run this environment.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WorkloadsConfig",
      "The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.",
      Composer_EnvironmentConfigWorkloadsConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AirflowUri",
      "The URI of the Apache Airflow Web UI hosted within this environment.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RecoveryConfig",
      "The recovery configuration settings for the Cloud Composer environment",
      Composer_EnvironmentConfigRecoveryConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePrivateBuildsOnly",
      "Optional. If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ResilienceMode",
      "Whether high resilience is enabled or not. This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow-*.*.* and newer.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MasterAuthorizedNetworksConfig",
      "Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.",
      Composer_EnvironmentConfigMasterAuthorizedNetworksConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PrivateEnvironmentConfig",
      "The configuration used for the Private IP Cloud Composer environment.",
      Composer_EnvironmentConfigPrivateEnvironmentConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DatabaseConfig",
      "The configuration of Cloud SQL instance that is used by the Apache Airflow software. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      Composer_EnvironmentConfigDatabaseConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MaintenanceWindow",
      "The configuration for Cloud Composer maintenance window.",
      Composer_EnvironmentConfigMaintenanceWindow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NodeCount",
      "The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SoftwareConfig",
      "The configuration settings for software inside the environment.",
      Composer_EnvironmentConfigSoftwareConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
