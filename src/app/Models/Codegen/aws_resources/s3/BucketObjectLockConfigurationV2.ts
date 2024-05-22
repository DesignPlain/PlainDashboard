import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_BucketObjectLockConfigurationV2Rule,
  s3_BucketObjectLockConfigurationV2Rule_GetTypes,
} from "../types/s3_BucketObjectLockConfigurationV2Rule";

export interface BucketObjectLockConfigurationV2Args {
  // Name of the bucket.
  bucket?: string;

  // Account ID of the expected bucket owner.
  expectedBucketOwner?: string;

  // Indicates whether this bucket has an Object Lock configuration enabled. Defaults to `Enabled`. Valid values: `Enabled`.
  objectLockEnabled?: string;

  // Configuration block for specifying the Object Lock rule for the specified object. See below.
  rule?: s3_BucketObjectLockConfigurationV2Rule;

  /*
Token to allow Object Lock to be enabled for an existing bucket. You must contact AWS support for the bucket's "Object Lock token".
The token is generated in the back-end when [versioning](https://docs.aws.amazon.com/AmazonS3/latest/userguide/manage-versioning-examples.html) is enabled on a bucket. For more details on versioning, see the `aws.s3.BucketVersioningV2` resource.
*/
  token?: string;
}
export class BucketObjectLockConfigurationV2 extends Resource {
  // Name of the bucket.
  public bucket?: string;

  // Account ID of the expected bucket owner.
  public expectedBucketOwner?: string;

  // Indicates whether this bucket has an Object Lock configuration enabled. Defaults to `Enabled`. Valid values: `Enabled`.
  public objectLockEnabled?: string;

  // Configuration block for specifying the Object Lock rule for the specified object. See below.
  public rule?: s3_BucketObjectLockConfigurationV2Rule;

  /*
Token to allow Object Lock to be enabled for an existing bucket. You must contact AWS support for the bucket's "Object Lock token".
The token is generated in the back-end when [versioning](https://docs.aws.amazon.com/AmazonS3/latest/userguide/manage-versioning-examples.html) is enabled on a bucket. For more details on versioning, see the `aws.s3.BucketVersioningV2` resource.
*/
  public token?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of the bucket.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "expectedBucketOwner",
        "Account ID of the expected bucket owner.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "objectLockEnabled",
        "Indicates whether this bucket has an Object Lock configuration enabled. Defaults to `Enabled`. Valid values: `Enabled`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "rule",
        "Configuration block for specifying the Object Lock rule for the specified object. See below.",
        s3_BucketObjectLockConfigurationV2Rule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "token",
        'Token to allow Object Lock to be enabled for an existing bucket. You must contact AWS support for the bucket\'s "Object Lock token".\nThe token is generated in the back-end when [versioning](https://docs.aws.amazon.com/AmazonS3/latest/userguide/manage-versioning-examples.html) is enabled on a bucket. For more details on versioning, see the `aws.s3.BucketVersioningV2` resource.',
        [],
        false,
        false,
      ),
    ];
  }
}
