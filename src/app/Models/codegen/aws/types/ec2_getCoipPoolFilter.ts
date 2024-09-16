import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getCoipPoolFilter {
  /*
Name of the field to filter by, as defined by
[the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCoipPools.html).
*/
  name?: string;

  /*
Set of values that are accepted for the given field.
A COIP Pool will be selected if any one of the given values matches.
*/
  values?: Array<string>;
}

export function ec2_getCoipPoolFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the field to filter by, as defined by\n[the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCoipPools.html).',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      'Set of values that are accepted for the given field.\nA COIP Pool will be selected if any one of the given values matches.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
