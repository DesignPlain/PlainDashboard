import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Alloydb_ClusterRestoreBackupSource {
  // The name of the backup that this cluster is restored from.
  BackupName?: string;
}

export function Alloydb_ClusterRestoreBackupSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "BackupName",
      "The name of the backup that this cluster is restored from.",
      [],
      true,
      true,
    ),
  ];
}
