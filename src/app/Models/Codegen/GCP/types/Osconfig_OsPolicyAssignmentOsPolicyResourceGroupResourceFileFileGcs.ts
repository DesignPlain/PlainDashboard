import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileGcs {
  // Name of the Cloud Storage object.
  object?: string;

  // Bucket of the Cloud Storage object.
  bucket?: string;

  // Generation number of the Cloud Storage object.
  generation?: number;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceFileFileGcs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "object",
      "Name of the Cloud Storage object.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Bucket of the Cloud Storage object.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "generation",
      "Generation number of the Cloud Storage object.",
      [],
      false,
      false,
    ),
  ];
}
