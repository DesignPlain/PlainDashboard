import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionExpiration {
  // Number of noncurrent versions Amazon S3 will retain. Must be a non-zero positive integer.
  newerNoncurrentVersions?: string;

  // Number of days an object is noncurrent before Amazon S3 can perform the associated action. Must be a positive integer.
  noncurrentDays?: number;
}

export function s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionExpiration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "newerNoncurrentVersions",
      "Number of noncurrent versions Amazon S3 will retain. Must be a non-zero positive integer.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "noncurrentDays",
      "Number of days an object is noncurrent before Amazon S3 can perform the associated action. Must be a positive integer.",
      [],
      false,
      false,
    ),
  ];
}
