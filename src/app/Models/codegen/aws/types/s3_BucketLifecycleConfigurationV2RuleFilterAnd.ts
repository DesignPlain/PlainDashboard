import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3_BucketLifecycleConfigurationV2RuleFilterAnd {
  // Maximum object size to which the rule applies. Value must be at least `1` if specified.
  objectSizeLessThan?: number;

  // Prefix identifying one or more objects to which the rule applies.
  prefix?: string;

  // Key-value map of resource tags. All of these tags must exist in the object's tag set in order for the rule to apply.
  tags?: Map<string, string>;

  // Minimum object size to which the rule applies. Value must be at least `0` if specified.
  objectSizeGreaterThan?: number;
}

export function s3_BucketLifecycleConfigurationV2RuleFilterAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'objectSizeLessThan',
      'Maximum object size to which the rule applies. Value must be at least `1` if specified.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'prefix',
      'Prefix identifying one or more objects to which the rule applies.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'tags',
      "Key-value map of resource tags. All of these tags must exist in the object's tag set in order for the rule to apply.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'objectSizeGreaterThan',
      'Minimum object size to which the rule applies. Value must be at least `0` if specified.',
      () => [],
      false,
      false,
    ),
  ];
}
