import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface devopsguru_getResourceCollectionTag {
  // An AWS tag key that is used to identify the AWS resources that DevOps Guru analyzes.
  appBoundaryKey?: string;

  // Array of tag values.
  tagValues?: Array<string>;
}

export function devopsguru_getResourceCollectionTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'appBoundaryKey',
      'An AWS tag key that is used to identify the AWS resources that DevOps Guru analyzes.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'tagValues',
      'Array of tag values.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
