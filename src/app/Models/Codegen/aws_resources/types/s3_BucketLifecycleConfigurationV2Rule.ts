import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_BucketLifecycleConfigurationV2RuleAbortIncompleteMultipartUpload,
  s3_BucketLifecycleConfigurationV2RuleAbortIncompleteMultipartUpload_GetTypes,
} from "./s3_BucketLifecycleConfigurationV2RuleAbortIncompleteMultipartUpload";
import {
  s3_BucketLifecycleConfigurationV2RuleExpiration,
  s3_BucketLifecycleConfigurationV2RuleExpiration_GetTypes,
} from "./s3_BucketLifecycleConfigurationV2RuleExpiration";
import {
  s3_BucketLifecycleConfigurationV2RuleFilter,
  s3_BucketLifecycleConfigurationV2RuleFilter_GetTypes,
} from "./s3_BucketLifecycleConfigurationV2RuleFilter";
import {
  s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionExpiration,
  s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionExpiration_GetTypes,
} from "./s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionExpiration";
import {
  s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionTransition,
  s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionTransition_GetTypes,
} from "./s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionTransition";
import {
  s3_BucketLifecycleConfigurationV2RuleTransition,
  s3_BucketLifecycleConfigurationV2RuleTransition_GetTypes,
} from "./s3_BucketLifecycleConfigurationV2RuleTransition";

export interface s3_BucketLifecycleConfigurationV2Rule {
  // Set of configuration blocks that specify the transition rule for the lifecycle rule that describes when noncurrent objects transition to a specific storage class. See below.
  noncurrentVersionTransitions?: Array<s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionTransition>;

  // Whether the rule is currently being applied. Valid values: `Enabled` or `Disabled`.
  status?: string;

  // Set of configuration blocks that specify when an Amazon S3 object transitions to a specified storage class. See below.
  transitions?: Array<s3_BucketLifecycleConfigurationV2RuleTransition>;

  // --DEPRECATED-- Use `filter` instead. This has been deprecated by Amazon S3. Prefix identifying one or more objects to which the rule applies. Defaults to an empty string (`""`) if `filter` is not specified.
  prefix?: string;

  // Configuration block that specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. See below.
  abortIncompleteMultipartUpload?: s3_BucketLifecycleConfigurationV2RuleAbortIncompleteMultipartUpload;

  // Configuration block that specifies the expiration for the lifecycle of the object in the form of date, days and, whether the object has a delete marker. See below.
  expiration?: s3_BucketLifecycleConfigurationV2RuleExpiration;

  // Configuration block used to identify objects that a Lifecycle Rule applies to. See below. If not specified, the `rule` will default to using `prefix`.
  filter?: s3_BucketLifecycleConfigurationV2RuleFilter;

  // Unique identifier for the rule. The value cannot be longer than 255 characters.
  id?: string;

  // Configuration block that specifies when noncurrent object versions expire. See below.
  noncurrentVersionExpiration?: s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionExpiration;
}

export function s3_BucketLifecycleConfigurationV2Rule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "Whether the rule is currently being applied. Valid values: `Enabled` or `Disabled`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      '**DEPRECATED** Use `filter` instead. This has been deprecated by Amazon S3. Prefix identifying one or more objects to which the rule applies. Defaults to an empty string (`""`) if `filter` is not specified.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "filter",
      "Configuration block used to identify objects that a Lifecycle Rule applies to. See below. If not specified, the `rule` will default to using `prefix`.",
      s3_BucketLifecycleConfigurationV2RuleFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Unique identifier for the rule. The value cannot be longer than 255 characters.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "noncurrentVersionTransitions",
      "Set of configuration blocks that specify the transition rule for the lifecycle rule that describes when noncurrent objects transition to a specific storage class. See below.",
      s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionTransition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "abortIncompleteMultipartUpload",
      "Configuration block that specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. See below.",
      s3_BucketLifecycleConfigurationV2RuleAbortIncompleteMultipartUpload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "expiration",
      "Configuration block that specifies the expiration for the lifecycle of the object in the form of date, days and, whether the object has a delete marker. See below.",
      s3_BucketLifecycleConfigurationV2RuleExpiration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "noncurrentVersionExpiration",
      "Configuration block that specifies when noncurrent object versions expire. See below.",
      s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionExpiration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "transitions",
      "Set of configuration blocks that specify when an Amazon S3 object transitions to a specified storage class. See below.",
      s3_BucketLifecycleConfigurationV2RuleTransition_GetTypes(),
      false,
      false,
    ),
  ];
}
