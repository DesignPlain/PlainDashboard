import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketAclV2AccessControlPolicyGrantGrantee,
  s3_BucketAclV2AccessControlPolicyGrantGrantee_GetTypes,
} from './s3_BucketAclV2AccessControlPolicyGrantGrantee';

export interface s3_BucketAclV2AccessControlPolicyGrant {
  // Configuration block for the person being granted permissions. See below.
  grantee?: s3_BucketAclV2AccessControlPolicyGrantGrantee;

  // Logging permissions assigned to the grantee for the bucket. Valid values: `FULL_CONTROL`, `WRITE`, `WRITE_ACP`, `READ`, `READ_ACP`. See [What permissions can I grant?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions) for more details about what each permission means in the context of buckets.
  permission?: string;
}

export function s3_BucketAclV2AccessControlPolicyGrant_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'grantee',
      'Configuration block for the person being granted permissions. See below.',
      () => s3_BucketAclV2AccessControlPolicyGrantGrantee_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'permission',
      'Logging permissions assigned to the grantee for the bucket. Valid values: `FULL_CONTROL`, `WRITE`, `WRITE_ACP`, `READ`, `READ_ACP`. See [What permissions can I grant?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions) for more details about what each permission means in the context of buckets.',
      () => [],
      true,
      false,
    ),
  ];
}
