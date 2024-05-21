import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_getDatabaseInstancesInstanceRestoreBackupContext {
  // The ID of the backup run to restore from.
  backupRunId?: number;

  // The ID of the instance that the backup was taken from.
  instanceId?: string;

  // The ID of the project in which the resources belong. If it is not provided, the provider project is used.
  project?: string;
}

export function sql_getDatabaseInstancesInstanceRestoreBackupContext_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "backupRunId",
      "The ID of the backup run to restore from.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceId",
      "The ID of the instance that the backup was taken from.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "project",
      "The ID of the project in which the resources belong. If it is not provided, the provider project is used.",
      [],
      true,
      false,
    ),
  ];
}
