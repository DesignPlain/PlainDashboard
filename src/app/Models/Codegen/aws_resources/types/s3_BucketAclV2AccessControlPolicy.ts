import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketAclV2AccessControlPolicyOwner,
  s3_BucketAclV2AccessControlPolicyOwner_GetTypes,
} from "./s3_BucketAclV2AccessControlPolicyOwner";
import {
  s3_BucketAclV2AccessControlPolicyGrant,
  s3_BucketAclV2AccessControlPolicyGrant_GetTypes,
} from "./s3_BucketAclV2AccessControlPolicyGrant";

export interface s3_BucketAclV2AccessControlPolicy {
  // Configuration block for the bucket owner's display name and ID. See below.
  owner?: s3_BucketAclV2AccessControlPolicyOwner;

  // Set of `grant` configuration blocks. See below.
  grants?: Array<s3_BucketAclV2AccessControlPolicyGrant>;
}

export function s3_BucketAclV2AccessControlPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "owner",
      "Configuration block for the bucket owner's display name and ID. See below.",
      s3_BucketAclV2AccessControlPolicyOwner_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "grants",
      "Set of `grant` configuration blocks. See below.",
      s3_BucketAclV2AccessControlPolicyGrant_GetTypes(),
      false,
      false,
    ),
  ];
}
