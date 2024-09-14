import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileGcs {
  // Bucket of the Cloud Storage object.
  bucket?: string;

  // Generation number of the Cloud Storage object.
  generation?: number;

  // Name of the Cloud Storage object.
  object?: string;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileGcs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Bucket of the Cloud Storage object.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "generation",
      "Generation number of the Cloud Storage object.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "object",
      "Name of the Cloud Storage object.",
      () => [],
      true,
      false,
    ),
  ];
}
