import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstanceRestoreBackupContext {
  // The ID of the project in which the resource belongs.
  Project?: string;

  // The ID of the backup run to restore from.
  BackupRunId?: number;

  // The ID of the instance that the backup was taken from.
  InstanceId?: string;
}

export function Sql_getDatabaseInstanceRestoreBackupContext_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "InstanceId",
      "The ID of the instance that the backup was taken from.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Project",
      "The ID of the project in which the resource belongs.",
      [],
      true,
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
