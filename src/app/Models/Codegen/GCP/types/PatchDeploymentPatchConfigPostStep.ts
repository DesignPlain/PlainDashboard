import { PatchDeploymentPatchConfigPostStepLinuxExecStepConfig } from "./PatchDeploymentPatchConfigPostStepLinuxExecStepConfig";
import { PatchDeploymentPatchConfigPostStepWindowsExecStepConfig } from "./PatchDeploymentPatchConfigPostStepWindowsExecStepConfig";

export interface PatchDeploymentPatchConfigPostStep {
  /*
The ExecStepConfig for all Linux VMs targeted by the PatchJob.
Structure is documented below.
*/
  LinuxExecStepConfig?: PatchDeploymentPatchConfigPostStepLinuxExecStepConfig;

  /*
The ExecStepConfig for all Windows VMs targeted by the PatchJob.
Structure is documented below.
*/
  WindowsExecStepConfig?: PatchDeploymentPatchConfigPostStepWindowsExecStepConfig;
}
