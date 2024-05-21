import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  workstations_WorkstationConfigPersistentDirectoryGcePd,
  workstations_WorkstationConfigPersistentDirectoryGcePd_GetTypes,
} from "./workstations_WorkstationConfigPersistentDirectoryGcePd";

export interface workstations_WorkstationConfigPersistentDirectory {
  /*
A directory to persist across workstation sessions, backed by a Compute Engine regional persistent disk. Can only be updated if not empty during creation.
Structure is documented below.
*/
  gcePd?: workstations_WorkstationConfigPersistentDirectoryGcePd;

  // Location of this directory in the running workstation.
  mountPath?: string;
}

export function workstations_WorkstationConfigPersistentDirectory_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "gcePd",
      "A directory to persist across workstation sessions, backed by a Compute Engine regional persistent disk. Can only be updated if not empty during creation.\nStructure is documented below.",
      workstations_WorkstationConfigPersistentDirectoryGcePd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mountPath",
      "Location of this directory in the running workstation.",
      [],
      false,
      true,
    ),
  ];
}
