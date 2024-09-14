import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_BucketLifecycleRuleNoncurrentVersionExpiration,
  s3_BucketLifecycleRuleNoncurrentVersionExpiration_GetTypes,
} from "./s3_BucketLifecycleRuleNoncurrentVersionExpiration";
import {
  s3_BucketLifecycleRuleNoncurrentVersionTransition,
  s3_BucketLifecycleRuleNoncurrentVersionTransition_GetTypes,
} from "./s3_BucketLifecycleRuleNoncurrentVersionTransition";
import {
  s3_BucketLifecycleRuleTransition,
  s3_BucketLifecycleRuleTransition_GetTypes,
} from "./s3_BucketLifecycleRuleTransition";
import {
  s3_BucketLifecycleRuleExpiration,
  s3_BucketLifecycleRuleExpiration_GetTypes,
} from "./s3_BucketLifecycleRuleExpiration";

export interface s3_BucketLifecycleRule {
  // Specifies the number of days after initiating a multipart upload when the multipart upload must be completed.
  abortIncompleteMultipartUploadDays?: number;

  // Unique identifier for the rule. Must be less than or equal to 255 characters in length.
  id?: string;

  // Specifies when noncurrent object versions expire. See Noncurrent Version Expiration below for details.
  noncurrentVersionExpiration?: s3_BucketLifecycleRuleNoncurrentVersionExpiration;

  // Specifies when noncurrent object versions transitions. See Noncurrent Version Transition below for details.
  noncurrentVersionTransitions?: Array<s3_BucketLifecycleRuleNoncurrentVersionTransition>;

  // Specifies a period in the object's transitions. See Transition below for details.
  transitions?: Array<s3_BucketLifecycleRuleTransition>;

  // Specifies lifecycle rule status.
  enabled?: boolean;

  // Specifies a period in the object's expire. See Expiration below for details.
  expiration?: s3_BucketLifecycleRuleExpiration;

  // Object key prefix identifying one or more objects to which the rule applies.
  prefix?: string;

  // Specifies object tags key and value.
  tags?: Map<string, string>;
}

export function s3_BucketLifecycleRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "Unique identifier for the rule. Must be less than or equal to 255 characters in length.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Specifies lifecycle rule status.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "expiration",
      "Specifies a period in the object's expire. See Expiration below for details.",
      () => s3_BucketLifecycleRuleExpiration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Object key prefix identifying one or more objects to which the rule applies.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "abortIncompleteMultipartUploadDays",
      "Specifies the number of days after initiating a multipart upload when the multipart upload must be completed.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "noncurrentVersionExpiration",
      "Specifies when noncurrent object versions expire. See Noncurrent Version Expiration below for details.",
      () => s3_BucketLifecycleRuleNoncurrentVersionExpiration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "noncurrentVersionTransitions",
      "Specifies when noncurrent object versions transitions. See Noncurrent Version Transition below for details.",
      () => s3_BucketLifecycleRuleNoncurrentVersionTransition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "transitions",
      "Specifies a period in the object's transitions. See Transition below for details.",
      () => s3_BucketLifecycleRuleTransition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Specifies object tags key and value.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
