import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getVpcIpamPoolFilter {
  // The filter values. Filter values are case-sensitive.
  values?: Array<string>;

  // The name of the filter. Filter names are case-sensitive.
  name?: string;
}

export function ec2_getVpcIpamPoolFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'values',
      'The filter values. Filter values are case-sensitive.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the filter. Filter names are case-sensitive.',
      () => [],
      true,
      false,
    ),
  ];
}
