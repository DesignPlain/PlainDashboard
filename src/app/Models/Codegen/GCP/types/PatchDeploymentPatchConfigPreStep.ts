import { PatchDeploymentPatchConfigPreStepLinuxExecStepConfig } from "./PatchDeploymentPatchConfigPreStepLinuxExecStepConfig";
import { PatchDeploymentPatchConfigPreStepWindowsExecStepConfig } from "./PatchDeploymentPatchConfigPreStepWindowsExecStepConfig";

export interface PatchDeploymentPatchConfigPreStep {
  /*
The ExecStepConfig for all Linux VMs targeted by the PatchJob.
Structure is documented below.
*/
  LinuxExecStepConfig?: PatchDeploymentPatchConfigPreStepLinuxExecStepConfig;

  /*
The ExecStepConfig for all Windows VMs targeted by the PatchJob.
Structure is documented below.
*/
  WindowsExecStepConfig?: PatchDeploymentPatchConfigPreStepWindowsExecStepConfig;
}
