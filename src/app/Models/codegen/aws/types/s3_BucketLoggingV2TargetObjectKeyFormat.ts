import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketLoggingV2TargetObjectKeyFormatSimplePrefix,
  s3_BucketLoggingV2TargetObjectKeyFormatSimplePrefix_GetTypes,
} from './s3_BucketLoggingV2TargetObjectKeyFormatSimplePrefix';
import {
  s3_BucketLoggingV2TargetObjectKeyFormatPartitionedPrefix,
  s3_BucketLoggingV2TargetObjectKeyFormatPartitionedPrefix_GetTypes,
} from './s3_BucketLoggingV2TargetObjectKeyFormatPartitionedPrefix';

export interface s3_BucketLoggingV2TargetObjectKeyFormat {
  // Partitioned S3 key for log objects. See below.
  partitionedPrefix?: s3_BucketLoggingV2TargetObjectKeyFormatPartitionedPrefix;

  // Use the simple format for S3 keys for log objects. To use, set `simple_prefix {}`.
  simplePrefix?: s3_BucketLoggingV2TargetObjectKeyFormatSimplePrefix;
}

export function s3_BucketLoggingV2TargetObjectKeyFormat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'partitionedPrefix',
      'Partitioned S3 key for log objects. See below.',
      () => s3_BucketLoggingV2TargetObjectKeyFormatPartitionedPrefix_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'simplePrefix',
      'Use the simple format for S3 keys for log objects. To use, set `simple_prefix {}`.',
      () => s3_BucketLoggingV2TargetObjectKeyFormatSimplePrefix_GetTypes(),
      false,
      false,
    ),
  ];
}
