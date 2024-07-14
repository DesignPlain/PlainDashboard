import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketV2LifecycleRuleExpiration,
  s3_BucketV2LifecycleRuleExpiration_GetTypes,
} from "./s3_BucketV2LifecycleRuleExpiration";
import {
  s3_BucketV2LifecycleRuleTransition,
  s3_BucketV2LifecycleRuleTransition_GetTypes,
} from "./s3_BucketV2LifecycleRuleTransition";
import {
  s3_BucketV2LifecycleRuleNoncurrentVersionExpiration,
  s3_BucketV2LifecycleRuleNoncurrentVersionExpiration_GetTypes,
} from "./s3_BucketV2LifecycleRuleNoncurrentVersionExpiration";
import {
  s3_BucketV2LifecycleRuleNoncurrentVersionTransition,
  s3_BucketV2LifecycleRuleNoncurrentVersionTransition_GetTypes,
} from "./s3_BucketV2LifecycleRuleNoncurrentVersionTransition";

export interface s3_BucketV2LifecycleRule {
  // Specifies the number of days after initiating a multipart upload when the multipart upload must be completed.
  abortIncompleteMultipartUploadDays?: number;

  // Specifies a period in the object's expire. See Expiration below for details.
  expirations?: Array<s3_BucketV2LifecycleRuleExpiration>;

  // Unique identifier for the rule. Must be less than or equal to 255 characters in length.
  id?: string;

  // Object key prefix identifying one or more objects to which the rule applies.
  prefix?: string;

  // Specifies a period in the object's transitions. See Transition below for details.
  transitions?: Array<s3_BucketV2LifecycleRuleTransition>;

  // Specifies lifecycle rule status.
  enabled?: boolean;

  // Specifies when noncurrent object versions expire. See Noncurrent Version Expiration below for details.
  noncurrentVersionExpirations?: Array<s3_BucketV2LifecycleRuleNoncurrentVersionExpiration>;

  // Specifies when noncurrent object versions transitions. See Noncurrent Version Transition below for details.
  noncurrentVersionTransitions?: Array<s3_BucketV2LifecycleRuleNoncurrentVersionTransition>;

  // Specifies object tags key and value.
  tags?: Map<string, string>;
}

export function s3_BucketV2LifecycleRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "abortIncompleteMultipartUploadDays",
      "Specifies the number of days after initiating a multipart upload when the multipart upload must be completed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Object key prefix identifying one or more objects to which the rule applies.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "noncurrentVersionExpirations",
      "Specifies when noncurrent object versions expire. See Noncurrent Version Expiration below for details.",
      s3_BucketV2LifecycleRuleNoncurrentVersionExpiration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Specifies object tags key and value.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "expirations",
      "Specifies a period in the object's expire. See Expiration below for details.",
      s3_BucketV2LifecycleRuleExpiration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Unique identifier for the rule. Must be less than or equal to 255 characters in length.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "transitions",
      "Specifies a period in the object's transitions. See Transition below for details.",
      s3_BucketV2LifecycleRuleTransition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Specifies lifecycle rule status.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "noncurrentVersionTransitions",
      "Specifies when noncurrent object versions transitions. See Noncurrent Version Transition below for details.",
      s3_BucketV2LifecycleRuleNoncurrentVersionTransition_GetTypes(),
      false,
      false,
    ),
  ];
}
