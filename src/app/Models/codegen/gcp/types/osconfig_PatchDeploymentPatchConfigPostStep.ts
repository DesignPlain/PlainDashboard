import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfig,
  osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfig_GetTypes,
} from './osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfig';
import {
  osconfig_PatchDeploymentPatchConfigPostStepWindowsExecStepConfig,
  osconfig_PatchDeploymentPatchConfigPostStepWindowsExecStepConfig_GetTypes,
} from './osconfig_PatchDeploymentPatchConfigPostStepWindowsExecStepConfig';

export interface osconfig_PatchDeploymentPatchConfigPostStep {
  /*
The ExecStepConfig for all Linux VMs targeted by the PatchJob.
Structure is documented below.
*/
  linuxExecStepConfig?: osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfig;

  /*
The ExecStepConfig for all Windows VMs targeted by the PatchJob.
Structure is documented below.
*/
  windowsExecStepConfig?: osconfig_PatchDeploymentPatchConfigPostStepWindowsExecStepConfig;
}

export function osconfig_PatchDeploymentPatchConfigPostStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'linuxExecStepConfig',
      'The ExecStepConfig for all Linux VMs targeted by the PatchJob.\nStructure is documented below.',
      () =>
        osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'windowsExecStepConfig',
      'The ExecStepConfig for all Windows VMs targeted by the PatchJob.\nStructure is documented below.',
      () =>
        osconfig_PatchDeploymentPatchConfigPostStepWindowsExecStepConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
