import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface glue_SecurityConfigurationEncryptionConfigurationCloudwatchEncryption {
  // Encryption mode to use for CloudWatch data. Valid values: `DISABLED`, `SSE-KMS`. Default value: `DISABLED`.
  cloudwatchEncryptionMode?: string;

  // Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
  kmsKeyArn?: string;
}

export function glue_SecurityConfigurationEncryptionConfigurationCloudwatchEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cloudwatchEncryptionMode",
      "Encryption mode to use for CloudWatch data. Valid values: `DISABLED`, `SSE-KMS`. Default value: `DISABLED`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.",
      [],
      false,
      true,
    ),
  ];
}
