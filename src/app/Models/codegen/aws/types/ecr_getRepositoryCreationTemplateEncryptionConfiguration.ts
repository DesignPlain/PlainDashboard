import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecr_getRepositoryCreationTemplateEncryptionConfiguration {
  // Encryption type to use for any created repositories, either `AES256` or `KMS`.
  encryptionType?: string;

  // If `encryption_type` is `KMS`, the ARN of the KMS key used.
  kmsKey?: string;
}

export function ecr_getRepositoryCreationTemplateEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "encryptionType",
      "Encryption type to use for any created repositories, either `AES256` or `KMS`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKey",
      "If `encryption_type` is `KMS`, the ARN of the KMS key used.",
      () => [],
      true,
      false,
    ),
  ];
}
