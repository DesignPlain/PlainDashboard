import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface composer_EnvironmentConfigEncryptionConfig {
  // Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated.
  kmsKeyName?: string;
}

export function composer_EnvironmentConfigEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyName",
      "Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated.",
      [],
      true,
      true,
    ),
  ];
}
