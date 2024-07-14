import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

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
      [],
      true,
      true,
    ),
  ];
}
