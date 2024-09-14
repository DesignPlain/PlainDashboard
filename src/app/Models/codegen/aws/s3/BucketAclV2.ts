import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_BucketAclV2AccessControlPolicy,
  s3_BucketAclV2AccessControlPolicy_GetTypes,
} from "../types/s3_BucketAclV2AccessControlPolicy";

export interface BucketAclV2Args {
  // Configuration block that sets the ACL permissions for an object per grantee. See below.
  accessControlPolicy?: s3_BucketAclV2AccessControlPolicy;

  // Canned ACL to apply to the bucket.
  acl?: string;

  // Bucket to which to apply the ACL.
  bucket?: string;

  // Account ID of the expected bucket owner.
  expectedBucketOwner?: string;
}
export class BucketAclV2 extends DS_Resource {
  // Canned ACL to apply to the bucket.
  public acl?: string;

  // Bucket to which to apply the ACL.
  public bucket?: string;

  // Account ID of the expected bucket owner.
  public expectedBucketOwner?: string;

  // Configuration block that sets the ACL permissions for an object per grantee. See below.
  public accessControlPolicy?: s3_BucketAclV2AccessControlPolicy;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "accessControlPolicy",
        "Configuration block that sets the ACL permissions for an object per grantee. See below.",
        () => s3_BucketAclV2AccessControlPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "acl",
        "Canned ACL to apply to the bucket.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Bucket to which to apply the ACL.",
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
    ];
  }
}
