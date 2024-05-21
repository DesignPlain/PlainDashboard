import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sql_getDatabaseInstanceSettingPasswordValidationPolicy,
  sql_getDatabaseInstanceSettingPasswordValidationPolicy_GetTypes,
} from "./sql_getDatabaseInstanceSettingPasswordValidationPolicy";
import {
  sql_getDatabaseInstanceSettingMaintenanceWindow,
  sql_getDatabaseInstanceSettingMaintenanceWindow_GetTypes,
} from "./sql_getDatabaseInstanceSettingMaintenanceWindow";
import {
  sql_getDatabaseInstanceSettingActiveDirectoryConfig,
  sql_getDatabaseInstanceSettingActiveDirectoryConfig_GetTypes,
} from "./sql_getDatabaseInstanceSettingActiveDirectoryConfig";
import {
  sql_getDatabaseInstanceSettingDatabaseFlag,
  sql_getDatabaseInstanceSettingDatabaseFlag_GetTypes,
} from "./sql_getDatabaseInstanceSettingDatabaseFlag";
import {
  sql_getDatabaseInstanceSettingIpConfiguration,
  sql_getDatabaseInstanceSettingIpConfiguration_GetTypes,
} from "./sql_getDatabaseInstanceSettingIpConfiguration";
import {
  sql_getDatabaseInstanceSettingDataCacheConfig,
  sql_getDatabaseInstanceSettingDataCacheConfig_GetTypes,
} from "./sql_getDatabaseInstanceSettingDataCacheConfig";
import {
  sql_getDatabaseInstanceSettingDenyMaintenancePeriod,
  sql_getDatabaseInstanceSettingDenyMaintenancePeriod_GetTypes,
} from "./sql_getDatabaseInstanceSettingDenyMaintenancePeriod";
import {
  sql_getDatabaseInstanceSettingInsightsConfig,
  sql_getDatabaseInstanceSettingInsightsConfig_GetTypes,
} from "./sql_getDatabaseInstanceSettingInsightsConfig";
import {
  sql_getDatabaseInstanceSettingAdvancedMachineFeature,
  sql_getDatabaseInstanceSettingAdvancedMachineFeature_GetTypes,
} from "./sql_getDatabaseInstanceSettingAdvancedMachineFeature";
import {
  sql_getDatabaseInstanceSettingLocationPreference,
  sql_getDatabaseInstanceSettingLocationPreference_GetTypes,
} from "./sql_getDatabaseInstanceSettingLocationPreference";
import {
  sql_getDatabaseInstanceSettingBackupConfiguration,
  sql_getDatabaseInstanceSettingBackupConfiguration_GetTypes,
} from "./sql_getDatabaseInstanceSettingBackupConfiguration";
import {
  sql_getDatabaseInstanceSettingSqlServerAuditConfig,
  sql_getDatabaseInstanceSettingSqlServerAuditConfig_GetTypes,
} from "./sql_getDatabaseInstanceSettingSqlServerAuditConfig";

export interface sql_getDatabaseInstanceSetting {
  //
  backupConfigurations?: Array<sql_getDatabaseInstanceSettingBackupConfiguration>;

  //
  databaseFlags?: Array<sql_getDatabaseInstanceSettingDatabaseFlag>;

  // Enables auto-resizing of the storage size. Defaults to true.
  diskAutoresize?: boolean;

  // Used to make sure changes to the settings block are atomic.
  version?: number;

  // This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.
  activationPolicy?: string;

  //
  activeDirectoryConfigs?: Array<sql_getDatabaseInstanceSettingActiveDirectoryConfig>;

  // The name of server instance collation.
  collation?: string;

  //
  ipConfigurations?: Array<sql_getDatabaseInstanceSettingIpConfiguration>;

  //
  passwordValidationPolicies?: Array<sql_getDatabaseInstanceSettingPasswordValidationPolicy>;

  // The machine type to use. See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.
  tier?: string;

  /*
The availability type of the Cloud SQL instance, high availability
(REGIONAL) or single zone (ZONAL). For all instances, ensure that
settings.backup_configuration.enabled is set to true.
For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.
For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled
is set to true. Defaults to ZONAL.
*/
  availabilityType?: string;

  // Data cache configurations.
  dataCacheConfigs?: Array<sql_getDatabaseInstanceSettingDataCacheConfig>;

  //
  denyMaintenancePeriods?: Array<sql_getDatabaseInstanceSettingDenyMaintenancePeriod>;

  // Configuration of Query Insights.
  insightsConfigs?: Array<sql_getDatabaseInstanceSettingInsightsConfig>;

  // Pricing plan for this instance, can only be PER_USE.
  pricingPlan?: string;

  // A set of key/value user label pairs to assign to the instance.
  userLabels?: Map<string, string>;

  //
  advancedMachineFeatures?: Array<sql_getDatabaseInstanceSettingAdvancedMachineFeature>;

  // The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.
  diskType?: string;

  // The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.
  edition?: string;

  //
  locationPreferences?: Array<sql_getDatabaseInstanceSettingLocationPreference>;

  // Specifies if connections must use Cloud SQL connectors.
  connectorEnforcement?: string;

  //
  sqlServerAuditConfigs?: Array<sql_getDatabaseInstanceSettingSqlServerAuditConfig>;

  // The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.
  timeZone?: string;

  // Configuration to protect against accidental instance deletion.
  deletionProtectionEnabled?: boolean;

  // The maximum size, in GB, to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  diskAutoresizeLimit?: number;

  // The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.
  diskSize?: number;

  // Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.
  maintenanceWindows?: Array<sql_getDatabaseInstanceSettingMaintenanceWindow>;
}

export function sql_getDatabaseInstanceSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "denyMaintenancePeriods",
      "",
      sql_getDatabaseInstanceSettingDenyMaintenancePeriod_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "locationPreferences",
      "",
      sql_getDatabaseInstanceSettingLocationPreference_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "deletionProtectionEnabled",
      "Configuration to protect against accidental instance deletion.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskSize",
      "The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "databaseFlags",
      "",
      sql_getDatabaseInstanceSettingDatabaseFlag_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "activationPolicy",
      "This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tier",
      "The machine type to use. See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "passwordValidationPolicies",
      "",
      sql_getDatabaseInstanceSettingPasswordValidationPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "userLabels",
      "A set of key/value user label pairs to assign to the instance.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "collation",
      "The name of server instance collation.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "edition",
      "The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeZone",
      "The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "activeDirectoryConfigs",
      "",
      sql_getDatabaseInstanceSettingActiveDirectoryConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskType",
      "The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "maintenanceWindows",
      "Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.",
      sql_getDatabaseInstanceSettingMaintenanceWindow_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "insightsConfigs",
      "Configuration of Query Insights.",
      sql_getDatabaseInstanceSettingInsightsConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "version",
      "Used to make sure changes to the settings block are atomic.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "advancedMachineFeatures",
      "",
      sql_getDatabaseInstanceSettingAdvancedMachineFeature_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pricingPlan",
      "Pricing plan for this instance, can only be PER_USE.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectorEnforcement",
      "Specifies if connections must use Cloud SQL connectors.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sqlServerAuditConfigs",
      "",
      sql_getDatabaseInstanceSettingSqlServerAuditConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskAutoresizeLimit",
      "The maximum size, in GB, to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "backupConfigurations",
      "",
      sql_getDatabaseInstanceSettingBackupConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "diskAutoresize",
      "Enables auto-resizing of the storage size. Defaults to true.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "availabilityType",
      "The availability type of the Cloud SQL instance, high availability\n(REGIONAL) or single zone (ZONAL). For all instances, ensure that\nsettings.backup_configuration.enabled is set to true.\nFor MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.\nFor Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled\nis set to true. Defaults to ZONAL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipConfigurations",
      "",
      sql_getDatabaseInstanceSettingIpConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dataCacheConfigs",
      "Data cache configurations.",
      sql_getDatabaseInstanceSettingDataCacheConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
