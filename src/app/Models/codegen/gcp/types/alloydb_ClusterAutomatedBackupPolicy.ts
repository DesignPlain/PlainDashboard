import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  alloydb_ClusterAutomatedBackupPolicyWeeklySchedule,
  alloydb_ClusterAutomatedBackupPolicyWeeklySchedule_GetTypes,
} from './alloydb_ClusterAutomatedBackupPolicyWeeklySchedule';
import {
  alloydb_ClusterAutomatedBackupPolicyEncryptionConfig,
  alloydb_ClusterAutomatedBackupPolicyEncryptionConfig_GetTypes,
} from './alloydb_ClusterAutomatedBackupPolicyEncryptionConfig';
import {
  alloydb_ClusterAutomatedBackupPolicyQuantityBasedRetention,
  alloydb_ClusterAutomatedBackupPolicyQuantityBasedRetention_GetTypes,
} from './alloydb_ClusterAutomatedBackupPolicyQuantityBasedRetention';
import {
  alloydb_ClusterAutomatedBackupPolicyTimeBasedRetention,
  alloydb_ClusterAutomatedBackupPolicyTimeBasedRetention_GetTypes,
} from './alloydb_ClusterAutomatedBackupPolicyTimeBasedRetention';

export interface alloydb_ClusterAutomatedBackupPolicy {
  /*
Quantity-based Backup retention policy to retain recent backups. Conflicts with 'time_based_retention', both can't be set together.
Structure is documented below.
*/
  quantityBasedRetention?: alloydb_ClusterAutomatedBackupPolicyQuantityBasedRetention;

  /*
Time-based Backup retention policy. Conflicts with 'quantity_based_retention', both can't be set together.
Structure is documented below.
*/
  timeBasedRetention?: alloydb_ClusterAutomatedBackupPolicyTimeBasedRetention;

  /*
Weekly schedule for the Backup.
Structure is documented below.
*/
  weeklySchedule?: alloydb_ClusterAutomatedBackupPolicyWeeklySchedule;

  /*
The length of the time window during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed.
The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  backupWindow?: string;

  // Whether automated backups are enabled.
  enabled?: boolean;

  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  encryptionConfig?: alloydb_ClusterAutomatedBackupPolicyEncryptionConfig;

  // Labels to apply to backups created using this configuration.
  labels?: Map<string, string>;

  // The location where the backup will be stored. Currently, the only supported option is to store the backup in the same region as the cluster.
  location?: string;
}

export function alloydb_ClusterAutomatedBackupPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'labels',
      'Labels to apply to backups created using this configuration.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'location',
      'The location where the backup will be stored. Currently, the only supported option is to store the backup in the same region as the cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'quantityBasedRetention',
      "Quantity-based Backup retention policy to retain recent backups. Conflicts with 'time_based_retention', both can't be set together.\nStructure is documented below.",
      () =>
        alloydb_ClusterAutomatedBackupPolicyQuantityBasedRetention_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'timeBasedRetention',
      "Time-based Backup retention policy. Conflicts with 'quantity_based_retention', both can't be set together.\nStructure is documented below.",
      () => alloydb_ClusterAutomatedBackupPolicyTimeBasedRetention_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'weeklySchedule',
      'Weekly schedule for the Backup.\nStructure is documented below.',
      () => alloydb_ClusterAutomatedBackupPolicyWeeklySchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'backupWindow',
      'The length of the time window during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed.\nThe backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour.\nA duration in seconds with up to nine fractional digits, terminated by \'s\'. Example: "3.5s".',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether automated backups are enabled.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'encryptionConfig',
      'EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).\nStructure is documented below.',
      () => alloydb_ClusterAutomatedBackupPolicyEncryptionConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
