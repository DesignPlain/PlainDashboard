import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_BucketLifecycleConfigurationV2Rule,
  s3_BucketLifecycleConfigurationV2Rule_GetTypes,
} from "../types/s3_BucketLifecycleConfigurationV2Rule";

export interface BucketLifecycleConfigurationV2Args {
  // Name of the source S3 bucket you want Amazon S3 to monitor.
  bucket?: string;

  // Account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
  expectedBucketOwner?: string;

  // List of configuration blocks describing the rules managing the replication. See below.
  rules?: Array<s3_BucketLifecycleConfigurationV2Rule>;
}
export class BucketLifecycleConfigurationV2 extends DS_Resource {
  // List of configuration blocks describing the rules managing the replication. See below.
  public rules?: Array<s3_BucketLifecycleConfigurationV2Rule>;

  // Name of the source S3 bucket you want Amazon S3 to monitor.
  public bucket?: string;

  // Account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
  public expectedBucketOwner?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "expectedBucketOwner",
        "Account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "List of configuration blocks describing the rules managing the replication. See below.",
        () => s3_BucketLifecycleConfigurationV2Rule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of the source S3 bucket you want Amazon S3 to monitor.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
