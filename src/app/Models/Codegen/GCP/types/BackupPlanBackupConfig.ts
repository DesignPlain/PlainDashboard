import { BackupPlanBackupConfigSelectedApplications } from "./BackupPlanBackupConfigSelectedApplications";
import { BackupPlanBackupConfigSelectedNamespaces } from "./BackupPlanBackupConfigSelectedNamespaces";
import { BackupPlanBackupConfigEncryptionKey } from "./BackupPlanBackupConfigEncryptionKey";

export interface BackupPlanBackupConfig {
  /*
This flag specifies whether Kubernetes Secret resources should be included
when they fall into the scope of Backups.
*/
  IncludeSecrets?: boolean;

  /*
This flag specifies whether volume data should be backed up when PVCs are
included in the scope of a Backup.
*/
  IncludeVolumeData?: boolean;

  /*
A list of namespaced Kubernetes Resources.
Structure is documented below.
*/
  SelectedApplications?: BackupPlanBackupConfigSelectedApplications;

  /*
If set, include just the resources in the listed namespaces.
Structure is documented below.
*/
  SelectedNamespaces?: BackupPlanBackupConfigSelectedNamespaces;

  // If True, include all namespaced resources.
  AllNamespaces?: boolean;

  /*
This defines a customer managed encryption key that will be used to encrypt the "config"
portion (the Kubernetes resources) of Backups created via this plan.
Structure is documented below.
*/
  EncryptionKey?: BackupPlanBackupConfigEncryptionKey;
}
