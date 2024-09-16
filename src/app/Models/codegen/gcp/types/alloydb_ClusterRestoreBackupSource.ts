import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface alloydb_ClusterRestoreBackupSource {
  // The name of the backup that this cluster is restored from.
  backupName?: string;
}

export function alloydb_ClusterRestoreBackupSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'backupName',
      'The name of the backup that this cluster is restored from.',
      () => [],
      true,
      true,
    ),
  ];
}
