import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault,
  s3_BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault_GetTypes,
} from './s3_BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault';

export interface s3_BucketServerSideEncryptionConfigurationRule {
  // Single object for setting server-side encryption by default. (documented below)
  applyServerSideEncryptionByDefault?: s3_BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault;

  // Whether or not to use [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) for SSE-KMS.
  bucketKeyEnabled?: boolean;
}

export function s3_BucketServerSideEncryptionConfigurationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'applyServerSideEncryptionByDefault',
      'Single object for setting server-side encryption by default. (documented below)',
      () =>
        s3_BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'bucketKeyEnabled',
      'Whether or not to use [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) for SSE-KMS.',
      () => [],
      false,
      false,
    ),
  ];
}
