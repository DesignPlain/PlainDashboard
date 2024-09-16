import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sql_getDatabaseInstancesInstanceSettingInsightsConfig,
  sql_getDatabaseInstancesInstanceSettingInsightsConfig_GetTypes,
} from './sql_getDatabaseInstancesInstanceSettingInsightsConfig';
import {
  sql_getDatabaseInstancesInstanceSettingSqlServerAuditConfig,
  sql_getDatabaseInstancesInstanceSettingSqlServerAuditConfig_GetTypes,
} from './sql_getDatabaseInstancesInstanceSettingSqlServerAuditConfig';
import {
  sql_getDatabaseInstancesInstanceSettingIpConfiguration,
  sql_getDatabaseInstancesInstanceSettingIpConfiguration_GetTypes,
} from './sql_getDatabaseInstancesInstanceSettingIpConfiguration';
import {
  sql_getDatabaseInstancesInstanceSettingDatabaseFlag,
  sql_getDatabaseInstancesInstanceSettingDatabaseFlag_GetTypes,
} from './sql_getDatabaseInstancesInstanceSettingDatabaseFlag';
import {
  sql_getDatabaseInstancesInstanceSettingDataCacheConfig,
  sql_getDatabaseInstancesInstanceSettingDataCacheConfig_GetTypes,
} from './sql_getDatabaseInstancesInstanceSettingDataCacheConfig';
import {
  sql_getDatabaseInstancesInstanceSettingLocationPreference,
  sql_getDatabaseInstancesInstanceSettingLocationPreference_GetTypes,
} from './sql_getDatabaseInstancesInstanceSettingLocationPreference';
import {
  sql_getDatabaseInstancesInstanceSettingDenyMaintenancePeriod,
  sql_getDatabaseInstancesInstanceSettingDenyMaintenancePeriod_GetTypes,
} from './sql_getDatabaseInstancesInstanceSettingDenyMaintenancePeriod';
import {
  sql_getDatabaseInstancesInstanceSettingAdvancedMachineFeature,
  sql_getDatabaseInstancesInstanceSettingAdvancedMachineFeature_GetTypes,
} from './sql_getDatabaseInstancesInstanceSettingAdvancedMachineFeature';
import {
  sql_getDatabaseInstancesInstanceSettingPasswordValidationPolicy,
  sql_getDatabaseInstancesInstanceSettingPasswordValidationPolicy_GetTypes,
} from './sql_getDatabaseInstancesInstanceSettingPasswordValidationPolicy';
import {
  sql_getDatabaseInstancesInstanceSettingActiveDirectoryConfig,
  sql_getDatabaseInstancesInstanceSettingActiveDirectoryConfig_GetTypes,
} from './sql_getDatabaseInstancesInstanceSettingActiveDirectoryConfig';
import {
  sql_getDatabaseInstancesInstanceSettingMaintenanceWindow,
  sql_getDatabaseInstancesInstanceSettingMaintenanceWindow_GetTypes,
} from './sql_getDatabaseInstancesInstanceSettingMaintenanceWindow';
import {
  sql_getDatabaseInstancesInstanceSettingBackupConfiguration,
  sql_getDatabaseInstancesInstanceSettingBackupConfiguration_GetTypes,
} from './sql_getDatabaseInstancesInstanceSettingBackupConfiguration';

export interface sql_getDatabaseInstancesInstanceSetting {
  // Enables auto-resizing of the storage size. Defaults to true.
  diskAutoresize?: boolean;

  // Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.
  maintenanceWindows?: Array<sql_getDatabaseInstancesInstanceSettingMaintenanceWindow>;

  // Pricing plan for this instance, can only be PER_USE.
  pricingPlan?: string;

  // This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.
  activationPolicy?: string;

  //
  databaseFlags?: Array<sql_getDatabaseInstancesInstanceSettingDatabaseFlag>;

  // Configuration to protect against accidental instance deletion.
  deletionProtectionEnabled?: boolean;

  // A set of key/value user label pairs to assign to the instance.
  userLabels?: Map<string, string>;

  // Used to make sure changes to the settings block are atomic.
  version?: number;

  // Data cache configurations.
  dataCacheConfigs?: Array<sql_getDatabaseInstancesInstanceSettingDataCacheConfig>;

  // The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.
  diskSize?: number;

  // Configuration of Query Insights.
  insightsConfigs?: Array<sql_getDatabaseInstancesInstanceSettingInsightsConfig>;

  //
  backupConfigurations?: Array<sql_getDatabaseInstancesInstanceSettingBackupConfiguration>;

  // The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.
  edition?: string;

  // The maximum size, in GB, to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  diskAutoresizeLimit?: number;

  // The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.
  diskType?: string;

  //
  locationPreferences?: Array<sql_getDatabaseInstancesInstanceSettingLocationPreference>;

  //
  sqlServerAuditConfigs?: Array<sql_getDatabaseInstancesInstanceSettingSqlServerAuditConfig>;

  /*
The availability type of the Cloud SQL instance, high availability
(REGIONAL) or single zone (ZONAL). For all instances, ensure that
settings.backup_configuration.enabled is set to true.
For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.
For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled
is set to true. Defaults to ZONAL.
*/
  availabilityType?: string;

  //
  denyMaintenancePeriods?: Array<sql_getDatabaseInstancesInstanceSettingDenyMaintenancePeriod>;

  //
  ipConfigurations?: Array<sql_getDatabaseInstancesInstanceSettingIpConfiguration>;

  //
  advancedMachineFeatures?: Array<sql_getDatabaseInstancesInstanceSettingAdvancedMachineFeature>;

  // Specifies if connections must use Cloud SQL connectors.
  connectorEnforcement?: string;

  //
  passwordValidationPolicies?: Array<sql_getDatabaseInstancesInstanceSettingPasswordValidationPolicy>;

  // The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.
  timeZone?: string;

  // To filter out the Cloud SQL instances based on the tier(or machine type) of the database instances.
  tier?: string;

  //
  activeDirectoryConfigs?: Array<sql_getDatabaseInstancesInstanceSettingActiveDirectoryConfig>;

  // The name of server instance collation.
  collation?: string;
}

export function sql_getDatabaseInstancesInstanceSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'diskType',
      'The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'activeDirectoryConfigs',
      '',
      () =>
        sql_getDatabaseInstancesInstanceSettingActiveDirectoryConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'version',
      'Used to make sure changes to the settings block are atomic.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'diskSize',
      'The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'backupConfigurations',
      '',
      () =>
        sql_getDatabaseInstancesInstanceSettingBackupConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'edition',
      'The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'deletionProtectionEnabled',
      'Configuration to protect against accidental instance deletion.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'userLabels',
      'A set of key/value user label pairs to assign to the instance.',
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'activationPolicy',
      'This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'collation',
      'The name of server instance collation.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'diskAutoresizeLimit',
      'The maximum size, in GB, to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'timeZone',
      'The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tier',
      'To filter out the Cloud SQL instances based on the tier(or machine type) of the database instances.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'pricingPlan',
      'Pricing plan for this instance, can only be PER_USE.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'availabilityType',
      'The availability type of the Cloud SQL instance, high availability\n(REGIONAL) or single zone (ZONAL). For all instances, ensure that\nsettings.backup_configuration.enabled is set to true.\nFor MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.\nFor Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled\nis set to true. Defaults to ZONAL.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'databaseFlags',
      '',
      () => sql_getDatabaseInstancesInstanceSettingDatabaseFlag_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'insightsConfigs',
      'Configuration of Query Insights.',
      () => sql_getDatabaseInstancesInstanceSettingInsightsConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'sqlServerAuditConfigs',
      '',
      () =>
        sql_getDatabaseInstancesInstanceSettingSqlServerAuditConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'denyMaintenancePeriods',
      '',
      () =>
        sql_getDatabaseInstancesInstanceSettingDenyMaintenancePeriod_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ipConfigurations',
      '',
      () => sql_getDatabaseInstancesInstanceSettingIpConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'advancedMachineFeatures',
      '',
      () =>
        sql_getDatabaseInstancesInstanceSettingAdvancedMachineFeature_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'connectorEnforcement',
      'Specifies if connections must use Cloud SQL connectors.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'passwordValidationPolicies',
      '',
      () =>
        sql_getDatabaseInstancesInstanceSettingPasswordValidationPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'dataCacheConfigs',
      'Data cache configurations.',
      () => sql_getDatabaseInstancesInstanceSettingDataCacheConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'locationPreferences',
      '',
      () =>
        sql_getDatabaseInstancesInstanceSettingLocationPreference_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'diskAutoresize',
      'Enables auto-resizing of the storage size. Defaults to true.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'maintenanceWindows',
      'Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.',
      () => sql_getDatabaseInstancesInstanceSettingMaintenanceWindow_GetTypes(),
      true,
      false,
    ),
  ];
}
