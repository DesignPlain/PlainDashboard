import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Sql_getDatabaseInstanceSettingDataCacheConfig,
  Sql_getDatabaseInstanceSettingDataCacheConfig_GetTypes,
} from "./Sql_getDatabaseInstanceSettingDataCacheConfig";
import {
  Sql_getDatabaseInstanceSettingInsightsConfig,
  Sql_getDatabaseInstanceSettingInsightsConfig_GetTypes,
} from "./Sql_getDatabaseInstanceSettingInsightsConfig";
import {
  Sql_getDatabaseInstanceSettingSqlServerAuditConfig,
  Sql_getDatabaseInstanceSettingSqlServerAuditConfig_GetTypes,
} from "./Sql_getDatabaseInstanceSettingSqlServerAuditConfig";
import {
  Sql_getDatabaseInstanceSettingActiveDirectoryConfig,
  Sql_getDatabaseInstanceSettingActiveDirectoryConfig_GetTypes,
} from "./Sql_getDatabaseInstanceSettingActiveDirectoryConfig";
import {
  Sql_getDatabaseInstanceSettingIpConfiguration,
  Sql_getDatabaseInstanceSettingIpConfiguration_GetTypes,
} from "./Sql_getDatabaseInstanceSettingIpConfiguration";
import {
  Sql_getDatabaseInstanceSettingLocationPreference,
  Sql_getDatabaseInstanceSettingLocationPreference_GetTypes,
} from "./Sql_getDatabaseInstanceSettingLocationPreference";
import {
  Sql_getDatabaseInstanceSettingPasswordValidationPolicy,
  Sql_getDatabaseInstanceSettingPasswordValidationPolicy_GetTypes,
} from "./Sql_getDatabaseInstanceSettingPasswordValidationPolicy";
import {
  Sql_getDatabaseInstanceSettingBackupConfiguration,
  Sql_getDatabaseInstanceSettingBackupConfiguration_GetTypes,
} from "./Sql_getDatabaseInstanceSettingBackupConfiguration";
import {
  Sql_getDatabaseInstanceSettingMaintenanceWindow,
  Sql_getDatabaseInstanceSettingMaintenanceWindow_GetTypes,
} from "./Sql_getDatabaseInstanceSettingMaintenanceWindow";
import {
  Sql_getDatabaseInstanceSettingDenyMaintenancePeriod,
  Sql_getDatabaseInstanceSettingDenyMaintenancePeriod_GetTypes,
} from "./Sql_getDatabaseInstanceSettingDenyMaintenancePeriod";
import {
  Sql_getDatabaseInstanceSettingDatabaseFlag,
  Sql_getDatabaseInstanceSettingDatabaseFlag_GetTypes,
} from "./Sql_getDatabaseInstanceSettingDatabaseFlag";
import {
  Sql_getDatabaseInstanceSettingAdvancedMachineFeature,
  Sql_getDatabaseInstanceSettingAdvancedMachineFeature_GetTypes,
} from "./Sql_getDatabaseInstanceSettingAdvancedMachineFeature";

export interface Sql_getDatabaseInstanceSetting {
  // The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.
  Edition?: string;

  // Pricing plan for this instance, can only be PER_USE.
  PricingPlan?: string;

  //
  AdvancedMachineFeatures?: Array<Sql_getDatabaseInstanceSettingAdvancedMachineFeature>;

  // Specifies if connections must use Cloud SQL connectors.
  ConnectorEnforcement?: string;

  //
  ActiveDirectoryConfigs?: Array<Sql_getDatabaseInstanceSettingActiveDirectoryConfig>;

  // The maximum size, in GB, to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  DiskAutoresizeLimit?: number;

  //
  IpConfigurations?: Array<Sql_getDatabaseInstanceSettingIpConfiguration>;

  //
  LocationPreferences?: Array<Sql_getDatabaseInstanceSettingLocationPreference>;

  //
  PasswordValidationPolicies?: Array<Sql_getDatabaseInstanceSettingPasswordValidationPolicy>;

  // The machine type to use. See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.
  Tier?: string;

  // The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.
  DiskType?: string;

  //
  BackupConfigurations?: Array<Sql_getDatabaseInstanceSettingBackupConfiguration>;

  // Data cache configurations.
  DataCacheConfigs?: Array<Sql_getDatabaseInstanceSettingDataCacheConfig>;

  // Configuration of Query Insights.
  InsightsConfigs?: Array<Sql_getDatabaseInstanceSettingInsightsConfig>;

  // Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.
  MaintenanceWindows?: Array<Sql_getDatabaseInstanceSettingMaintenanceWindow>;

  // Configuration to protect against accidental instance deletion.
  DeletionProtectionEnabled?: boolean;

  //
  DenyMaintenancePeriods?: Array<Sql_getDatabaseInstanceSettingDenyMaintenancePeriod>;

  // The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.
  TimeZone?: string;

  /*
The availability type of the Cloud SQL instance, high availability
(REGIONAL) or single zone (ZONAL). For all instances, ensure that
settings.backup_configuration.enabled is set to true.
For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.
For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled
is set to true. Defaults to ZONAL.
*/
  AvailabilityType?: string;

  // Enables auto-resizing of the storage size. Defaults to true.
  DiskAutoresize?: boolean;

  // The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.
  DiskSize?: number;

  //
  SqlServerAuditConfigs?: Array<Sql_getDatabaseInstanceSettingSqlServerAuditConfig>;

  //
  DatabaseFlags?: Array<Sql_getDatabaseInstanceSettingDatabaseFlag>;

  // The name of server instance collation.
  Collation?: string;

  // A set of key/value user label pairs to assign to the instance.
  UserLabels?: Map<string, string>;

  // Used to make sure changes to the settings block are atomic.
  Version?: number;

  // This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.
  ActivationPolicy?: string;
}

export function Sql_getDatabaseInstanceSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ConnectorEnforcement",
      "Specifies if connections must use Cloud SQL connectors.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ActiveDirectoryConfigs",
      "",
      Sql_getDatabaseInstanceSettingActiveDirectoryConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IpConfigurations",
      "",
      Sql_getDatabaseInstanceSettingIpConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PasswordValidationPolicies",
      "",
      Sql_getDatabaseInstanceSettingPasswordValidationPolicy_GetTypes(),
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
      InputType.Bool,
      "DiskAutoresize",
      "Enables auto-resizing of the storage size. Defaults to true.",
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
      Sql_getDatabaseInstanceSettingDataCacheConfig_GetTypes(),
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
      InputType.Number,
      "DiskSize",
      "The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "BackupConfigurations",
      "",
      Sql_getDatabaseInstanceSettingBackupConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DenyMaintenancePeriods",
      "",
      Sql_getDatabaseInstanceSettingDenyMaintenancePeriod_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InsightsConfigs",
      "Configuration of Query Insights.",
      Sql_getDatabaseInstanceSettingInsightsConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AvailabilityType",
      "The availability type of the Cloud SQL instance, high availability\n(REGIONAL) or single zone (ZONAL). For all instances, ensure that\nsettings.backup_configuration.enabled is set to true.\nFor MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.\nFor Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled\nis set to true. Defaults to ZONAL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SqlServerAuditConfigs",
      "",
      Sql_getDatabaseInstanceSettingSqlServerAuditConfig_GetTypes(),
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
      InputType.Array,
      "AdvancedMachineFeatures",
      "",
      Sql_getDatabaseInstanceSettingAdvancedMachineFeature_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "LocationPreferences",
      "",
      Sql_getDatabaseInstanceSettingLocationPreference_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Tier",
      "The machine type to use. See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.",
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
      InputType.Array,
      "MaintenanceWindows",
      "Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.",
      Sql_getDatabaseInstanceSettingMaintenanceWindow_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DatabaseFlags",
      "",
      Sql_getDatabaseInstanceSettingDatabaseFlag_GetTypes(),
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
  ];
}
