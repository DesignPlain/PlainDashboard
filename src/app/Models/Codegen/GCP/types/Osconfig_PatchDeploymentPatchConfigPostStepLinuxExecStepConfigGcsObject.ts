import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject {
  // Bucket of the Cloud Storage object.
  Bucket?: string;

  // Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  GenerationNumber?: string;

  // Name of the Cloud Storage object.
  Object?: string;
}

export function Osconfig_PatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Bucket",
      "Bucket of the Cloud Storage object.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "GenerationNumber",
      "Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Object",
      "Name of the Cloud Storage object.",
      [],
      true,
      true,
    ),
  ];
}
