import { getDatabaseInstanceSettingDataCacheConfig } from "./getDatabaseInstanceSettingDataCacheConfig";
import { getDatabaseInstanceSettingLocationPreference } from "./getDatabaseInstanceSettingLocationPreference";
import { getDatabaseInstanceSettingDatabaseFlag } from "./getDatabaseInstanceSettingDatabaseFlag";
import { getDatabaseInstanceSettingAdvancedMachineFeature } from "./getDatabaseInstanceSettingAdvancedMachineFeature";
import { getDatabaseInstanceSettingActiveDirectoryConfig } from "./getDatabaseInstanceSettingActiveDirectoryConfig";
import { getDatabaseInstanceSettingMaintenanceWindow } from "./getDatabaseInstanceSettingMaintenanceWindow";
import { getDatabaseInstanceSettingDenyMaintenancePeriod } from "./getDatabaseInstanceSettingDenyMaintenancePeriod";
import { getDatabaseInstanceSettingBackupConfiguration } from "./getDatabaseInstanceSettingBackupConfiguration";
import { getDatabaseInstanceSettingPasswordValidationPolicy } from "./getDatabaseInstanceSettingPasswordValidationPolicy";
import { getDatabaseInstanceSettingInsightsConfig } from "./getDatabaseInstanceSettingInsightsConfig";
import { getDatabaseInstanceSettingIpConfiguration } from "./getDatabaseInstanceSettingIpConfiguration";
import { getDatabaseInstanceSettingSqlServerAuditConfig } from "./getDatabaseInstanceSettingSqlServerAuditConfig";

export interface getDatabaseInstanceSetting {
  // Enables auto-resizing of the storage size. Defaults to true.
  DiskAutoresize?: boolean;

  //
  DatabaseFlags?: Array<getDatabaseInstanceSettingDatabaseFlag>;

  // Configuration of Query Insights.
  InsightsConfigs?: Array<getDatabaseInstanceSettingInsightsConfig>;

  //
  IpConfigurations?: Array<getDatabaseInstanceSettingIpConfiguration>;

  // Used to make sure changes to the settings block are atomic.
  Version?: number;

  // The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.
  Edition?: string;

  //
  SqlServerAuditConfigs?: Array<getDatabaseInstanceSettingSqlServerAuditConfig>;

  // A set of key/value user label pairs to assign to the instance.
  UserLabels?: Map<string, string>;

  // Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.
  MaintenanceWindows?: Array<getDatabaseInstanceSettingMaintenanceWindow>;

  // This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.
  ActivationPolicy?: string;

  //
  AdvancedMachineFeatures?: Array<getDatabaseInstanceSettingAdvancedMachineFeature>;

  //
  DenyMaintenancePeriods?: Array<getDatabaseInstanceSettingDenyMaintenancePeriod>;

  // The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.
  DiskSize?: number;

  // The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.
  DiskType?: string;

  //
  ActiveDirectoryConfigs?: Array<getDatabaseInstanceSettingActiveDirectoryConfig>;

  // Specifies if connections must use Cloud SQL connectors.
  ConnectorEnforcement?: string;

  // Data cache configurations.
  DataCacheConfigs?: Array<getDatabaseInstanceSettingDataCacheConfig>;

  /*
The availability type of the Cloud SQL instance, high availability
(REGIONAL) or single zone (ZONAL). For all instances, ensure that
settings.backup_configuration.enabled is set to true.
For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.
For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled
is set to true. Defaults to ZONAL.
*/
  AvailabilityType?: string;

  // Pricing plan for this instance, can only be PER_USE.
  PricingPlan?: string;

  //
  BackupConfigurations?: Array<getDatabaseInstanceSettingBackupConfiguration>;

  // Configuration to protect against accidental instance deletion.
  DeletionProtectionEnabled?: boolean;

  // The maximum size, in GB, to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  DiskAutoresizeLimit?: number;

  // The machine type to use. See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.
  Tier?: string;

  //
  LocationPreferences?: Array<getDatabaseInstanceSettingLocationPreference>;

  // The name of server instance collation.
  Collation?: string;

  //
  PasswordValidationPolicies?: Array<getDatabaseInstanceSettingPasswordValidationPolicy>;

  // The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.
  TimeZone?: string;
}
