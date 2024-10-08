import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3_BucketIntelligentTieringConfigurationFilter {
  // Object key name prefix that identifies the subset of objects to which the configuration applies.
  prefix?: string;

  // All of these tags must exist in the object's tag set in order for the configuration to apply.
  tags?: Map<string, string>;
}

export function s3_BucketIntelligentTieringConfigurationFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'prefix',
      'Object key name prefix that identifies the subset of objects to which the configuration applies.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'tags',
      "All of these tags must exist in the object's tag set in order for the configuration to apply.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
