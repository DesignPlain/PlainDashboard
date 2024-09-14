import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface composer_EnvironmentStorageConfig {
  // Optional. Name of an existing Cloud Storage bucket to be used by the environment.
  bucket?: string;
}

export function composer_EnvironmentStorageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Optional. Name of an existing Cloud Storage bucket to be used by the environment.",
      () => [],
      true,
      true,
    ),
  ];
}
