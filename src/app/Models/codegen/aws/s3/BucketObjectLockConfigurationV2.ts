import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_BucketObjectLockConfigurationV2Rule,
  s3_BucketObjectLockConfigurationV2Rule_GetTypes,
} from "../types/s3_BucketObjectLockConfigurationV2Rule";

export interface BucketObjectLockConfigurationV2Args {
  /*
This argument is deprecated and no longer needed to enable Object Lock.
To enable Object Lock for an existing bucket, you must first enable versioning on the bucket and then enable Object Lock. For more details on versioning, see the `aws.s3.BucketVersioningV2` resource.
*/
  token?: string;

  // Name of the bucket.
  bucket?: string;

  // Account ID of the expected bucket owner.
  expectedBucketOwner?: string;

  // Indicates whether this bucket has an Object Lock configuration enabled. Defaults to `Enabled`. Valid values: `Enabled`.
  objectLockEnabled?: string;

  // Configuration block for specifying the Object Lock rule for the specified object. See below.
  rule?: s3_BucketObjectLockConfigurationV2Rule;
}
export class BucketObjectLockConfigurationV2 extends DS_Resource {
  // Name of the bucket.
  public bucket?: string;

  // Account ID of the expected bucket owner.
  public expectedBucketOwner?: string;

  // Indicates whether this bucket has an Object Lock configuration enabled. Defaults to `Enabled`. Valid values: `Enabled`.
  public objectLockEnabled?: string;

  // Configuration block for specifying the Object Lock rule for the specified object. See below.
  public rule?: s3_BucketObjectLockConfigurationV2Rule;

  /*
This argument is deprecated and no longer needed to enable Object Lock.
To enable Object Lock for an existing bucket, you must first enable versioning on the bucket and then enable Object Lock. For more details on versioning, see the `aws.s3.BucketVersioningV2` resource.
*/
  public token?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "token",
        "This argument is deprecated and no longer needed to enable Object Lock.\nTo enable Object Lock for an existing bucket, you must first enable versioning on the bucket and then enable Object Lock. For more details on versioning, see the `aws.s3.BucketVersioningV2` resource.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of the bucket.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "expectedBucketOwner",
        "Account ID of the expected bucket owner.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "objectLockEnabled",
        "Indicates whether this bucket has an Object Lock configuration enabled. Defaults to `Enabled`. Valid values: `Enabled`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "rule",
        "Configuration block for specifying the Object Lock rule for the specified object. See below.",
        () => s3_BucketObjectLockConfigurationV2Rule_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
