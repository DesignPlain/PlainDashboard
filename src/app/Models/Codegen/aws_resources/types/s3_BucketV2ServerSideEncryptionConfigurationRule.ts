import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_BucketV2ServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault,
  s3_BucketV2ServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault_GetTypes,
} from "./s3_BucketV2ServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault";

export interface s3_BucketV2ServerSideEncryptionConfigurationRule {
  // Single object for setting server-side encryption by default. (documented below)
  applyServerSideEncryptionByDefaults?: Array<s3_BucketV2ServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault>;

  // Whether or not to use [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) for SSE-KMS.
  bucketKeyEnabled?: boolean;
}

export function s3_BucketV2ServerSideEncryptionConfigurationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "applyServerSideEncryptionByDefaults",
      "Single object for setting server-side encryption by default. (documented below)",
      s3_BucketV2ServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "bucketKeyEnabled",
      "Whether or not to use [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) for SSE-KMS.",
      [],
      false,
      false,
    ),
  ];
}
