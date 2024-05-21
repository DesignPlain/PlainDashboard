import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkebackup_BackupPlanBackupConfigSelectedApplications,
  gkebackup_BackupPlanBackupConfigSelectedApplications_GetTypes,
} from "./gkebackup_BackupPlanBackupConfigSelectedApplications";
import {
  gkebackup_BackupPlanBackupConfigSelectedNamespaces,
  gkebackup_BackupPlanBackupConfigSelectedNamespaces_GetTypes,
} from "./gkebackup_BackupPlanBackupConfigSelectedNamespaces";
import {
  gkebackup_BackupPlanBackupConfigEncryptionKey,
  gkebackup_BackupPlanBackupConfigEncryptionKey_GetTypes,
} from "./gkebackup_BackupPlanBackupConfigEncryptionKey";

export interface gkebackup_BackupPlanBackupConfig {
  /*
This flag specifies whether Kubernetes Secret resources should be included
when they fall into the scope of Backups.
*/
  includeSecrets?: boolean;

  /*
This flag specifies whether volume data should be backed up when PVCs are
included in the scope of a Backup.
*/
  includeVolumeData?: boolean;

  /*
A list of namespaced Kubernetes Resources.
Structure is documented below.
*/
  selectedApplications?: gkebackup_BackupPlanBackupConfigSelectedApplications;

  /*
If set, include just the resources in the listed namespaces.
Structure is documented below.
*/
  selectedNamespaces?: gkebackup_BackupPlanBackupConfigSelectedNamespaces;

  // If True, include all namespaced resources.
  allNamespaces?: boolean;

  /*
This defines a customer managed encryption key that will be used to encrypt the "config"
portion (the Kubernetes resources) of Backups created via this plan.
Structure is documented below.
*/
  encryptionKey?: gkebackup_BackupPlanBackupConfigEncryptionKey;
}

export function gkebackup_BackupPlanBackupConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "encryptionKey",
      'This defines a customer managed encryption key that will be used to encrypt the "config"\nportion (the Kubernetes resources) of Backups created via this plan.\nStructure is documented below.',
      gkebackup_BackupPlanBackupConfigEncryptionKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeSecrets",
      "This flag specifies whether Kubernetes Secret resources should be included\nwhen they fall into the scope of Backups.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeVolumeData",
      "This flag specifies whether volume data should be backed up when PVCs are\nincluded in the scope of a Backup.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "selectedApplications",
      "A list of namespaced Kubernetes Resources.\nStructure is documented below.",
      gkebackup_BackupPlanBackupConfigSelectedApplications_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "selectedNamespaces",
      "If set, include just the resources in the listed namespaces.\nStructure is documented below.",
      gkebackup_BackupPlanBackupConfigSelectedNamespaces_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allNamespaces",
      "If True, include all namespaced resources.",
      [],
      false,
      false,
    ),
  ];
}
