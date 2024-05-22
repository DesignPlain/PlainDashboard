import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface athena_DatabaseEncryptionConfiguration {
  // Type of key; one of `SSE_S3`, `SSE_KMS`, `CSE_KMS`
  encryptionOption?: string;

  // KMS key ARN or ID; required for key types `SSE_KMS` and `CSE_KMS`.
  kmsKey?: string;
}

export function athena_DatabaseEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "encryptionOption",
      "Type of key; one of `SSE_S3`, `SSE_KMS`, `CSE_KMS`",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKey",
      "KMS key ARN or ID; required for key types `SSE_KMS` and `CSE_KMS`.",
      [],
      false,
      true,
    ),
  ];
}
