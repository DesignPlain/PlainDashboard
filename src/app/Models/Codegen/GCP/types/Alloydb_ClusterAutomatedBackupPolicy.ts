import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Alloydb_ClusterAutomatedBackupPolicyQuantityBasedRetention,
  Alloydb_ClusterAutomatedBackupPolicyQuantityBasedRetention_GetTypes,
} from "./Alloydb_ClusterAutomatedBackupPolicyQuantityBasedRetention";
import {
  Alloydb_ClusterAutomatedBackupPolicyTimeBasedRetention,
  Alloydb_ClusterAutomatedBackupPolicyTimeBasedRetention_GetTypes,
} from "./Alloydb_ClusterAutomatedBackupPolicyTimeBasedRetention";
import {
  Alloydb_ClusterAutomatedBackupPolicyWeeklySchedule,
  Alloydb_ClusterAutomatedBackupPolicyWeeklySchedule_GetTypes,
} from "./Alloydb_ClusterAutomatedBackupPolicyWeeklySchedule";
import {
  Alloydb_ClusterAutomatedBackupPolicyEncryptionConfig,
  Alloydb_ClusterAutomatedBackupPolicyEncryptionConfig_GetTypes,
} from "./Alloydb_ClusterAutomatedBackupPolicyEncryptionConfig";

export interface Alloydb_ClusterAutomatedBackupPolicy {
  /*
The length of the time window during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed.
The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  BackupWindow?: string;

  // Whether automated backups are enabled.
  Enabled?: boolean;

  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  EncryptionConfig?: Alloydb_ClusterAutomatedBackupPolicyEncryptionConfig;

  // Labels to apply to backups created using this configuration.
  Labels?: Map<string, string>;

  // The location where the backup will be stored. Currently, the only supported option is to store the backup in the same region as the cluster.
  Location?: string;

  /*
Quantity-based Backup retention policy to retain recent backups. Conflicts with 'time_based_retention', both can't be set together.
Structure is documented below.
*/
  QuantityBasedRetention?: Alloydb_ClusterAutomatedBackupPolicyQuantityBasedRetention;

  /*
Time-based Backup retention policy. Conflicts with 'quantity_based_retention', both can't be set together.
Structure is documented below.
*/
  TimeBasedRetention?: Alloydb_ClusterAutomatedBackupPolicyTimeBasedRetention;

  /*
Weekly schedule for the Backup.
Structure is documented below.
*/
  WeeklySchedule?: Alloydb_ClusterAutomatedBackupPolicyWeeklySchedule;
}

export function Alloydb_ClusterAutomatedBackupPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "BackupWindow",
      "The length of the time window during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed.\nThe backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether automated backups are enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EncryptionConfig",
      "EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).\nStructure is documented below.",
      Alloydb_ClusterAutomatedBackupPolicyEncryptionConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "Labels to apply to backups created using this configuration.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      "The location where the backup will be stored. Currently, the only supported option is to store the backup in the same region as the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "QuantityBasedRetention",
      "Quantity-based Backup retention policy to retain recent backups. Conflicts with 'time_based_retention', both can't be set together.\nStructure is documented below.",
      Alloydb_ClusterAutomatedBackupPolicyQuantityBasedRetention_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TimeBasedRetention",
      "Time-based Backup retention policy. Conflicts with 'quantity_based_retention', both can't be set together.\nStructure is documented below.",
      Alloydb_ClusterAutomatedBackupPolicyTimeBasedRetention_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WeeklySchedule",
      "Weekly schedule for the Backup.\nStructure is documented below.",
      Alloydb_ClusterAutomatedBackupPolicyWeeklySchedule_GetTypes(),
      false,
      false,
    ),
  ];
}
