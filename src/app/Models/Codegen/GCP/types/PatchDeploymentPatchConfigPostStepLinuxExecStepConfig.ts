import { PatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject } from "./PatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject";

export interface PatchDeploymentPatchConfigPostStepLinuxExecStepConfig {
  // Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  AllowedSuccessCodes?: Array<number>;

  /*
A Cloud Storage object containing the executable.
Structure is documented below.
*/
  GcsObject?: PatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject;

  /*
The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines.
Possible values are: `SHELL`, `POWERSHELL`.
*/
  Interpreter?: string;

  // An absolute path to the executable on the VM.
  LocalPath?: string;
}
