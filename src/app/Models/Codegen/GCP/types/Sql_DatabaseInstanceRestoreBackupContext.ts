import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_DatabaseInstanceRestoreBackupContext {
  /*
The ID of the instance that the backup was taken from. If left empty,
this instance's ID will be used.
*/
  InstanceId?: string;

  // The full project ID of the source instance.`
  Project?: string;

  // The ID of the backup run to restore from.
  BackupRunId?: number;
}

export function Sql_DatabaseInstanceRestoreBackupContext_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "InstanceId",
      "The ID of the instance that the backup was taken from. If left empty,\nthis instance's ID will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Project",
      "The full project ID of the source instance.`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "BackupRunId",
      "The ID of the backup run to restore from.",
      [],
      true,
      false,
    ),
  ];
}
