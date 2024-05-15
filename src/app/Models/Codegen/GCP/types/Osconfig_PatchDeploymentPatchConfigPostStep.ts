import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfig,
  Osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfig_GetTypes,
} from "./Osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfig";
import {
  Osconfig_PatchDeploymentPatchConfigPostStepWindowsExecStepConfig,
  Osconfig_PatchDeploymentPatchConfigPostStepWindowsExecStepConfig_GetTypes,
} from "./Osconfig_PatchDeploymentPatchConfigPostStepWindowsExecStepConfig";

export interface Osconfig_PatchDeploymentPatchConfigPostStep {
  /*
The ExecStepConfig for all Linux VMs targeted by the PatchJob.
Structure is documented below.
*/
  LinuxExecStepConfig?: Osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfig;

  /*
The ExecStepConfig for all Windows VMs targeted by the PatchJob.
Structure is documented below.
*/
  WindowsExecStepConfig?: Osconfig_PatchDeploymentPatchConfigPostStepWindowsExecStepConfig;
}

export function Osconfig_PatchDeploymentPatchConfigPostStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "LinuxExecStepConfig",
      "The ExecStepConfig for all Linux VMs targeted by the PatchJob.\nStructure is documented below.",
      Osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WindowsExecStepConfig",
      "The ExecStepConfig for all Windows VMs targeted by the PatchJob.\nStructure is documented below.",
      Osconfig_PatchDeploymentPatchConfigPostStepWindowsExecStepConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
