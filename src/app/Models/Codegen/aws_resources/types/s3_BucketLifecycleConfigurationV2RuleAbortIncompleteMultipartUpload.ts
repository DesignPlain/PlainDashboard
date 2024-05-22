import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketLifecycleConfigurationV2RuleAbortIncompleteMultipartUpload {
  // Number of days after which Amazon S3 aborts an incomplete multipart upload.
  daysAfterInitiation?: number;
}

export function s3_BucketLifecycleConfigurationV2RuleAbortIncompleteMultipartUpload_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "daysAfterInitiation",
      "Number of days after which Amazon S3 aborts an incomplete multipart upload.",
      [],
      false,
      false,
    ),
  ];
}
