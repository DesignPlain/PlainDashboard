import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AccountPublicAccessBlockArgs {
  // AWS account ID to configure. Defaults to automatically determined account ID of the this provider AWS provider.
  accountId?: string;

  /*
Whether Amazon S3 should block public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior:
- PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.
- PUT Object calls fail if the request includes a public ACL.
*/
  blockPublicAcls?: boolean;

  /*
Whether Amazon S3 should block public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing bucket policies. When set to `true` causes Amazon S3 to:
- Reject calls to PUT Bucket policy if the specified bucket policy allows public access.
*/
  blockPublicPolicy?: boolean;

  /*
Whether Amazon S3 should ignore public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to:
- Ignore all public ACLs on buckets in this account and any objects that they contain.
*/
  ignorePublicAcls?: boolean;

  /*
Whether Amazon S3 should restrict public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`:
- Only the bucket owner and AWS Services can access buckets with public policies.
*/
  restrictPublicBuckets?: boolean;
}
export class AccountPublicAccessBlock extends DS_Resource {
  // AWS account ID to configure. Defaults to automatically determined account ID of the this provider AWS provider.
  public accountId?: string;

  /*
Whether Amazon S3 should block public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior:
- PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.
- PUT Object calls fail if the request includes a public ACL.
*/
  public blockPublicAcls?: boolean;

  /*
Whether Amazon S3 should block public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing bucket policies. When set to `true` causes Amazon S3 to:
- Reject calls to PUT Bucket policy if the specified bucket policy allows public access.
*/
  public blockPublicPolicy?: boolean;

  /*
Whether Amazon S3 should ignore public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to:
- Ignore all public ACLs on buckets in this account and any objects that they contain.
*/
  public ignorePublicAcls?: boolean;

  /*
Whether Amazon S3 should restrict public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`:
- Only the bucket owner and AWS Services can access buckets with public policies.
*/
  public restrictPublicBuckets?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'accountId',
        'AWS account ID to configure. Defaults to automatically determined account ID of the this provider AWS provider.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'blockPublicAcls',
        'Whether Amazon S3 should block public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior:\n* PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.\n* PUT Object calls fail if the request includes a public ACL.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'blockPublicPolicy',
        'Whether Amazon S3 should block public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing bucket policies. When set to `true` causes Amazon S3 to:\n* Reject calls to PUT Bucket policy if the specified bucket policy allows public access.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'ignorePublicAcls',
        "Whether Amazon S3 should ignore public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to:\n* Ignore all public ACLs on buckets in this account and any objects that they contain.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'restrictPublicBuckets',
        'Whether Amazon S3 should restrict public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`:\n* Only the bucket owner and AWS Services can access buckets with public policies.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
