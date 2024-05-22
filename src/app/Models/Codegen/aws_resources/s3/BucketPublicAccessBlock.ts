import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface BucketPublicAccessBlockArgs {
  /*
Whether Amazon S3 should block public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the existing bucket policy. When set to `true` causes Amazon S3 to:
- Reject calls to PUT Bucket policy if the specified bucket policy allows public access.
*/
  blockPublicPolicy?: boolean;

  // S3 Bucket to which this Public Access Block configuration should be applied.
  bucket?: string;

  /*
Whether Amazon S3 should ignore public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to:
- Ignore public ACLs on this bucket and any objects that it contains.
*/
  ignorePublicAcls?: boolean;

  /*
Whether Amazon S3 should restrict public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the previously stored bucket policy, except that public and cross-account access within the public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`:
- Only the bucket owner and AWS Services can access this buckets if it has a public policy.
*/
  restrictPublicBuckets?: boolean;

  /*
Whether Amazon S3 should block public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior:
- PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.
- PUT Object calls will fail if the request includes an object ACL.
*/
  blockPublicAcls?: boolean;
}
export class BucketPublicAccessBlock extends Resource {
  /*
Whether Amazon S3 should block public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the existing bucket policy. When set to `true` causes Amazon S3 to:
- Reject calls to PUT Bucket policy if the specified bucket policy allows public access.
*/
  public blockPublicPolicy?: boolean;

  // S3 Bucket to which this Public Access Block configuration should be applied.
  public bucket?: string;

  /*
Whether Amazon S3 should ignore public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to:
- Ignore public ACLs on this bucket and any objects that it contains.
*/
  public ignorePublicAcls?: boolean;

  /*
Whether Amazon S3 should restrict public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the previously stored bucket policy, except that public and cross-account access within the public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`:
- Only the bucket owner and AWS Services can access this buckets if it has a public policy.
*/
  public restrictPublicBuckets?: boolean;

  /*
Whether Amazon S3 should block public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior:
- PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.
- PUT Object calls will fail if the request includes an object ACL.
*/
  public blockPublicAcls?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "restrictPublicBuckets",
        "Whether Amazon S3 should restrict public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the previously stored bucket policy, except that public and cross-account access within the public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`:\n* Only the bucket owner and AWS Services can access this buckets if it has a public policy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "blockPublicAcls",
        "Whether Amazon S3 should block public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior:\n* PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.\n* PUT Object calls will fail if the request includes an object ACL.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "blockPublicPolicy",
        "Whether Amazon S3 should block public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the existing bucket policy. When set to `true` causes Amazon S3 to:\n* Reject calls to PUT Bucket policy if the specified bucket policy allows public access.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "S3 Bucket to which this Public Access Block configuration should be applied.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ignorePublicAcls",
        "Whether Amazon S3 should ignore public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to:\n* Ignore public ACLs on this bucket and any objects that it contains.",
        [],
        false,
        false,
      ),
    ];
  }
}
