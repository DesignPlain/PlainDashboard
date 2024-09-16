import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketReplicationConfigRule,
  s3_BucketReplicationConfigRule_GetTypes,
} from '../types/s3_BucketReplicationConfigRule';

export interface BucketReplicationConfigArgs {
  // Name of the source S3 bucket you want Amazon S3 to monitor.
  bucket?: string;

  // ARN of the IAM role for Amazon S3 to assume when replicating the objects.
  role?: string;

  // List of configuration blocks describing the rules managing the replication. See below.
  rules?: Array<s3_BucketReplicationConfigRule>;

  /*
Token to allow replication to be enabled on an Object Lock-enabled bucket. You must contact AWS support for the bucket's "Object Lock token".
For more details, see [Using S3 Object Lock with replication](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html#object-lock-managing-replication).
*/
  token?: string;
}
export class BucketReplicationConfig extends DS_Resource {
  // List of configuration blocks describing the rules managing the replication. See below.
  public rules?: Array<s3_BucketReplicationConfigRule>;

  /*
Token to allow replication to be enabled on an Object Lock-enabled bucket. You must contact AWS support for the bucket's "Object Lock token".
For more details, see [Using S3 Object Lock with replication](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html#object-lock-managing-replication).
*/
  public token?: string;

  // Name of the source S3 bucket you want Amazon S3 to monitor.
  public bucket?: string;

  // ARN of the IAM role for Amazon S3 to assume when replicating the objects.
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'role',
        'ARN of the IAM role for Amazon S3 to assume when replicating the objects.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'rules',
        'List of configuration blocks describing the rules managing the replication. See below.',
        () => s3_BucketReplicationConfigRule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'token',
        'Token to allow replication to be enabled on an Object Lock-enabled bucket. You must contact AWS support for the bucket\'s "Object Lock token".\nFor more details, see [Using S3 Object Lock with replication](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html#object-lock-managing-replication).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'bucket',
        'Name of the source S3 bucket you want Amazon S3 to monitor.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
