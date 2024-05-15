import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFileGcs {
  // Bucket of the Cloud Storage object.
  Bucket?: string;

  // Generation number of the Cloud Storage object.
  Generation?: number;

  // Name of the Cloud Storage object.
  Object?: string;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidateFileGcs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Bucket",
      "Bucket of the Cloud Storage object.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Generation",
      "Generation number of the Cloud Storage object.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Object",
      "Name of the Cloud Storage object.",
      [],
      true,
      false,
    ),
  ];
}
