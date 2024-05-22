import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sql_DatabaseInstanceSettingsDatabaseFlag,
  sql_DatabaseInstanceSettingsDatabaseFlag_GetTypes,
} from "./sql_DatabaseInstanceSettingsDatabaseFlag";
import {
  sql_DatabaseInstanceSettingsActiveDirectoryConfig,
  sql_DatabaseInstanceSettingsActiveDirectoryConfig_GetTypes,
} from "./sql_DatabaseInstanceSettingsActiveDirectoryConfig";
import {
  sql_DatabaseInstanceSettingsDenyMaintenancePeriod,
  sql_DatabaseInstanceSettingsDenyMaintenancePeriod_GetTypes,
} from "./sql_DatabaseInstanceSettingsDenyMaintenancePeriod";
import {
  sql_DatabaseInstanceSettingsIpConfiguration,
  sql_DatabaseInstanceSettingsIpConfiguration_GetTypes,
} from "./sql_DatabaseInstanceSettingsIpConfiguration";
import {
  sql_DatabaseInstanceSettingsDataCacheConfig,
  sql_DatabaseInstanceSettingsDataCacheConfig_GetTypes,
} from "./sql_DatabaseInstanceSettingsDataCacheConfig";
import {
  sql_DatabaseInstanceSettingsPasswordValidationPolicy,
  sql_DatabaseInstanceSettingsPasswordValidationPolicy_GetTypes,
} from "./sql_DatabaseInstanceSettingsPasswordValidationPolicy";
import {
  sql_DatabaseInstanceSettingsInsightsConfig,
  sql_DatabaseInstanceSettingsInsightsConfig_GetTypes,
} from "./sql_DatabaseInstanceSettingsInsightsConfig";
import {
  sql_DatabaseInstanceSettingsMaintenanceWindow,
  sql_DatabaseInstanceSettingsMaintenanceWindow_GetTypes,
} from "./sql_DatabaseInstanceSettingsMaintenanceWindow";
import {
  sql_DatabaseInstanceSettingsAdvancedMachineFeatures,
  sql_DatabaseInstanceSettingsAdvancedMachineFeatures_GetTypes,
} from "./sql_DatabaseInstanceSettingsAdvancedMachineFeatures";
import {
  sql_DatabaseInstanceSettingsSqlServerAuditConfig,
  sql_DatabaseInstanceSettingsSqlServerAuditConfig_GetTypes,
} from "./sql_DatabaseInstanceSettingsSqlServerAuditConfig";
import {
  sql_DatabaseInstanceSettingsBackupConfiguration,
  sql_DatabaseInstanceSettingsBackupConfiguration_GetTypes,
} from "./sql_DatabaseInstanceSettingsBackupConfiguration";
import {
  sql_DatabaseInstanceSettingsLocationPreference,
  sql_DatabaseInstanceSettingsLocationPreference_GetTypes,
} from "./sql_DatabaseInstanceSettingsLocationPreference";

export interface sql_DatabaseInstanceSettings {
  //
  databaseFlags?: Array<sql_DatabaseInstanceSettingsDatabaseFlag>;

  // The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  diskAutoresizeLimit?: number;

  // A set of key/value user label pairs to assign to the instance.
  userLabels?: Map<string, string>;

  // Configuration to protect against accidental instance deletion.
  deletionProtectionEnabled?: boolean;

  /*
The machine type to use. See [tiers](https://cloud.google.com/sql/docs/admin-api/v1beta4/tiers)
for more details and supported versions. Postgres supports only shared-core machine types,
and custom machine types such as `db-custom-2-13312`. See the [Custom Machine Type Documentation](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) to learn about specifying custom machine types.
*/
  tier?: string;

  //
  activeDirectoryConfig?: sql_DatabaseInstanceSettingsActiveDirectoryConfig;

  // The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.
  diskSize?: number;

  // Configuration of Query Insights.
  insightsConfig?: sql_DatabaseInstanceSettingsInsightsConfig;

  // Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.
  maintenanceWindow?: sql_DatabaseInstanceSettingsMaintenanceWindow;

  // The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.
  timeZone?: string;

  //
  advancedMachineFeatures?: sql_DatabaseInstanceSettingsAdvancedMachineFeatures;

  //
  denyMaintenancePeriod?: sql_DatabaseInstanceSettingsDenyMaintenancePeriod;

  // The type of data disk: PD_SSD or PD_HDD. Defaults to `PD_SSD`.
  diskType?: string;

  //
  sqlServerAuditConfig?: sql_DatabaseInstanceSettingsSqlServerAuditConfig;

  /*
This specifies when the instance should be
active. Can be either `ALWAYS`, `NEVER` or `ON_DEMAND`.
*/
  activationPolicy?: string;

  //
  ipConfiguration?: sql_DatabaseInstanceSettingsIpConfiguration;

  // Pricing plan for this instance, can only be `PER_USE`.
  pricingPlan?: string;

  // Data cache configurations.
  dataCacheConfig?: sql_DatabaseInstanceSettingsDataCacheConfig;

  //
  backupConfiguration?: sql_DatabaseInstanceSettingsBackupConfiguration;

  // The name of server instance collation.
  collation?: string;

  // Enables auto-resizing of the storage size. Defaults to `true`.
  diskAutoresize?: boolean;

  //
  locationPreference?: sql_DatabaseInstanceSettingsLocationPreference;

  /*
The availability type of the Cloud SQL
instance, high availability (`REGIONAL`) or single zone (`ZONAL`).' For all instances, ensure that
`settings.backup_configuration.enabled` is set to `true`.
For MySQL instances, ensure that `settings.backup_configuration.binary_log_enabled` is set to `true`.
For Postgres and SQL Server instances, ensure that `settings.backup_configuration.point_in_time_recovery_enabled`
is set to `true`. Defaults to `ZONAL`.
*/
  availabilityType?: string;

  // Specifies if connections must use Cloud SQL connectors.
  connectorEnforcement?: string;

  //
  passwordValidationPolicy?: sql_DatabaseInstanceSettingsPasswordValidationPolicy;

  // Used to make sure changes to the settings block are atomic.
  version?: number;

  // The edition of the instance, can be `ENTERPRISE` or `ENTERPRISE_PLUS`.
  edition?: string;
}

export function sql_DatabaseInstanceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "activeDirectoryConfig",
      "",
      sql_DatabaseInstanceSettingsActiveDirectoryConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeZone",
      "The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "denyMaintenancePeriod",
      "",
      sql_DatabaseInstanceSettingsDenyMaintenancePeriod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ipConfiguration",
      "",
      sql_DatabaseInstanceSettingsIpConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskType",
      "The type of data disk: PD_SSD or PD_HDD. Defaults to `PD_SSD`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskSize",
      "The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "insightsConfig",
      "Configuration of Query Insights.",
      sql_DatabaseInstanceSettingsInsightsConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "activationPolicy",
      "This specifies when the instance should be\nactive. Can be either `ALWAYS`, `NEVER` or `ON_DEMAND`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dataCacheConfig",
      "Data cache configurations.",
      sql_DatabaseInstanceSettingsDataCacheConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pricingPlan",
      "Pricing plan for this instance, can only be `PER_USE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "backupConfiguration",
      "",
      sql_DatabaseInstanceSettingsBackupConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "edition",
      "The edition of the instance, can be `ENTERPRISE` or `ENTERPRISE_PLUS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "databaseFlags",
      "",
      sql_DatabaseInstanceSettingsDatabaseFlag_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskAutoresizeLimit",
      "The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "advancedMachineFeatures",
      "",
      sql_DatabaseInstanceSettingsAdvancedMachineFeatures_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "availabilityType",
      "The availability type of the Cloud SQL\ninstance, high availability (`REGIONAL`) or single zone (`ZONAL`).' For all instances, ensure that\n`settings.backup_configuration.enabled` is set to `true`.\nFor MySQL instances, ensure that `settings.backup_configuration.binary_log_enabled` is set to `true`.\nFor Postgres and SQL Server instances, ensure that `settings.backup_configuration.point_in_time_recovery_enabled`\nis set to `true`. Defaults to `ZONAL`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectorEnforcement",
      "Specifies if connections must use Cloud SQL connectors.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "passwordValidationPolicy",
      "",
      sql_DatabaseInstanceSettingsPasswordValidationPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "diskAutoresize",
      "Enables auto-resizing of the storage size. Defaults to `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "version",
      "Used to make sure changes to the settings block are atomic.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "userLabels",
      "A set of key/value user label pairs to assign to the instance.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "deletionProtectionEnabled",
      "Configuration to protect against accidental instance deletion.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "maintenanceWindow",
      "Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.",
      sql_DatabaseInstanceSettingsMaintenanceWindow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sqlServerAuditConfig",
      "",
      sql_DatabaseInstanceSettingsSqlServerAuditConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "collation",
      "The name of server instance collation.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "tier",
      "The machine type to use. See [tiers](https://cloud.google.com/sql/docs/admin-api/v1beta4/tiers)\nfor more details and supported versions. Postgres supports only shared-core machine types,\nand custom machine types such as `db-custom-2-13312`. See the [Custom Machine Type Documentation](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) to learn about specifying custom machine types.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "locationPreference",
      "",
      sql_DatabaseInstanceSettingsLocationPreference_GetTypes(),
      false,
      false,
    ),
  ];
}
