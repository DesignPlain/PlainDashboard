import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Netapp_VolumeRestoreParameters {
  /*
Full name of the snapshot to use for creating this volume.
`source_snapshot` and `source_backup` cannot be used simultaneously.
Format: `projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}`.
*/
  SourceBackup?: string;

  /*
Full name of the snapshot to use for creating this volume.
`source_snapshot` and `source_backup` cannot be used simultaneously.
Format: `projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}`.
*/
  SourceSnapshot?: string;
}

export function Netapp_VolumeRestoreParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SourceBackup",
      "Full name of the snapshot to use for creating this volume.\n`source_snapshot` and `source_backup` cannot be used simultaneously.\nFormat: `projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceSnapshot",
      "Full name of the snapshot to use for creating this volume.\n`source_snapshot` and `source_backup` cannot be used simultaneously.\nFormat: `projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}`.",
      [],
      false,
      true,
    ),
  ];
}
