import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject,
  osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject_GetTypes,
} from "./osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject";

export interface osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfig {
  /*
A Cloud Storage object containing the executable.
Structure is documented below.
*/
  gcsObject?: osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject;

  /*
The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines.
Possible values are: `SHELL`, `POWERSHELL`.
*/
  interpreter?: string;

  // An absolute path to the executable on the VM.
  localPath?: string;

  // Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  allowedSuccessCodes?: Array<number>;
}

export function osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedSuccessCodes",
      "Defaults to [0]. A list of possible return values that the execution can return to indicate a success.",
      InputType_Number_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcsObject",
      "A Cloud Storage object containing the executable.\nStructure is documented below.",
      osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "interpreter",
      "The script interpreter to use to run the script. If no interpreter is specified the script will\nbe executed directly, which will likely only succeed for scripts with shebang lines.\nPossible values are: `SHELL`, `POWERSHELL`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "localPath",
      "An absolute path to the executable on the VM.",
      [],
      false,
      true,
    ),
  ];
}
