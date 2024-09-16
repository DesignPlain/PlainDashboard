import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface index_getAvailabilityZoneFilter {
  // Name of the filter field. Valid values can be found in the [EC2 DescribeAvailabilityZones API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html).
  name?: string;

  // Set of values that are accepted for the given filter field. Results will be selected if any given value matches.
  values?: Array<string>;
}

export function index_getAvailabilityZoneFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the filter field. Valid values can be found in the [EC2 DescribeAvailabilityZones API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html).',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      'Set of values that are accepted for the given filter field. Results will be selected if any given value matches.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
