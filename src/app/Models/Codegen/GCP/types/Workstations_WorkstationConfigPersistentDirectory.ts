import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Workstations_WorkstationConfigPersistentDirectoryGcePd,
  Workstations_WorkstationConfigPersistentDirectoryGcePd_GetTypes,
} from "./Workstations_WorkstationConfigPersistentDirectoryGcePd";

export interface Workstations_WorkstationConfigPersistentDirectory {
  /*
A directory to persist across workstation sessions, backed by a Compute Engine regional persistent disk. Can only be updated if not empty during creation.
Structure is documented below.
*/
  GcePd?: Workstations_WorkstationConfigPersistentDirectoryGcePd;

  // Location of this directory in the running workstation.
  MountPath?: string;
}

export function Workstations_WorkstationConfigPersistentDirectory_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "GcePd",
      "A directory to persist across workstation sessions, backed by a Compute Engine regional persistent disk. Can only be updated if not empty during creation.\nStructure is documented below.",
      Workstations_WorkstationConfigPersistentDirectoryGcePd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MountPath",
      "Location of this directory in the running workstation.",
      [],
      false,
      true,
    ),
  ];
}
