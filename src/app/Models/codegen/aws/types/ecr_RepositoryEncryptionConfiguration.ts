import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecr_RepositoryEncryptionConfiguration {
  // The encryption type to use for the repository. Valid values are `AES256` or `KMS`. Defaults to `AES256`.
  encryptionType?: string;

  // The ARN of the KMS key to use when `encryption_type` is `KMS`. If not specified, uses the default AWS managed key for ECR.
  kmsKey?: string;
}

export function ecr_RepositoryEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "encryptionType",
      "The encryption type to use for the repository. Valid values are `AES256` or `KMS`. Defaults to `AES256`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKey",
      "The ARN of the KMS key to use when `encryption_type` is `KMS`. If not specified, uses the default AWS managed key for ECR.",
      () => [],
      false,
      true,
    ),
  ];
}
