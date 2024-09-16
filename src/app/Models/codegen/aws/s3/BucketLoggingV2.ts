import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketLoggingV2TargetGrant,
  s3_BucketLoggingV2TargetGrant_GetTypes,
} from '../types/s3_BucketLoggingV2TargetGrant';
import {
  s3_BucketLoggingV2TargetObjectKeyFormat,
  s3_BucketLoggingV2TargetObjectKeyFormat_GetTypes,
} from '../types/s3_BucketLoggingV2TargetObjectKeyFormat';

export interface BucketLoggingV2Args {
  // Name of the bucket.
  bucket?: string;

  // Account ID of the expected bucket owner.
  expectedBucketOwner?: string;

  // Name of the bucket where you want Amazon S3 to store server access logs.
  targetBucket?: string;

  // Set of configuration blocks with information for granting permissions. See below.
  targetGrants?: Array<s3_BucketLoggingV2TargetGrant>;

  // Amazon S3 key format for log objects. See below.
  targetObjectKeyFormat?: s3_BucketLoggingV2TargetObjectKeyFormat;

  // Prefix for all log object keys.
  targetPrefix?: string;
}
export class BucketLoggingV2 extends DS_Resource {
  // Name of the bucket.
  public bucket?: string;

  // Account ID of the expected bucket owner.
  public expectedBucketOwner?: string;

  // Name of the bucket where you want Amazon S3 to store server access logs.
  public targetBucket?: string;

  // Set of configuration blocks with information for granting permissions. See below.
  public targetGrants?: Array<s3_BucketLoggingV2TargetGrant>;

  // Amazon S3 key format for log objects. See below.
  public targetObjectKeyFormat?: s3_BucketLoggingV2TargetObjectKeyFormat;

  // Prefix for all log object keys.
  public targetPrefix?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'bucket',
        'Name of the bucket.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'expectedBucketOwner',
        'Account ID of the expected bucket owner.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'targetBucket',
        'Name of the bucket where you want Amazon S3 to store server access logs.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'targetGrants',
        'Set of configuration blocks with information for granting permissions. See below.',
        () => s3_BucketLoggingV2TargetGrant_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'targetObjectKeyFormat',
        'Amazon S3 key format for log objects. See below.',
        () => s3_BucketLoggingV2TargetObjectKeyFormat_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'targetPrefix',
        'Prefix for all log object keys.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
