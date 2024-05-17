import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Sql_DatabaseInstanceSettingsBackupConfiguration,
  Sql_DatabaseInstanceSettingsBackupConfiguration_GetTypes,
} from "./Sql_DatabaseInstanceSettingsBackupConfiguration";
import {
  Sql_DatabaseInstanceSettingsSqlServerAuditConfig,
  Sql_DatabaseInstanceSettingsSqlServerAuditConfig_GetTypes,
} from "./Sql_DatabaseInstanceSettingsSqlServerAuditConfig";
import {
  Sql_DatabaseInstanceSettingsDataCacheConfig,
  Sql_DatabaseInstanceSettingsDataCacheConfig_GetTypes,
} from "./Sql_DatabaseInstanceSettingsDataCacheConfig";
import {
  Sql_DatabaseInstanceSettingsDatabaseFlag,
  Sql_DatabaseInstanceSettingsDatabaseFlag_GetTypes,
} from "./Sql_DatabaseInstanceSettingsDatabaseFlag";
import {
  Sql_DatabaseInstanceSettingsInsightsConfig,
  Sql_DatabaseInstanceSettingsInsightsConfig_GetTypes,
} from "./Sql_DatabaseInstanceSettingsInsightsConfig";
import {
  Sql_DatabaseInstanceSettingsAdvancedMachineFeatures,
  Sql_DatabaseInstanceSettingsAdvancedMachineFeatures_GetTypes,
} from "./Sql_DatabaseInstanceSettingsAdvancedMachineFeatures";
import {
  Sql_DatabaseInstanceSettingsLocationPreference,
  Sql_DatabaseInstanceSettingsLocationPreference_GetTypes,
} from "./Sql_DatabaseInstanceSettingsLocationPreference";
import {
  Sql_DatabaseInstanceSettingsDenyMaintenancePeriod,
  Sql_DatabaseInstanceSettingsDenyMaintenancePeriod_GetTypes,
} from "./Sql_DatabaseInstanceSettingsDenyMaintenancePeriod";
import {
  Sql_DatabaseInstanceSettingsMaintenanceWindow,
  Sql_DatabaseInstanceSettingsMaintenanceWindow_GetTypes,
} from "./Sql_DatabaseInstanceSettingsMaintenanceWindow";
import {
  Sql_DatabaseInstanceSettingsPasswordValidationPolicy,
  Sql_DatabaseInstanceSettingsPasswordValidationPolicy_GetTypes,
} from "./Sql_DatabaseInstanceSettingsPasswordValidationPolicy";
import {
  Sql_DatabaseInstanceSettingsIpConfiguration,
  Sql_DatabaseInstanceSettingsIpConfiguration_GetTypes,
} from "./Sql_DatabaseInstanceSettingsIpConfiguration";
import {
  Sql_DatabaseInstanceSettingsActiveDirectoryConfig,
  Sql_DatabaseInstanceSettingsActiveDirectoryConfig_GetTypes,
} from "./Sql_DatabaseInstanceSettingsActiveDirectoryConfig";

export interface Sql_DatabaseInstanceSettings {
  //
  PasswordValidationPolicy?: Sql_DatabaseInstanceSettingsPasswordValidationPolicy;

  // Pricing plan for this instance, can only be `PER_USE`.
  PricingPlan?: string;

  /*
The machine type to use. See [tiers](https://cloud.google.com/sql/docs/admin-api/v1beta4/tiers)
for more details and supported versions. Postgres supports only shared-core machine types,
and custom machine types such as `db-custom-2-13312`. See the [Custom Machine Type Documentation](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) to learn about specifying custom machine types.
*/
  Tier?: string;

  // Data cache configurations.
  DataCacheConfig?: Sql_DatabaseInstanceSettingsDataCacheConfig;

  //
  DatabaseFlags?: Array<Sql_DatabaseInstanceSettingsDatabaseFlag>;

  // The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  DiskAutoresizeLimit?: number;

  /*
The availability type of the Cloud SQL
instance, high availability (`REGIONAL`) or single zone (`ZONAL`).' For all instances, ensure that
`settings.backup_configuration.enabled` is set to `true`.
For MySQL instances, ensure that `settings.backup_configuration.binary_log_enabled` is set to `true`.
For Postgres and SQL Server instances, ensure that `settings.backup_configuration.point_in_time_recovery_enabled`
is set to `true`. Defaults to `ZONAL`.
*/
  AvailabilityType?: string;

  // The type of data disk: PD_SSD or PD_HDD. Defaults to `PD_SSD`.
  DiskType?: string;

  // Configuration to protect against accidental instance deletion.
  DeletionProtectionEnabled?: boolean;

  //
  IpConfiguration?: Sql_DatabaseInstanceSettingsIpConfiguration;

  // The edition of the instance, can be `ENTERPRISE` or `ENTERPRISE_PLUS`.
  Edition?: string;

  /*
This specifies when the instance should be
active. Can be either `ALWAYS`, `NEVER` or `ON_DEMAND`.
*/
  ActivationPolicy?: string;

  //
  ActiveDirectoryConfig?: Sql_DatabaseInstanceSettingsActiveDirectoryConfig;

  //
  AdvancedMachineFeatures?: Sql_DatabaseInstanceSettingsAdvancedMachineFeatures;

  // The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.
  DiskSize?: number;

  // Used to make sure changes to the settings block are atomic.
  Version?: number;

  // Configuration of Query Insights.
  InsightsConfig?: Sql_DatabaseInstanceSettingsInsightsConfig;

  //
  LocationPreference?: Sql_DatabaseInstanceSettingsLocationPreference;

  //
  BackupConfiguration?: Sql_DatabaseInstanceSettingsBackupConfiguration;

  // Enables auto-resizing of the storage size. Defaults to `true`.
  DiskAutoresize?: boolean;

  // The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.
  TimeZone?: string;

  // The name of server instance collation.
  Collation?: string;

  // Specifies if connections must use Cloud SQL connectors.
  ConnectorEnforcement?: string;

  //
  DenyMaintenancePeriod?: Sql_DatabaseInstanceSettingsDenyMaintenancePeriod;

  // Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.
  MaintenanceWindow?: Sql_DatabaseInstanceSettingsMaintenanceWindow;

  //
  SqlServerAuditConfig?: Sql_DatabaseInstanceSettingsSqlServerAuditConfig;

  // A set of key/value user label pairs to assign to the instance.
  UserLabels?: Map<string, string>;
}

export function Sql_DatabaseInstanceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Edition",
      "The edition of the instance, can be `ENTERPRISE` or `ENTERPRISE_PLUS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MaintenanceWindow",
      "Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.",
      Sql_DatabaseInstanceSettingsMaintenanceWindow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskType",
      "The type of data disk: PD_SSD or PD_HDD. Defaults to `PD_SSD`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DeletionProtectionEnabled",
      "Configuration to protect against accidental instance deletion.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ActivationPolicy",
      "This specifies when the instance should be\nactive. Can be either `ALWAYS`, `NEVER` or `ON_DEMAND`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "UserLabels",
      "A set of key/value user label pairs to assign to the instance.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AvailabilityType",
      "The availability type of the Cloud SQL\ninstance, high availability (`REGIONAL`) or single zone (`ZONAL`).' For all instances, ensure that\n`settings.backup_configuration.enabled` is set to `true`.\nFor MySQL instances, ensure that `settings.backup_configuration.binary_log_enabled` is set to `true`.\nFor Postgres and SQL Server instances, ensure that `settings.backup_configuration.point_in_time_recovery_enabled`\nis set to `true`. Defaults to `ZONAL`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AdvancedMachineFeatures",
      "",
      Sql_DatabaseInstanceSettingsAdvancedMachineFeatures_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DiskSize",
      "The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ConnectorEnforcement",
      "Specifies if connections must use Cloud SQL connectors.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DataCacheConfig",
      "Data cache configurations.",
      Sql_DatabaseInstanceSettingsDataCacheConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Version",
      "Used to make sure changes to the settings block are atomic.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DiskAutoresize",
      "Enables auto-resizing of the storage size. Defaults to `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PasswordValidationPolicy",
      "",
      Sql_DatabaseInstanceSettingsPasswordValidationPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DatabaseFlags",
      "",
      Sql_DatabaseInstanceSettingsDatabaseFlag_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DiskAutoresizeLimit",
      "The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Collation",
      "The name of server instance collation.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Tier",
      "The machine type to use. See [tiers](https://cloud.google.com/sql/docs/admin-api/v1beta4/tiers)\nfor more details and supported versions. Postgres supports only shared-core machine types,\nand custom machine types such as `db-custom-2-13312`. See the [Custom Machine Type Documentation](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) to learn about specifying custom machine types.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ActiveDirectoryConfig",
      "",
      Sql_DatabaseInstanceSettingsActiveDirectoryConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PricingPlan",
      "Pricing plan for this instance, can only be `PER_USE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "BackupConfiguration",
      "",
      Sql_DatabaseInstanceSettingsBackupConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SqlServerAuditConfig",
      "",
      Sql_DatabaseInstanceSettingsSqlServerAuditConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DenyMaintenancePeriod",
      "",
      Sql_DatabaseInstanceSettingsDenyMaintenancePeriod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "IpConfiguration",
      "",
      Sql_DatabaseInstanceSettingsIpConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "InsightsConfig",
      "Configuration of Query Insights.",
      Sql_DatabaseInstanceSettingsInsightsConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LocationPreference",
      "",
      Sql_DatabaseInstanceSettingsLocationPreference_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TimeZone",
      "The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.",
      [],
      false,
      true,
    ),
  ];
}
