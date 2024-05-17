import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject,
  Osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject_GetTypes,
} from "./Osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject";

export interface Osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfig {
  // Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  AllowedSuccessCodes?: Array<number>;

  /*
A Cloud Storage object containing the executable.
Structure is documented below.
*/
  GcsObject?: Osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject;

  /*
The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines.
Possible values are: `SHELL`, `POWERSHELL`.
*/
  Interpreter?: string;

  // An absolute path to the executable on the VM.
  LocalPath?: string;
}

export function Osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowedSuccessCodes",
      "Defaults to [0]. A list of possible return values that the execution can return to indicate a success.",
      InputType_Number_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GcsObject",
      "A Cloud Storage object containing the executable.\nStructure is documented below.",
      Osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Interpreter",
      "The script interpreter to use to run the script. If no interpreter is specified the script will\nbe executed directly, which will likely only succeed for scripts with shebang lines.\nPossible values are: `SHELL`, `POWERSHELL`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "LocalPath",
      "An absolute path to the executable on the VM.",
      [],
      false,
      true,
    ),
  ];
}
