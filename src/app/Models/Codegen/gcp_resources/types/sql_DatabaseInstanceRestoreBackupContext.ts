import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sql_DatabaseInstanceRestoreBackupContext {
  // The ID of the backup run to restore from.
  backupRunId?: number;

  /*
The ID of the instance that the backup was taken from. If left empty,
this instance's ID will be used.
*/
  instanceId?: string;

  // The full project ID of the source instance.`
  project?: string;
}

export function sql_DatabaseInstanceRestoreBackupContext_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceId",
      "The ID of the instance that the backup was taken from. If left empty,\nthis instance's ID will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "project",
      "The full project ID of the source instance.`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "backupRunId",
      "The ID of the backup run to restore from.",
      [],
      true,
      false,
    ),
  ];
}
