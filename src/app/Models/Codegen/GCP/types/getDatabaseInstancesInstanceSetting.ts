import { getDatabaseInstancesInstanceSettingIpConfiguration } from "./getDatabaseInstancesInstanceSettingIpConfiguration";
import { getDatabaseInstancesInstanceSettingDenyMaintenancePeriod } from "./getDatabaseInstancesInstanceSettingDenyMaintenancePeriod";
import { getDatabaseInstancesInstanceSettingDataCacheConfig } from "./getDatabaseInstancesInstanceSettingDataCacheConfig";
import { getDatabaseInstancesInstanceSettingMaintenanceWindow } from "./getDatabaseInstancesInstanceSettingMaintenanceWindow";
import { getDatabaseInstancesInstanceSettingPasswordValidationPolicy } from "./getDatabaseInstancesInstanceSettingPasswordValidationPolicy";
import { getDatabaseInstancesInstanceSettingDatabaseFlag } from "./getDatabaseInstancesInstanceSettingDatabaseFlag";
import { getDatabaseInstancesInstanceSettingLocationPreference } from "./getDatabaseInstancesInstanceSettingLocationPreference";
import { getDatabaseInstancesInstanceSettingSqlServerAuditConfig } from "./getDatabaseInstancesInstanceSettingSqlServerAuditConfig";
import { getDatabaseInstancesInstanceSettingInsightsConfig } from "./getDatabaseInstancesInstanceSettingInsightsConfig";
import { getDatabaseInstancesInstanceSettingAdvancedMachineFeature } from "./getDatabaseInstancesInstanceSettingAdvancedMachineFeature";
import { getDatabaseInstancesInstanceSettingBackupConfiguration } from "./getDatabaseInstancesInstanceSettingBackupConfiguration";
import { getDatabaseInstancesInstanceSettingActiveDirectoryConfig } from "./getDatabaseInstancesInstanceSettingActiveDirectoryConfig";

export interface getDatabaseInstancesInstanceSetting {
  //
  IpConfigurations?: Array<getDatabaseInstancesInstanceSettingIpConfiguration>;

  //
  SqlServerAuditConfigs?: Array<getDatabaseInstancesInstanceSettingSqlServerAuditConfig>;

  // The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.
  TimeZone?: string;

  //
  DenyMaintenancePeriods?: Array<getDatabaseInstancesInstanceSettingDenyMaintenancePeriod>;

  // Configuration of Query Insights.
  InsightsConfigs?: Array<getDatabaseInstancesInstanceSettingInsightsConfig>;

  // Used to make sure changes to the settings block are atomic.
  Version?: number;

  //
  AdvancedMachineFeatures?: Array<getDatabaseInstancesInstanceSettingAdvancedMachineFeature>;

  //
  BackupConfigurations?: Array<getDatabaseInstancesInstanceSettingBackupConfiguration>;

  // The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.
  DiskSize?: number;

  // Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.
  MaintenanceWindows?: Array<getDatabaseInstancesInstanceSettingMaintenanceWindow>;

  //
  PasswordValidationPolicies?: Array<getDatabaseInstancesInstanceSettingPasswordValidationPolicy>;

  // Pricing plan for this instance, can only be PER_USE.
  PricingPlan?: string;

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
  DatabaseFlags?: Array<getDatabaseInstancesInstanceSettingDatabaseFlag>;

  // Configuration to protect against accidental instance deletion.
  DeletionProtectionEnabled?: boolean;

  // The maximum size, in GB, to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  DiskAutoresizeLimit?: number;

  // To filter out the Cloud SQL instances based on the tier(or machine type) of the database instances.
  Tier?: string;

  // This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.
  ActivationPolicy?: string;

  // Enables auto-resizing of the storage size. Defaults to true.
  DiskAutoresize?: boolean;

  //
  LocationPreferences?: Array<getDatabaseInstancesInstanceSettingLocationPreference>;

  //
  ActiveDirectoryConfigs?: Array<getDatabaseInstancesInstanceSettingActiveDirectoryConfig>;

  // The name of server instance collation.
  Collation?: string;

  // Specifies if connections must use Cloud SQL connectors.
  ConnectorEnforcement?: string;

  // The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.
  DiskType?: string;

  // Data cache configurations.
  DataCacheConfigs?: Array<getDatabaseInstancesInstanceSettingDataCacheConfig>;

  // The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.
  Edition?: string;

  // A set of key/value user label pairs to assign to the instance.
  UserLabels?: Map<string, string>;
}
