import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  composer_EnvironmentConfigWebServerNetworkAccessControl,
  composer_EnvironmentConfigWebServerNetworkAccessControl_GetTypes,
} from './composer_EnvironmentConfigWebServerNetworkAccessControl';
import {
  composer_EnvironmentConfigPrivateEnvironmentConfig,
  composer_EnvironmentConfigPrivateEnvironmentConfig_GetTypes,
} from './composer_EnvironmentConfigPrivateEnvironmentConfig';
import {
  composer_EnvironmentConfigSoftwareConfig,
  composer_EnvironmentConfigSoftwareConfig_GetTypes,
} from './composer_EnvironmentConfigSoftwareConfig';
import {
  composer_EnvironmentConfigNodeConfig,
  composer_EnvironmentConfigNodeConfig_GetTypes,
} from './composer_EnvironmentConfigNodeConfig';
import {
  composer_EnvironmentConfigEncryptionConfig,
  composer_EnvironmentConfigEncryptionConfig_GetTypes,
} from './composer_EnvironmentConfigEncryptionConfig';
import {
  composer_EnvironmentConfigMaintenanceWindow,
  composer_EnvironmentConfigMaintenanceWindow_GetTypes,
} from './composer_EnvironmentConfigMaintenanceWindow';
import {
  composer_EnvironmentConfigWebServerConfig,
  composer_EnvironmentConfigWebServerConfig_GetTypes,
} from './composer_EnvironmentConfigWebServerConfig';
import {
  composer_EnvironmentConfigWorkloadsConfig,
  composer_EnvironmentConfigWorkloadsConfig_GetTypes,
} from './composer_EnvironmentConfigWorkloadsConfig';
import {
  composer_EnvironmentConfigDatabaseConfig,
  composer_EnvironmentConfigDatabaseConfig_GetTypes,
} from './composer_EnvironmentConfigDatabaseConfig';
import {
  composer_EnvironmentConfigMasterAuthorizedNetworksConfig,
  composer_EnvironmentConfigMasterAuthorizedNetworksConfig_GetTypes,
} from './composer_EnvironmentConfigMasterAuthorizedNetworksConfig';
import {
  composer_EnvironmentConfigRecoveryConfig,
  composer_EnvironmentConfigRecoveryConfig_GetTypes,
} from './composer_EnvironmentConfigRecoveryConfig';
import {
  composer_EnvironmentConfigDataRetentionConfig,
  composer_EnvironmentConfigDataRetentionConfig_GetTypes,
} from './composer_EnvironmentConfigDataRetentionConfig';

export interface composer_EnvironmentConfig {
  // The configuration for Cloud Composer maintenance window.
  maintenanceWindow?: composer_EnvironmentConfigMaintenanceWindow;

  // The configuration settings for the Airflow web server App Engine instance. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  webServerConfig?: composer_EnvironmentConfigWebServerConfig;

  // Network-level access control policy for the Airflow web server.
  webServerNetworkAccessControl?: composer_EnvironmentConfigWebServerNetworkAccessControl;

  // The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  workloadsConfig?: composer_EnvironmentConfigWorkloadsConfig;

  // The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using '/'-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with this prefix.
  dagGcsPrefix?: string;

  // Optional. If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.
  enablePrivateBuildsOnly?: boolean;

  // The configuration used for the Private IP Cloud Composer environment.
  privateEnvironmentConfig?: composer_EnvironmentConfigPrivateEnvironmentConfig;

  // The configuration settings for software inside the environment.
  softwareConfig?: composer_EnvironmentConfigSoftwareConfig;

  // The configuration of Cloud SQL instance that is used by the Apache Airflow software. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  databaseConfig?: composer_EnvironmentConfigDatabaseConfig;

  // Optional. If true, a private Composer environment will be created.
  enablePrivateEnvironment?: boolean;

  // The configuration used for the Kubernetes Engine cluster.
  nodeConfig?: composer_EnvironmentConfigNodeConfig;

  // The encryption options for the Composer environment and its dependencies.
  encryptionConfig?: composer_EnvironmentConfigEncryptionConfig;

  // The Kubernetes Engine cluster used to run this environment.
  gkeCluster?: string;

  // The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  environmentSize?: string;

  // Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
  masterAuthorizedNetworksConfig?: composer_EnvironmentConfigMasterAuthorizedNetworksConfig;

  // The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  nodeCount?: number;

  // The recovery configuration settings for the Cloud Composer environment
  recoveryConfig?: composer_EnvironmentConfigRecoveryConfig;

  // Whether high resilience is enabled or not. This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow--.-.- and newer.
  resilienceMode?: string;

  // The URI of the Apache Airflow Web UI hosted within this environment.
  airflowUri?: string;

  // The configuration setting for Airflow data retention mechanism. This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4. or newer
  dataRetentionConfig?: composer_EnvironmentConfigDataRetentionConfig;
}

export function composer_EnvironmentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'workloadsConfig',
      'The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.',
      () => composer_EnvironmentConfigWorkloadsConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enablePrivateBuildsOnly',
      'Optional. If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'privateEnvironmentConfig',
      'The configuration used for the Private IP Cloud Composer environment.',
      () => composer_EnvironmentConfigPrivateEnvironmentConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'databaseConfig',
      'The configuration of Cloud SQL instance that is used by the Apache Airflow software. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      () => composer_EnvironmentConfigDatabaseConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'gkeCluster',
      'The Kubernetes Engine cluster used to run this environment.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'environmentSize',
      'The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'recoveryConfig',
      'The recovery configuration settings for the Cloud Composer environment',
      () => composer_EnvironmentConfigRecoveryConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'resilienceMode',
      'Whether high resilience is enabled or not. This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow-*.*.* and newer.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'airflowUri',
      'The URI of the Apache Airflow Web UI hosted within this environment.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'webServerNetworkAccessControl',
      'Network-level access control policy for the Airflow web server.',
      () => composer_EnvironmentConfigWebServerNetworkAccessControl_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enablePrivateEnvironment',
      'Optional. If true, a private Composer environment will be created.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'nodeConfig',
      'The configuration used for the Kubernetes Engine cluster.',
      () => composer_EnvironmentConfigNodeConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'nodeCount',
      'The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'webServerConfig',
      'The configuration settings for the Airflow web server App Engine instance. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      () => composer_EnvironmentConfigWebServerConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'softwareConfig',
      'The configuration settings for software inside the environment.',
      () => composer_EnvironmentConfigSoftwareConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'dataRetentionConfig',
      'The configuration setting for Airflow data retention mechanism. This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4. or newer',
      () => composer_EnvironmentConfigDataRetentionConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'maintenanceWindow',
      'The configuration for Cloud Composer maintenance window.',
      () => composer_EnvironmentConfigMaintenanceWindow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dagGcsPrefix',
      "The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using '/'-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with this prefix.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'encryptionConfig',
      'The encryption options for the Composer environment and its dependencies.',
      () => composer_EnvironmentConfigEncryptionConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'masterAuthorizedNetworksConfig',
      'Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.',
      () => composer_EnvironmentConfigMasterAuthorizedNetworksConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
