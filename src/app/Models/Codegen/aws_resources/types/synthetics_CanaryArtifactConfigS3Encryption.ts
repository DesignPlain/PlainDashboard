import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface synthetics_CanaryArtifactConfigS3Encryption {
  // The encryption method to use for artifacts created by this canary. Valid values are: `SSE_S3` and `SSE_KMS`.
  encryptionMode?: string;

  // The ARN of the customer-managed KMS key to use, if you specify `SSE_KMS` for `encryption_mode`.
  kmsKeyArn?: string;
}

export function synthetics_CanaryArtifactConfigS3Encryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "encryptionMode",
      "The encryption method to use for artifacts created by this canary. Valid values are: `SSE_S3` and `SSE_KMS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "The ARN of the customer-managed KMS key to use, if you specify `SSE_KMS` for `encryption_mode`.",
      [],
      false,
      false,
    ),
  ];
}
