import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketObjectLockConfigurationRuleDefaultRetention {
  // The number of days that you want to specify for the default retention period.
  days?: number;

  // The default Object Lock retention mode you want to apply to new objects placed in this bucket. Valid values are `GOVERNANCE` and `COMPLIANCE`.
  mode?: string;

  /*
The number of years that you want to specify for the default retention period.

Either `days` or `years` must be specified, but not both.

> --NOTE on `object_lock_configuration`:-- You can only enable S3 Object Lock for new buckets. If you need to turn on S3 Object Lock for an existing bucket, please contact AWS Support.
When you create a bucket with S3 Object Lock enabled, Amazon S3 automatically enables versioning for the bucket.
Once you create a bucket with S3 Object Lock enabled, you can't disable Object Lock or suspend versioning for the bucket.
*/
  years?: number;
}

export function s3_BucketObjectLockConfigurationRuleDefaultRetention_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "days",
      "The number of days that you want to specify for the default retention period.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "The default Object Lock retention mode you want to apply to new objects placed in this bucket. Valid values are `GOVERNANCE` and `COMPLIANCE`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "years",
      "The number of years that you want to specify for the default retention period.\n\nEither `days` or `years` must be specified, but not both.\n\n> **NOTE on `object_lock_configuration`:** You can only enable S3 Object Lock for new buckets. If you need to turn on S3 Object Lock for an existing bucket, please contact AWS Support.\nWhen you create a bucket with S3 Object Lock enabled, Amazon S3 automatically enables versioning for the bucket.\nOnce you create a bucket with S3 Object Lock enabled, you can't disable Object Lock or suspend versioning for the bucket.",
      [],
      false,
      false,
    ),
  ];
}
