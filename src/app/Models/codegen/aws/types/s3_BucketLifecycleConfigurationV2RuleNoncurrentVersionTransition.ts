import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionTransition {
  // Number of noncurrent versions Amazon S3 will retain. Must be a non-zero positive integer.
  newerNoncurrentVersions?: string;

  // Number of days an object is noncurrent before Amazon S3 can perform the associated action.
  noncurrentDays?: number;

  // Class of storage used to store the object. Valid Values: `GLACIER`, `STANDARD_IA`, `ONEZONE_IA`, `INTELLIGENT_TIERING`, `DEEP_ARCHIVE`, `GLACIER_IR`.
  storageClass?: string;
}

export function s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionTransition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'newerNoncurrentVersions',
      'Number of noncurrent versions Amazon S3 will retain. Must be a non-zero positive integer.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'noncurrentDays',
      'Number of days an object is noncurrent before Amazon S3 can perform the associated action.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'storageClass',
      'Class of storage used to store the object. Valid Values: `GLACIER`, `STANDARD_IA`, `ONEZONE_IA`, `INTELLIGENT_TIERING`, `DEEP_ARCHIVE`, `GLACIER_IR`.',
      () => [],
      true,
      false,
    ),
  ];
}
