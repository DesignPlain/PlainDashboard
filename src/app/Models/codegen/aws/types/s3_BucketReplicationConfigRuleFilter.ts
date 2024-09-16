import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketReplicationConfigRuleFilterAnd,
  s3_BucketReplicationConfigRuleFilterAnd_GetTypes,
} from './s3_BucketReplicationConfigRuleFilterAnd';
import {
  s3_BucketReplicationConfigRuleFilterTag,
  s3_BucketReplicationConfigRuleFilterTag_GetTypes,
} from './s3_BucketReplicationConfigRuleFilterTag';

export interface s3_BucketReplicationConfigRuleFilter {
  // Configuration block for specifying rule filters. This element is required only if you specify more than one filter. See and below for more details.
  and?: s3_BucketReplicationConfigRuleFilterAnd;

  // Object key name prefix that identifies subset of objects to which the rule applies. Must be less than or equal to 1024 characters in length.
  prefix?: string;

  // Configuration block for specifying a tag key and value. See below.
  tag?: s3_BucketReplicationConfigRuleFilterTag;
}

export function s3_BucketReplicationConfigRuleFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'and',
      'Configuration block for specifying rule filters. This element is required only if you specify more than one filter. See and below for more details.',
      () => s3_BucketReplicationConfigRuleFilterAnd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'prefix',
      'Object key name prefix that identifies subset of objects to which the rule applies. Must be less than or equal to 1024 characters in length.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'tag',
      'Configuration block for specifying a tag key and value. See below.',
      () => s3_BucketReplicationConfigRuleFilterTag_GetTypes(),
      false,
      false,
    ),
  ];
}
