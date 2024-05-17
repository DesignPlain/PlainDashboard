import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Composer_getEnvironmentConfigEncryptionConfig {
  // Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated.
  KmsKeyName?: string;
}

export function Composer_getEnvironmentConfigEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKeyName",
      "Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated.",
      [],
      true,
      false,
    ),
  ];
}
