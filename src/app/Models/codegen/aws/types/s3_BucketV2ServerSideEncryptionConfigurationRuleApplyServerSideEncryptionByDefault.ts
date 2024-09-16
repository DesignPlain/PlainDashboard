import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3_BucketV2ServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault {
  // AWS KMS master key ID used for the SSE-KMS encryption. This can only be used when you set the value of `sse_algorithm` as `aws:kms`. The default `aws/s3` AWS KMS master key is used if this element is absent while the `sse_algorithm` is `aws:kms`.
  kmsMasterKeyId?: string;

  // Server-side encryption algorithm to use. Valid values are `AES256` and `aws:kms`
  sseAlgorithm?: string;
}

export function s3_BucketV2ServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsMasterKeyId',
      'AWS KMS master key ID used for the SSE-KMS encryption. This can only be used when you set the value of `sse_algorithm` as `aws:kms`. The default `aws/s3` AWS KMS master key is used if this element is absent while the `sse_algorithm` is `aws:kms`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sseAlgorithm',
      'Server-side encryption algorithm to use. Valid values are `AES256` and `aws:kms`',
      () => [],
      true,
      false,
    ),
  ];
}
