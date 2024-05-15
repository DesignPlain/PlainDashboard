import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Composer_getEnvironmentConfigSoftwareConfig,
  Composer_getEnvironmentConfigSoftwareConfig_GetTypes,
} from "./Composer_getEnvironmentConfigSoftwareConfig";
import {
  Composer_getEnvironmentConfigMaintenanceWindow,
  Composer_getEnvironmentConfigMaintenanceWindow_GetTypes,
} from "./Composer_getEnvironmentConfigMaintenanceWindow";
import {
  Composer_getEnvironmentConfigDataRetentionConfig,
  Composer_getEnvironmentConfigDataRetentionConfig_GetTypes,
} from "./Composer_getEnvironmentConfigDataRetentionConfig";
import {
  Composer_getEnvironmentConfigMasterAuthorizedNetworksConfig,
  Composer_getEnvironmentConfigMasterAuthorizedNetworksConfig_GetTypes,
} from "./Composer_getEnvironmentConfigMasterAuthorizedNetworksConfig";
import {
  Composer_getEnvironmentConfigNodeConfig,
  Composer_getEnvironmentConfigNodeConfig_GetTypes,
} from "./Composer_getEnvironmentConfigNodeConfig";
import {
  Composer_getEnvironmentConfigDatabaseConfig,
  Composer_getEnvironmentConfigDatabaseConfig_GetTypes,
} from "./Composer_getEnvironmentConfigDatabaseConfig";
import {
  Composer_getEnvironmentConfigEncryptionConfig,
  Composer_getEnvironmentConfigEncryptionConfig_GetTypes,
} from "./Composer_getEnvironmentConfigEncryptionConfig";
import {
  Composer_getEnvironmentConfigRecoveryConfig,
  Composer_getEnvironmentConfigRecoveryConfig_GetTypes,
} from "./Composer_getEnvironmentConfigRecoveryConfig";
import {
  Composer_getEnvironmentConfigPrivateEnvironmentConfig,
  Composer_getEnvironmentConfigPrivateEnvironmentConfig_GetTypes,
} from "./Composer_getEnvironmentConfigPrivateEnvironmentConfig";
import {
  Composer_getEnvironmentConfigWebServerConfig,
  Composer_getEnvironmentConfigWebServerConfig_GetTypes,
} from "./Composer_getEnvironmentConfigWebServerConfig";
import {
  Composer_getEnvironmentConfigWebServerNetworkAccessControl,
  Composer_getEnvironmentConfigWebServerNetworkAccessControl_GetTypes,
} from "./Composer_getEnvironmentConfigWebServerNetworkAccessControl";
import {
  Composer_getEnvironmentConfigWorkloadsConfig,
  Composer_getEnvironmentConfigWorkloadsConfig_GetTypes,
} from "./Composer_getEnvironmentConfigWorkloadsConfig";

export interface Composer_getEnvironmentConfig {
  // The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using '/'-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with this prefix.
  DagGcsPrefix?: string;

  // The configuration settings for software inside the environment.
  SoftwareConfigs?: Array<Composer_getEnvironmentConfigSoftwareConfig>;

  // Optional. If true, a private Composer environment will be created.
  EnablePrivateEnvironment?: boolean;

  // The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  EnvironmentSize?: string;

  // The configuration for Cloud Composer maintenance window.
  MaintenanceWindows?: Array<Composer_getEnvironmentConfigMaintenanceWindow>;

  // The configuration setting for Airflow data retention mechanism. This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4. or newer
  DataRetentionConfigs?: Array<Composer_getEnvironmentConfigDataRetentionConfig>;

  // Optional. If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.
  EnablePrivateBuildsOnly?: boolean;

  // The recovery configuration settings for the Cloud Composer environment
  RecoveryConfigs?: Array<Composer_getEnvironmentConfigRecoveryConfig>;

  // Whether high resilience is enabled or not. This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow--.-.- and newer.
  ResilienceMode?: string;

  // The URI of the Apache Airflow Web UI hosted within this environment.
  AirflowUri?: string;

  // Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
  MasterAuthorizedNetworksConfigs?: Array<Composer_getEnvironmentConfigMasterAuthorizedNetworksConfig>;

  // The Kubernetes Engine cluster used to run this environment.
  GkeCluster?: string;

  // The configuration used for the Kubernetes Engine cluster.
  NodeConfigs?: Array<Composer_getEnvironmentConfigNodeConfig>;

  // The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  NodeCount?: number;

  // The configuration used for the Private IP Cloud Composer environment.
  PrivateEnvironmentConfigs?: Array<Composer_getEnvironmentConfigPrivateEnvironmentConfig>;

  // The configuration settings for the Airflow web server App Engine instance. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  WebServerConfigs?: Array<Composer_getEnvironmentConfigWebServerConfig>;

  // Network-level access control policy for the Airflow web server.
  WebServerNetworkAccessControls?: Array<Composer_getEnvironmentConfigWebServerNetworkAccessControl>;

  // The configuration of Cloud SQL instance that is used by the Apache Airflow software. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  DatabaseConfigs?: Array<Composer_getEnvironmentConfigDatabaseConfig>;

  // The encryption options for the Composer environment and its dependencies.
  EncryptionConfigs?: Array<Composer_getEnvironmentConfigEncryptionConfig>;

  // The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  WorkloadsConfigs?: Array<Composer_getEnvironmentConfigWorkloadsConfig>;
}

export function Composer_getEnvironmentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "EncryptionConfigs",
      "The encryption options for the Composer environment and its dependencies.",
      Composer_getEnvironmentConfigEncryptionConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EnvironmentSize",
      "The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RecoveryConfigs",
      "The recovery configuration settings for the Cloud Composer environment",
      Composer_getEnvironmentConfigRecoveryConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NodeCount",
      "The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DataRetentionConfigs",
      "The configuration setting for Airflow data retention mechanism. This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4. or newer",
      Composer_getEnvironmentConfigDataRetentionConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePrivateBuildsOnly",
      "Optional. If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ResilienceMode",
      "Whether high resilience is enabled or not. This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow-*.*.* and newer.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MasterAuthorizedNetworksConfigs",
      "Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.",
      Composer_getEnvironmentConfigMasterAuthorizedNetworksConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DagGcsPrefix",
      "The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using '/'-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with this prefix.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePrivateEnvironment",
      "Optional. If true, a private Composer environment will be created.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MaintenanceWindows",
      "The configuration for Cloud Composer maintenance window.",
      Composer_getEnvironmentConfigMaintenanceWindow_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "WebServerConfigs",
      "The configuration settings for the Airflow web server App Engine instance. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      Composer_getEnvironmentConfigWebServerConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "WebServerNetworkAccessControls",
      "Network-level access control policy for the Airflow web server.",
      Composer_getEnvironmentConfigWebServerNetworkAccessControl_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "WorkloadsConfigs",
      "The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.",
      Composer_getEnvironmentConfigWorkloadsConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GkeCluster",
      "The Kubernetes Engine cluster used to run this environment.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NodeConfigs",
      "The configuration used for the Kubernetes Engine cluster.",
      Composer_getEnvironmentConfigNodeConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PrivateEnvironmentConfigs",
      "The configuration used for the Private IP Cloud Composer environment.",
      Composer_getEnvironmentConfigPrivateEnvironmentConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SoftwareConfigs",
      "The configuration settings for software inside the environment.",
      Composer_getEnvironmentConfigSoftwareConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AirflowUri",
      "The URI of the Apache Airflow Web UI hosted within this environment.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DatabaseConfigs",
      "The configuration of Cloud SQL instance that is used by the Apache Airflow software. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      Composer_getEnvironmentConfigDatabaseConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
