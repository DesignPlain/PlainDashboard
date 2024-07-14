import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface workbench_InstanceUpgradeHistory {
  // Optional. Action. Rolloback or Upgrade.
  action?: string;

  /*
An RFC3339 timestamp in UTC time. This in the format of yyyy-MM-ddTHH:mm:ss.SSSZ.
The milliseconds portion (".SSS") is optional.
*/
  createTime?: string;

  // Optional. The snapshot of the boot disk of this workbench instance before upgrade.
  snapshot?: string;

  // Optional. Target VM Version, like m63.
  targetVersion?: string;

  // Optional. The version of the workbench instance before this upgrade.
  version?: string;

  /*
Definition of a custom Compute Engine virtual machine image for starting
a workbench instance with the environment installed directly on the VM.
Structure is documented below.
*/
  vmImage?: string;

  /*
Use a container image to start the workbench instance.
Structure is documented below.
*/
  containerImage?: string;

  // Optional. The framework of this workbench instance.
  framework?: string;

  /*
(Output)
Output only. The state of this instance upgrade history entry.
*/
  state?: string;
}

export function workbench_InstanceUpgradeHistory_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "targetVersion",
      "Optional. Target VM Version, like m63.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "framework",
      "Optional. The framework of this workbench instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "(Output)\nOutput only. The state of this instance upgrade history entry.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createTime",
      'An RFC3339 timestamp in UTC time. This in the format of yyyy-MM-ddTHH:mm:ss.SSSZ.\nThe milliseconds portion (".SSS") is optional.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "snapshot",
      "Optional. The snapshot of the boot disk of this workbench instance before upgrade.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vmImage",
      "Definition of a custom Compute Engine virtual machine image for starting\na workbench instance with the environment installed directly on the VM.\nStructure is documented below.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "containerImage",
      "Use a container image to start the workbench instance.\nStructure is documented below.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "action",
      "Optional. Action. Rolloback or Upgrade.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "Optional. The version of the workbench instance before this upgrade.",
      [],
      false,
      false,
    ),
  ];
}
