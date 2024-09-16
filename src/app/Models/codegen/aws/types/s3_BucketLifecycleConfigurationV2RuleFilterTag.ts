import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3_BucketLifecycleConfigurationV2RuleFilterTag {
  // Name of the object key.
  key?: string;

  // Value of the tag.
  value?: string;
}

export function s3_BucketLifecycleConfigurationV2RuleFilterTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'Name of the object key.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'Value of the tag.',
      () => [],
      true,
      false,
    ),
  ];
}
