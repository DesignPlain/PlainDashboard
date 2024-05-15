import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkebackup_BackupPlanBackupConfigEncryptionKey,
  Gkebackup_BackupPlanBackupConfigEncryptionKey_GetTypes,
} from "./Gkebackup_BackupPlanBackupConfigEncryptionKey";
import {
  Gkebackup_BackupPlanBackupConfigSelectedApplications,
  Gkebackup_BackupPlanBackupConfigSelectedApplications_GetTypes,
} from "./Gkebackup_BackupPlanBackupConfigSelectedApplications";
import {
  Gkebackup_BackupPlanBackupConfigSelectedNamespaces,
  Gkebackup_BackupPlanBackupConfigSelectedNamespaces_GetTypes,
} from "./Gkebackup_BackupPlanBackupConfigSelectedNamespaces";

export interface Gkebackup_BackupPlanBackupConfig {
  // If True, include all namespaced resources.
  AllNamespaces?: boolean;

  /*
This defines a customer managed encryption key that will be used to encrypt the "config"
portion (the Kubernetes resources) of Backups created via this plan.
Structure is documented below.
*/
  EncryptionKey?: Gkebackup_BackupPlanBackupConfigEncryptionKey;

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
  SelectedApplications?: Gkebackup_BackupPlanBackupConfigSelectedApplications;

  /*
If set, include just the resources in the listed namespaces.
Structure is documented below.
*/
  SelectedNamespaces?: Gkebackup_BackupPlanBackupConfigSelectedNamespaces;
}

export function Gkebackup_BackupPlanBackupConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AllNamespaces",
      "If True, include all namespaced resources.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EncryptionKey",
      'This defines a customer managed encryption key that will be used to encrypt the "config"\nportion (the Kubernetes resources) of Backups created via this plan.\nStructure is documented below.',
      Gkebackup_BackupPlanBackupConfigEncryptionKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IncludeSecrets",
      "This flag specifies whether Kubernetes Secret resources should be included\nwhen they fall into the scope of Backups.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IncludeVolumeData",
      "This flag specifies whether volume data should be backed up when PVCs are\nincluded in the scope of a Backup.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SelectedApplications",
      "A list of namespaced Kubernetes Resources.\nStructure is documented below.",
      Gkebackup_BackupPlanBackupConfigSelectedApplications_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SelectedNamespaces",
      "If set, include just the resources in the listed namespaces.\nStructure is documented below.",
      Gkebackup_BackupPlanBackupConfigSelectedNamespaces_GetTypes(),
      false,
      false,
    ),
  ];
}
