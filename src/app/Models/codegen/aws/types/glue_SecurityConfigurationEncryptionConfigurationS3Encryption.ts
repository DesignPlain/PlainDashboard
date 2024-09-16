import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_SecurityConfigurationEncryptionConfigurationS3Encryption {
  // Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
  kmsKeyArn?: string;

  // Encryption mode to use for S3 data. Valid values: `DISABLED`, `SSE-KMS`, `SSE-S3`. Default value: `DISABLED`.
  s3EncryptionMode?: string;
}

export function glue_SecurityConfigurationEncryptionConfigurationS3Encryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyArn',
      'Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      's3EncryptionMode',
      'Encryption mode to use for S3 data. Valid values: `DISABLED`, `SSE-KMS`, `SSE-S3`. Default value: `DISABLED`.',
      () => [],
      false,
      true,
    ),
  ];
}
