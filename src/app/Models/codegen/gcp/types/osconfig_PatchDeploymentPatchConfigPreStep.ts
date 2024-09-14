import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  osconfig_PatchDeploymentPatchConfigPreStepLinuxExecStepConfig,
  osconfig_PatchDeploymentPatchConfigPreStepLinuxExecStepConfig_GetTypes,
} from "./osconfig_PatchDeploymentPatchConfigPreStepLinuxExecStepConfig";
import {
  osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfig,
  osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfig_GetTypes,
} from "./osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfig";

export interface osconfig_PatchDeploymentPatchConfigPreStep {
  /*
The ExecStepConfig for all Linux VMs targeted by the PatchJob.
Structure is documented below.
*/
  linuxExecStepConfig?: osconfig_PatchDeploymentPatchConfigPreStepLinuxExecStepConfig;

  /*
The ExecStepConfig for all Windows VMs targeted by the PatchJob.
Structure is documented below.
*/
  windowsExecStepConfig?: osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfig;
}

export function osconfig_PatchDeploymentPatchConfigPreStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "linuxExecStepConfig",
      "The ExecStepConfig for all Linux VMs targeted by the PatchJob.\nStructure is documented below.",
      () =>
        osconfig_PatchDeploymentPatchConfigPreStepLinuxExecStepConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "windowsExecStepConfig",
      "The ExecStepConfig for all Windows VMs targeted by the PatchJob.\nStructure is documented below.",
      () =>
        osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
