import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3control_getMultiRegionAccessPointPublicAccessBlock {
  /*
Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. When set to `true` causes Amazon S3 to:
- Ignore all public ACLs on buckets in this account and any objects that they contain.
*/
  ignorePublicAcls?: boolean;

  /*
Specifies whether Amazon S3 should restrict public bucket policies for buckets in this account. When set to `true`:
- Only the bucket owner and AWS Services can access buckets with public policies.
*/
  restrictPublicBuckets?: boolean;

  /*
Specifies whether Amazon S3 should block public access control lists (ACLs). When set to `true` causes the following behavior:
- PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
- PUT Object calls fail if the request includes a public ACL.
- PUT Bucket calls fail if the request includes a public ACL.
*/
  blockPublicAcls?: boolean;

  /*
Specifies whether Amazon S3 should block public bucket policies for buckets in this account. When set to `true` causes Amazon S3 to:
- Reject calls to PUT Bucket policy if the specified bucket policy allows public access.
*/
  blockPublicPolicy?: boolean;
}

export function s3control_getMultiRegionAccessPointPublicAccessBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "ignorePublicAcls",
      "Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. When set to `true` causes Amazon S3 to:\n* Ignore all public ACLs on buckets in this account and any objects that they contain.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "restrictPublicBuckets",
      "Specifies whether Amazon S3 should restrict public bucket policies for buckets in this account. When set to `true`:\n* Only the bucket owner and AWS Services can access buckets with public policies.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "blockPublicAcls",
      "Specifies whether Amazon S3 should block public access control lists (ACLs). When set to `true` causes the following behavior:\n* PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.\n* PUT Object calls fail if the request includes a public ACL.\n* PUT Bucket calls fail if the request includes a public ACL.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "blockPublicPolicy",
      "Specifies whether Amazon S3 should block public bucket policies for buckets in this account. When set to `true` causes Amazon S3 to:\n* Reject calls to PUT Bucket policy if the specified bucket policy allows public access.",
      () => [],
      true,
      false,
    ),
  ];
}
