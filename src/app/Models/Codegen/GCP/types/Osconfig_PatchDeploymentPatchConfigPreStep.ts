import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfig,
  Osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfig_GetTypes,
} from "./Osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfig";
import {
  Osconfig_PatchDeploymentPatchConfigPreStepLinuxExecStepConfig,
  Osconfig_PatchDeploymentPatchConfigPreStepLinuxExecStepConfig_GetTypes,
} from "./Osconfig_PatchDeploymentPatchConfigPreStepLinuxExecStepConfig";

export interface Osconfig_PatchDeploymentPatchConfigPreStep {
  /*
The ExecStepConfig for all Windows VMs targeted by the PatchJob.
Structure is documented below.
*/
  WindowsExecStepConfig?: Osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfig;

  /*
The ExecStepConfig for all Linux VMs targeted by the PatchJob.
Structure is documented below.
*/
  LinuxExecStepConfig?: Osconfig_PatchDeploymentPatchConfigPreStepLinuxExecStepConfig;
}

export function Osconfig_PatchDeploymentPatchConfigPreStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "WindowsExecStepConfig",
      "The ExecStepConfig for all Windows VMs targeted by the PatchJob.\nStructure is documented below.",
      Osconfig_PatchDeploymentPatchConfigPreStepWindowsExecStepConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LinuxExecStepConfig",
      "The ExecStepConfig for all Linux VMs targeted by the PatchJob.\nStructure is documented below.",
      Osconfig_PatchDeploymentPatchConfigPreStepLinuxExecStepConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
