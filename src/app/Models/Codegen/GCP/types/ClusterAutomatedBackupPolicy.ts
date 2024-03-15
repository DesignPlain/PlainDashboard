import { ClusterAutomatedBackupPolicyQuantityBasedRetention } from "./ClusterAutomatedBackupPolicyQuantityBasedRetention";
import { ClusterAutomatedBackupPolicyTimeBasedRetention } from "./ClusterAutomatedBackupPolicyTimeBasedRetention";
import { ClusterAutomatedBackupPolicyWeeklySchedule } from "./ClusterAutomatedBackupPolicyWeeklySchedule";
import { ClusterAutomatedBackupPolicyEncryptionConfig } from "./ClusterAutomatedBackupPolicyEncryptionConfig";

export interface ClusterAutomatedBackupPolicy {
  // The location where the backup will be stored. Currently, the only supported option is to store the backup in the same region as the cluster.
  Location?: string;

  /*
Quantity-based Backup retention policy to retain recent backups. Conflicts with 'time_based_retention', both can't be set together.
Structure is documented below.
*/
  QuantityBasedRetention?: ClusterAutomatedBackupPolicyQuantityBasedRetention;

  /*
Time-based Backup retention policy. Conflicts with 'quantity_based_retention', both can't be set together.
Structure is documented below.
*/
  TimeBasedRetention?: ClusterAutomatedBackupPolicyTimeBasedRetention;

  /*
Weekly schedule for the Backup.
Structure is documented below.
*/
  WeeklySchedule?: ClusterAutomatedBackupPolicyWeeklySchedule;

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
  EncryptionConfig?: ClusterAutomatedBackupPolicyEncryptionConfig;

  // Labels to apply to backups created using this configuration.
  Labels?: Map<string, string>;
}
