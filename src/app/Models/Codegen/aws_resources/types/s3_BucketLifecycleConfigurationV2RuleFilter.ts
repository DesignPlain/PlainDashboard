import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_BucketLifecycleConfigurationV2RuleFilterAnd,
  s3_BucketLifecycleConfigurationV2RuleFilterAnd_GetTypes,
} from "./s3_BucketLifecycleConfigurationV2RuleFilterAnd";
import {
  s3_BucketLifecycleConfigurationV2RuleFilterTag,
  s3_BucketLifecycleConfigurationV2RuleFilterTag_GetTypes,
} from "./s3_BucketLifecycleConfigurationV2RuleFilterTag";

export interface s3_BucketLifecycleConfigurationV2RuleFilter {
  // Configuration block used to apply a logical `AND` to two or more predicates. See below. The Lifecycle Rule will apply to any object matching all the predicates configured inside the `and` block.
  and?: s3_BucketLifecycleConfigurationV2RuleFilterAnd;

  // Minimum object size (in bytes) to which the rule applies.
  objectSizeGreaterThan?: string;

  // Maximum object size (in bytes) to which the rule applies.
  objectSizeLessThan?: string;

  // Prefix identifying one or more objects to which the rule applies. Defaults to an empty string (`""`) if not specified.
  prefix?: string;

  // Configuration block for specifying a tag key and value. See below.
  tag?: s3_BucketLifecycleConfigurationV2RuleFilterTag;
}

export function s3_BucketLifecycleConfigurationV2RuleFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "objectSizeGreaterThan",
      "Minimum object size (in bytes) to which the rule applies.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "objectSizeLessThan",
      "Maximum object size (in bytes) to which the rule applies.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      'Prefix identifying one or more objects to which the rule applies. Defaults to an empty string (`""`) if not specified.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tag",
      "Configuration block for specifying a tag key and value. See below.",
      s3_BucketLifecycleConfigurationV2RuleFilterTag_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "and",
      "Configuration block used to apply a logical `AND` to two or more predicates. See below. The Lifecycle Rule will apply to any object matching all the predicates configured inside the `and` block.",
      s3_BucketLifecycleConfigurationV2RuleFilterAnd_GetTypes(),
      false,
      false,
    ),
  ];
}
