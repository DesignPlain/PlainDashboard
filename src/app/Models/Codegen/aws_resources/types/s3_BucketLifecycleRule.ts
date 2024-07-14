import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketLifecycleRuleNoncurrentVersionTransition,
  s3_BucketLifecycleRuleNoncurrentVersionTransition_GetTypes,
} from "./s3_BucketLifecycleRuleNoncurrentVersionTransition";
import {
  s3_BucketLifecycleRuleExpiration,
  s3_BucketLifecycleRuleExpiration_GetTypes,
} from "./s3_BucketLifecycleRuleExpiration";
import {
  s3_BucketLifecycleRuleNoncurrentVersionExpiration,
  s3_BucketLifecycleRuleNoncurrentVersionExpiration_GetTypes,
} from "./s3_BucketLifecycleRuleNoncurrentVersionExpiration";
import {
  s3_BucketLifecycleRuleTransition,
  s3_BucketLifecycleRuleTransition_GetTypes,
} from "./s3_BucketLifecycleRuleTransition";

export interface s3_BucketLifecycleRule {
  // Specifies lifecycle rule status.
  enabled?: boolean;

  // Unique identifier for the rule. Must be less than or equal to 255 characters in length.
  id?: string;

  /*
Specifies when noncurrent object versions transitions (documented below).

At least one of `abort_incomplete_multipart_upload_days`, `expiration`, `transition`, `noncurrent_version_expiration`, `noncurrent_version_transition` must be specified.
*/
  noncurrentVersionTransitions?: Array<s3_BucketLifecycleRuleNoncurrentVersionTransition>;

  // Specifies the number of days after initiating a multipart upload when the multipart upload must be completed.
  abortIncompleteMultipartUploadDays?: number;

  // Specifies a period in the object's expire (documented below).
  expiration?: s3_BucketLifecycleRuleExpiration;

  // Specifies when noncurrent object versions expire (documented below).
  noncurrentVersionExpiration?: s3_BucketLifecycleRuleNoncurrentVersionExpiration;

  // Object key prefix identifying one or more objects to which the rule applies.
  prefix?: string;

  // Specifies object tags key and value.
  tags?: Map<string, string>;

  // Specifies a period in the object's transitions (documented below).
  transitions?: Array<s3_BucketLifecycleRuleTransition>;
}

export function s3_BucketLifecycleRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "noncurrentVersionExpiration",
      "Specifies when noncurrent object versions expire (documented below).",
      s3_BucketLifecycleRuleNoncurrentVersionExpiration_GetTypes(),
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
      "transitions",
      "Specifies a period in the object's transitions (documented below).",
      s3_BucketLifecycleRuleTransition_GetTypes(),
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
      InputType.String,
      "id",
      "Unique identifier for the rule. Must be less than or equal to 255 characters in length.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "noncurrentVersionTransitions",
      "Specifies when noncurrent object versions transitions (documented below).\n\nAt least one of `abort_incomplete_multipart_upload_days`, `expiration`, `transition`, `noncurrent_version_expiration`, `noncurrent_version_transition` must be specified.",
      s3_BucketLifecycleRuleNoncurrentVersionTransition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "abortIncompleteMultipartUploadDays",
      "Specifies the number of days after initiating a multipart upload when the multipart upload must be completed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "expiration",
      "Specifies a period in the object's expire (documented below).",
      s3_BucketLifecycleRuleExpiration_GetTypes(),
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
  ];
}
