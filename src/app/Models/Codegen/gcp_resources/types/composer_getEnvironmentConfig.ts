import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  composer_getEnvironmentConfigWebServerNetworkAccessControl,
  composer_getEnvironmentConfigWebServerNetworkAccessControl_GetTypes,
} from "./composer_getEnvironmentConfigWebServerNetworkAccessControl";
import {
  composer_getEnvironmentConfigMasterAuthorizedNetworksConfig,
  composer_getEnvironmentConfigMasterAuthorizedNetworksConfig_GetTypes,
} from "./composer_getEnvironmentConfigMasterAuthorizedNetworksConfig";
import {
  composer_getEnvironmentConfigRecoveryConfig,
  composer_getEnvironmentConfigRecoveryConfig_GetTypes,
} from "./composer_getEnvironmentConfigRecoveryConfig";
import {
  composer_getEnvironmentConfigSoftwareConfig,
  composer_getEnvironmentConfigSoftwareConfig_GetTypes,
} from "./composer_getEnvironmentConfigSoftwareConfig";
import {
  composer_getEnvironmentConfigWorkloadsConfig,
  composer_getEnvironmentConfigWorkloadsConfig_GetTypes,
} from "./composer_getEnvironmentConfigWorkloadsConfig";
import {
  composer_getEnvironmentConfigPrivateEnvironmentConfig,
  composer_getEnvironmentConfigPrivateEnvironmentConfig_GetTypes,
} from "./composer_getEnvironmentConfigPrivateEnvironmentConfig";
import {
  composer_getEnvironmentConfigEncryptionConfig,
  composer_getEnvironmentConfigEncryptionConfig_GetTypes,
} from "./composer_getEnvironmentConfigEncryptionConfig";
import {
  composer_getEnvironmentConfigMaintenanceWindow,
  composer_getEnvironmentConfigMaintenanceWindow_GetTypes,
} from "./composer_getEnvironmentConfigMaintenanceWindow";
import {
  composer_getEnvironmentConfigDataRetentionConfig,
  composer_getEnvironmentConfigDataRetentionConfig_GetTypes,
} from "./composer_getEnvironmentConfigDataRetentionConfig";
import {
  composer_getEnvironmentConfigDatabaseConfig,
  composer_getEnvironmentConfigDatabaseConfig_GetTypes,
} from "./composer_getEnvironmentConfigDatabaseConfig";
import {
  composer_getEnvironmentConfigNodeConfig,
  composer_getEnvironmentConfigNodeConfig_GetTypes,
} from "./composer_getEnvironmentConfigNodeConfig";
import {
  composer_getEnvironmentConfigWebServerConfig,
  composer_getEnvironmentConfigWebServerConfig_GetTypes,
} from "./composer_getEnvironmentConfigWebServerConfig";

export interface composer_getEnvironmentConfig {
  // Optional. If true, a private Composer environment will be created.
  enablePrivateEnvironment?: boolean;

  // The configuration for Cloud Composer maintenance window.
  maintenanceWindows?: Array<composer_getEnvironmentConfigMaintenanceWindow>;

  // Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
  masterAuthorizedNetworksConfigs?: Array<composer_getEnvironmentConfigMasterAuthorizedNetworksConfig>;

  // The URI of the Apache Airflow Web UI hosted within this environment.
  airflowUri?: string;

  // The configuration setting for Airflow data retention mechanism. This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4. or newer
  dataRetentionConfigs?: Array<composer_getEnvironmentConfigDataRetentionConfig>;

  // Optional. If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.
  enablePrivateBuildsOnly?: boolean;

  // The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  nodeCount?: number;

  // The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using '/'-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with this prefix.
  dagGcsPrefix?: string;

  // The recovery configuration settings for the Cloud Composer environment
  recoveryConfigs?: Array<composer_getEnvironmentConfigRecoveryConfig>;

  // Whether high resilience is enabled or not. This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow--.-.- and newer.
  resilienceMode?: string;

  // The configuration settings for software inside the environment.
  softwareConfigs?: Array<composer_getEnvironmentConfigSoftwareConfig>;

  // The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  workloadsConfigs?: Array<composer_getEnvironmentConfigWorkloadsConfig>;

  // The configuration of Cloud SQL instance that is used by the Apache Airflow software. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  databaseConfigs?: Array<composer_getEnvironmentConfigDatabaseConfig>;

  // The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  environmentSize?: string;

  // The Kubernetes Engine cluster used to run this environment.
  gkeCluster?: string;

  // The configuration used for the Kubernetes Engine cluster.
  nodeConfigs?: Array<composer_getEnvironmentConfigNodeConfig>;

  // The configuration used for the Private IP Cloud Composer environment.
  privateEnvironmentConfigs?: Array<composer_getEnvironmentConfigPrivateEnvironmentConfig>;

  // The configuration settings for the Airflow web server App Engine instance. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  webServerConfigs?: Array<composer_getEnvironmentConfigWebServerConfig>;

  // Network-level access control policy for the Airflow web server.
  webServerNetworkAccessControls?: Array<composer_getEnvironmentConfigWebServerNetworkAccessControl>;

  // The encryption options for the Composer environment and its dependencies.
  encryptionConfigs?: Array<composer_getEnvironmentConfigEncryptionConfig>;
}

export function composer_getEnvironmentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enablePrivateEnvironment",
      "Optional. If true, a private Composer environment will be created.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "maintenanceWindows",
      "The configuration for Cloud Composer maintenance window.",
      composer_getEnvironmentConfigMaintenanceWindow_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "airflowUri",
      "The URI of the Apache Airflow Web UI hosted within this environment.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dataRetentionConfigs",
      "The configuration setting for Airflow data retention mechanism. This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4. or newer",
      composer_getEnvironmentConfigDataRetentionConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "nodeCount",
      "The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resilienceMode",
      "Whether high resilience is enabled or not. This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow-*.*.* and newer.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "softwareConfigs",
      "The configuration settings for software inside the environment.",
      composer_getEnvironmentConfigSoftwareConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "environmentSize",
      "The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePrivateBuildsOnly",
      "Optional. If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "recoveryConfigs",
      "The recovery configuration settings for the Cloud Composer environment",
      composer_getEnvironmentConfigRecoveryConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "privateEnvironmentConfigs",
      "The configuration used for the Private IP Cloud Composer environment.",
      composer_getEnvironmentConfigPrivateEnvironmentConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "webServerConfigs",
      "The configuration settings for the Airflow web server App Engine instance. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      composer_getEnvironmentConfigWebServerConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "workloadsConfigs",
      "The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.",
      composer_getEnvironmentConfigWorkloadsConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "databaseConfigs",
      "The configuration of Cloud SQL instance that is used by the Apache Airflow software. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      composer_getEnvironmentConfigDatabaseConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "masterAuthorizedNetworksConfigs",
      "Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.",
      composer_getEnvironmentConfigMasterAuthorizedNetworksConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dagGcsPrefix",
      "The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using '/'-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with this prefix.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gkeCluster",
      "The Kubernetes Engine cluster used to run this environment.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nodeConfigs",
      "The configuration used for the Kubernetes Engine cluster.",
      composer_getEnvironmentConfigNodeConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "webServerNetworkAccessControls",
      "Network-level access control policy for the Airflow web server.",
      composer_getEnvironmentConfigWebServerNetworkAccessControl_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "encryptionConfigs",
      "The encryption options for the Composer environment and its dependencies.",
      composer_getEnvironmentConfigEncryptionConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
