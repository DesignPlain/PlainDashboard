import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2transitgateway_getAttachmentFilter {
  // Name of the field to filter by, as defined by the [underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayAttachments.html).
  name?: string;

  // List of one or more values for the filter.
  values?: Array<string>;
}

export function ec2transitgateway_getAttachmentFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'values',
      'List of one or more values for the filter.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the field to filter by, as defined by the [underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayAttachments.html).',
      () => [],
      true,
      false,
    ),
  ];
}
