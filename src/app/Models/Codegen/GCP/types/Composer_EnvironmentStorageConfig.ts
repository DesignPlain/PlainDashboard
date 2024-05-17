import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Composer_EnvironmentStorageConfig {
  // Optional. Name of an existing Cloud Storage bucket to be used by the environment.
  Bucket?: string;
}

export function Composer_EnvironmentStorageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Bucket",
      "Optional. Name of an existing Cloud Storage bucket to be used by the environment.",
      [],
      true,
      true,
    ),
  ];
}
