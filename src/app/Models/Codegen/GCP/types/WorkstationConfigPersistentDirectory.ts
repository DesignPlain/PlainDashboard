import { WorkstationConfigPersistentDirectoryGcePd } from "./WorkstationConfigPersistentDirectoryGcePd";

export interface WorkstationConfigPersistentDirectory {
  /*
A directory to persist across workstation sessions, backed by a Compute Engine regional persistent disk. Can only be updated if not empty during creation.
Structure is documented below.
*/
  GcePd?: WorkstationConfigPersistentDirectoryGcePd;

  // Location of this directory in the running workstation.
  MountPath?: string;
}
