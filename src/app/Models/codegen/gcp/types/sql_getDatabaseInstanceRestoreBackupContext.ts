import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sql_getDatabaseInstanceRestoreBackupContext {
  // The ID of the instance that the backup was taken from.
  instanceId?: string;

  // The ID of the project in which the resource belongs.
  project?: string;

  // The ID of the backup run to restore from.
  backupRunId?: number;
}

export function sql_getDatabaseInstanceRestoreBackupContext_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'instanceId',
      'The ID of the instance that the backup was taken from.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'project',
      'The ID of the project in which the resource belongs.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'backupRunId',
      'The ID of the backup run to restore from.',
      () => [],
      true,
      false,
    ),
  ];
}
