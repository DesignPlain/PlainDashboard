import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Sql_getDatabaseInstancesInstanceSettingDatabaseFlag,
  Sql_getDatabaseInstancesInstanceSettingDatabaseFlag_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceSettingDatabaseFlag";
import {
  Sql_getDatabaseInstancesInstanceSettingPasswordValidationPolicy,
  Sql_getDatabaseInstancesInstanceSettingPasswordValidationPolicy_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceSettingPasswordValidationPolicy";
import {
  Sql_getDatabaseInstancesInstanceSettingAdvancedMachineFeature,
  Sql_getDatabaseInstancesInstanceSettingAdvancedMachineFeature_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceSettingAdvancedMachineFeature";
import {
  Sql_getDatabaseInstancesInstanceSettingMaintenanceWindow,
  Sql_getDatabaseInstancesInstanceSettingMaintenanceWindow_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceSettingMaintenanceWindow";
import {
  Sql_getDatabaseInstancesInstanceSettingSqlServerAuditConfig,
  Sql_getDatabaseInstancesInstanceSettingSqlServerAuditConfig_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceSettingSqlServerAuditConfig";
import {
  Sql_getDatabaseInstancesInstanceSettingDataCacheConfig,
  Sql_getDatabaseInstancesInstanceSettingDataCacheConfig_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceSettingDataCacheConfig";
import {
  Sql_getDatabaseInstancesInstanceSettingActiveDirectoryConfig,
  Sql_getDatabaseInstancesInstanceSettingActiveDirectoryConfig_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceSettingActiveDirectoryConfig";
import {
  Sql_getDatabaseInstancesInstanceSettingIpConfiguration,
  Sql_getDatabaseInstancesInstanceSettingIpConfiguration_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceSettingIpConfiguration";
import {
  Sql_getDatabaseInstancesInstanceSettingBackupConfiguration,
  Sql_getDatabaseInstancesInstanceSettingBackupConfiguration_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceSettingBackupConfiguration";
import {
  Sql_getDatabaseInstancesInstanceSettingDenyMaintenancePeriod,
  Sql_getDatabaseInstancesInstanceSettingDenyMaintenancePeriod_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceSettingDenyMaintenancePeriod";
import {
  Sql_getDatabaseInstancesInstanceSettingInsightsConfig,
  Sql_getDatabaseInstancesInstanceSettingInsightsConfig_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceSettingInsightsConfig";
import {
  Sql_getDatabaseInstancesInstanceSettingLocationPreference,
  Sql_getDatabaseInstancesInstanceSettingLocationPreference_GetTypes,
} from "./Sql_getDatabaseInstancesInstanceSettingLocationPreference";

export interface Sql_getDatabaseInstancesInstanceSetting {
  // To filter out the Cloud SQL instances based on the tier(or machine type) of the database instances.
  Tier?: string;

  // Used to make sure changes to the settings block are atomic.
  Version?: number;

  // Data cache configurations.
  DataCacheConfigs?: Array<Sql_getDatabaseInstancesInstanceSettingDataCacheConfig>;

  //
  LocationPreferences?: Array<Sql_getDatabaseInstancesInstanceSettingLocationPreference>;

  // The name of server instance collation.
  Collation?: string;

  // A set of key/value user label pairs to assign to the instance.
  UserLabels?: Map<string, string>;

  /*
The availability type of the Cloud SQL instance, high availability
(REGIONAL) or single zone (ZONAL). For all instances, ensure that
settings.backup_configuration.enabled is set to true.
For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.
For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled
is set to true. Defaults to ZONAL.
*/
  AvailabilityType?: string;

  //
  DatabaseFlags?: Array<Sql_getDatabaseInstancesInstanceSettingDatabaseFlag>;

  // The maximum size, in GB, to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  DiskAutoresizeLimit?: number;

  // The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.
  Edition?: string;

  // This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.
  ActivationPolicy?: string;

  //
  ActiveDirectoryConfigs?: Array<Sql_getDatabaseInstancesInstanceSettingActiveDirectoryConfig>;

  // The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.
  DiskSize?: number;

  //
  IpConfigurations?: Array<Sql_getDatabaseInstancesInstanceSettingIpConfiguration>;

  //
  BackupConfigurations?: Array<Sql_getDatabaseInstancesInstanceSettingBackupConfiguration>;

  //
  DenyMaintenancePeriods?: Array<Sql_getDatabaseInstancesInstanceSettingDenyMaintenancePeriod>;

  // Configuration to protect against accidental instance deletion.
  DeletionProtectionEnabled?: boolean;

  // The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.
  DiskType?: string;

  //
  PasswordValidationPolicies?: Array<Sql_getDatabaseInstancesInstanceSettingPasswordValidationPolicy>;

  // Pricing plan for this instance, can only be PER_USE.
  PricingPlan?: string;

  //
  AdvancedMachineFeatures?: Array<Sql_getDatabaseInstancesInstanceSettingAdvancedMachineFeature>;

  // Enables auto-resizing of the storage size. Defaults to true.
  DiskAutoresize?: boolean;

  // Configuration of Query Insights.
  InsightsConfigs?: Array<Sql_getDatabaseInstancesInstanceSettingInsightsConfig>;

  // Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.
  MaintenanceWindows?: Array<Sql_getDatabaseInstancesInstanceSettingMaintenanceWindow>;

  // Specifies if connections must use Cloud SQL connectors.
  ConnectorEnforcement?: string;

  //
  SqlServerAuditConfigs?: Array<Sql_getDatabaseInstancesInstanceSettingSqlServerAuditConfig>;

  // The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.
  TimeZone?: string;
}

export function Sql_getDatabaseInstancesInstanceSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AvailabilityType",
      "The availability type of the Cloud SQL instance, high availability\n(REGIONAL) or single zone (ZONAL). For all instances, ensure that\nsettings.backup_configuration.enabled is set to true.\nFor MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.\nFor Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled\nis set to true. Defaults to ZONAL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DeletionProtectionEnabled",
      "Configuration to protect against accidental instance deletion.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PricingPlan",
      "Pricing plan for this instance, can only be PER_USE.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DiskAutoresize",
      "Enables auto-resizing of the storage size. Defaults to true.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SqlServerAuditConfigs",
      "",
      Sql_getDatabaseInstancesInstanceSettingSqlServerAuditConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ActiveDirectoryConfigs",
      "",
      Sql_getDatabaseInstancesInstanceSettingActiveDirectoryConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DenyMaintenancePeriods",
      "",
      Sql_getDatabaseInstancesInstanceSettingDenyMaintenancePeriod_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InsightsConfigs",
      "Configuration of Query Insights.",
      Sql_getDatabaseInstancesInstanceSettingInsightsConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MaintenanceWindows",
      "Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.",
      Sql_getDatabaseInstancesInstanceSettingMaintenanceWindow_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Tier",
      "To filter out the Cloud SQL instances based on the tier(or machine type) of the database instances.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Edition",
      "The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ActivationPolicy",
      "This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IpConfigurations",
      "",
      Sql_getDatabaseInstancesInstanceSettingIpConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskType",
      "The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DataCacheConfigs",
      "Data cache configurations.",
      Sql_getDatabaseInstancesInstanceSettingDataCacheConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DiskSize",
      "The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Version",
      "Used to make sure changes to the settings block are atomic.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "LocationPreferences",
      "",
      Sql_getDatabaseInstancesInstanceSettingLocationPreference_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DatabaseFlags",
      "",
      Sql_getDatabaseInstancesInstanceSettingDatabaseFlag_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PasswordValidationPolicies",
      "",
      Sql_getDatabaseInstancesInstanceSettingPasswordValidationPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdvancedMachineFeatures",
      "",
      Sql_getDatabaseInstancesInstanceSettingAdvancedMachineFeature_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "UserLabels",
      "A set of key/value user label pairs to assign to the instance.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DiskAutoresizeLimit",
      "The maximum size, in GB, to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "BackupConfigurations",
      "",
      Sql_getDatabaseInstancesInstanceSettingBackupConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TimeZone",
      "The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Collation",
      "The name of server instance collation.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ConnectorEnforcement",
      "Specifies if connections must use Cloud SQL connectors.",
      [],
      true,
      false,
    ),
  ];
}
