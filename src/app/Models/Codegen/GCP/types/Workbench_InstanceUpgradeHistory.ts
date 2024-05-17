import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Workbench_InstanceUpgradeHistory {
  // Optional. Target VM Version, like m63.
  TargetVersion?: string;

  // Optional. The version of the workbench instance before this upgrade.
  Version?: string;

  /*
Use a container image to start the workbench instance.
Structure is documented below.
*/
  ContainerImage?: string;

  /*
An RFC3339 timestamp in UTC time. This in the format of yyyy-MM-ddTHH:mm:ss.SSSZ.
The milliseconds portion (".SSS") is optional.
*/
  CreateTime?: string;

  // Optional. The snapshot of the boot disk of this workbench instance before upgrade.
  Snapshot?: string;

  /*
(Output)
Output only. The state of this instance upgrade history entry.
*/
  State?: string;

  /*
Definition of a custom Compute Engine virtual machine image for starting
a workbench instance with the environment installed directly on the VM.
Structure is documented below.
*/
  VmImage?: string;

  // Optional. Action. Rolloback or Upgrade.
  Action?: string;

  // Optional. The framework of this workbench instance.
  Framework?: string;
}

export function Workbench_InstanceUpgradeHistory_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "TargetVersion",
      "Optional. Target VM Version, like m63.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Snapshot",
      "Optional. The snapshot of the boot disk of this workbench instance before upgrade.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VmImage",
      "Definition of a custom Compute Engine virtual machine image for starting\na workbench instance with the environment installed directly on the VM.\nStructure is documented below.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "Optional. The version of the workbench instance before this upgrade.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ContainerImage",
      "Use a container image to start the workbench instance.\nStructure is documented below.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      'An RFC3339 timestamp in UTC time. This in the format of yyyy-MM-ddTHH:mm:ss.SSSZ.\nThe milliseconds portion (".SSS") is optional.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nOutput only. The state of this instance upgrade history entry.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Action",
      "Optional. Action. Rolloback or Upgrade.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Framework",
      "Optional. The framework of this workbench instance.",
      [],
      false,
      false,
    ),
  ];
}
