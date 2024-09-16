import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_DirectoryBucketLocation,
  s3_DirectoryBucketLocation_GetTypes,
} from '../types/s3_DirectoryBucketLocation';

export interface DirectoryBucketArgs {
  // Name of the bucket. The name must be in the format `[bucket_name]--[azid]--x-s3`. Use the `aws.s3.BucketV2` resource to manage general purpose buckets.
  bucket?: string;

  // Data redundancy. Valid values: `SingleAvailabilityZone`.
  dataRedundancy?: string;

  // Boolean that indicates all objects should be deleted from the bucket -when the bucket is destroyed- so that the bucket can be destroyed without error. These objects are -not- recoverable. This only deletes objects when the bucket is destroyed, -not- when setting this parameter to `true`. Once this parameter is set to `true`, there must be a successful `pulumi up` run before a destroy is required to update this value in the resource state. Without a successful `pulumi up` after this parameter is set, this flag will have no effect. If setting this field in the same operation that would require replacing the bucket or destroying the bucket, this flag will not work. Additionally when importing a bucket, a successful `pulumi up` is required to set this value in state before it will take effect on a destroy operation.
  forceDestroy?: boolean;

  // Bucket location. See Location below for more details.
  location?: s3_DirectoryBucketLocation;

  // Bucket type. Valid values: `Directory`.
  type?: string;
}
export class DirectoryBucket extends DS_Resource {
  // ARN of the bucket.
  public arn?: string;

  // Name of the bucket. The name must be in the format `[bucket_name]--[azid]--x-s3`. Use the `aws.s3.BucketV2` resource to manage general purpose buckets.
  public bucket?: string;

  // Data redundancy. Valid values: `SingleAvailabilityZone`.
  public dataRedundancy?: string;

  // Boolean that indicates all objects should be deleted from the bucket -when the bucket is destroyed- so that the bucket can be destroyed without error. These objects are -not- recoverable. This only deletes objects when the bucket is destroyed, -not- when setting this parameter to `true`. Once this parameter is set to `true`, there must be a successful `pulumi up` run before a destroy is required to update this value in the resource state. Without a successful `pulumi up` after this parameter is set, this flag will have no effect. If setting this field in the same operation that would require replacing the bucket or destroying the bucket, this flag will not work. Additionally when importing a bucket, a successful `pulumi up` is required to set this value in state before it will take effect on a destroy operation.
  public forceDestroy?: boolean;

  // Bucket location. See Location below for more details.
  public location?: s3_DirectoryBucketLocation;

  // Bucket type. Valid values: `Directory`.
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'bucket',
        'Name of the bucket. The name must be in the format `[bucket_name]--[azid]--x-s3`. Use the `aws.s3.BucketV2` resource to manage general purpose buckets.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dataRedundancy',
        'Data redundancy. Valid values: `SingleAvailabilityZone`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'forceDestroy',
        'Boolean that indicates all objects should be deleted from the bucket *when the bucket is destroyed* so that the bucket can be destroyed without error. These objects are *not* recoverable. This only deletes objects when the bucket is destroyed, *not* when setting this parameter to `true`. Once this parameter is set to `true`, there must be a successful `pulumi up` run before a destroy is required to update this value in the resource state. Without a successful `pulumi up` after this parameter is set, this flag will have no effect. If setting this field in the same operation that would require replacing the bucket or destroying the bucket, this flag will not work. Additionally when importing a bucket, a successful `pulumi up` is required to set this value in state before it will take effect on a destroy operation.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'location',
        'Bucket location. See Location below for more details.',
        () => s3_DirectoryBucketLocation_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'Bucket type. Valid values: `Directory`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
