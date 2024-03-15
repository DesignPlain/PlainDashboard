import { DatabaseInstanceSettingsDatabaseFlag } from "./DatabaseInstanceSettingsDatabaseFlag";
import { DatabaseInstanceSettingsPasswordValidationPolicy } from "./DatabaseInstanceSettingsPasswordValidationPolicy";
import { DatabaseInstanceSettingsBackupConfiguration } from "./DatabaseInstanceSettingsBackupConfiguration";
import { DatabaseInstanceSettingsMaintenanceWindow } from "./DatabaseInstanceSettingsMaintenanceWindow";
import { DatabaseInstanceSettingsActiveDirectoryConfig } from "./DatabaseInstanceSettingsActiveDirectoryConfig";
import { DatabaseInstanceSettingsInsightsConfig } from "./DatabaseInstanceSettingsInsightsConfig";
import { DatabaseInstanceSettingsDataCacheConfig } from "./DatabaseInstanceSettingsDataCacheConfig";
import { DatabaseInstanceSettingsSqlServerAuditConfig } from "./DatabaseInstanceSettingsSqlServerAuditConfig";
import { DatabaseInstanceSettingsLocationPreference } from "./DatabaseInstanceSettingsLocationPreference";
import { DatabaseInstanceSettingsAdvancedMachineFeatures } from "./DatabaseInstanceSettingsAdvancedMachineFeatures";
import { DatabaseInstanceSettingsIpConfiguration } from "./DatabaseInstanceSettingsIpConfiguration";
import { DatabaseInstanceSettingsDenyMaintenancePeriod } from "./DatabaseInstanceSettingsDenyMaintenancePeriod";

export interface DatabaseInstanceSettings {
  // The name of server instance collation.
  Collation?: string;

  //
  LocationPreference?: DatabaseInstanceSettingsLocationPreference;

  // The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.
  TimeZone?: string;

  // A set of key/value user label pairs to assign to the instance.
  UserLabels?: Map<string, string>;

  //
  AdvancedMachineFeatures?: DatabaseInstanceSettingsAdvancedMachineFeatures;

  /*
The availability type of the Cloud SQL
instance, high availability (`REGIONAL`) or single zone (`ZONAL`).' For all instances, ensure that
`settings.backup_configuration.enabled` is set to `true`.
For MySQL instances, ensure that `settings.backup_configuration.binary_log_enabled` is set to `true`.
For Postgres and SQL Server instances, ensure that `settings.backup_configuration.point_in_time_recovery_enabled`
is set to `true`. Defaults to `ZONAL`.
*/
  AvailabilityType?: string;

  //
  DatabaseFlags?: Array<DatabaseInstanceSettingsDatabaseFlag>;

  // Enables auto-resizing of the storage size. Defaults to `true`.
  DiskAutoresize?: boolean;

  //
  IpConfiguration?: DatabaseInstanceSettingsIpConfiguration;

  // Configuration to protect against accidental instance deletion.
  DeletionProtectionEnabled?: boolean;

  // The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  DiskAutoresizeLimit?: number;

  // Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.
  MaintenanceWindow?: DatabaseInstanceSettingsMaintenanceWindow;

  // Pricing plan for this instance, can only be `PER_USE`.
  PricingPlan?: string;

  /*
The machine type to use. See [tiers](https://cloud.google.com/sql/docs/admin-api/v1beta4/tiers)
for more details and supported versions. Postgres supports only shared-core machine types,
and custom machine types such as `db-custom-2-13312`. See the [Custom Machine Type Documentation](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) to learn about specifying custom machine types.
*/
  Tier?: string;

  // Used to make sure changes to the settings block are atomic.
  Version?: number;

  //
  ActiveDirectoryConfig?: DatabaseInstanceSettingsActiveDirectoryConfig;

  // Configuration of Query Insights.
  InsightsConfig?: DatabaseInstanceSettingsInsightsConfig;

  // Specifies if connections must use Cloud SQL connectors.
  ConnectorEnforcement?: string;

  // Data cache configurations.
  DataCacheConfig?: DatabaseInstanceSettingsDataCacheConfig;

  //
  PasswordValidationPolicy?: DatabaseInstanceSettingsPasswordValidationPolicy;

  //
  BackupConfiguration?: DatabaseInstanceSettingsBackupConfiguration;

  // The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.
  DiskSize?: number;

  // The type of data disk: PD_SSD or PD_HDD. Defaults to `PD_SSD`.
  DiskType?: string;

  /*
This specifies when the instance should be
active. Can be either `ALWAYS`, `NEVER` or `ON_DEMAND`.
*/
  ActivationPolicy?: string;

  // The edition of the instance, can be `ENTERPRISE` or `ENTERPRISE_PLUS`.
  Edition?: string;

  //
  SqlServerAuditConfig?: DatabaseInstanceSettingsSqlServerAuditConfig;

  //
  DenyMaintenancePeriod?: DatabaseInstanceSettingsDenyMaintenancePeriod;
}
