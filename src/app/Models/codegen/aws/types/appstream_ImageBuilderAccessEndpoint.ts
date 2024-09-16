import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appstream_ImageBuilderAccessEndpoint {
  // Type of interface endpoint. For valid values, refer to the [AWS documentation](https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AccessEndpoint.html).
  endpointType?: string;

  // Identifier (ID) of the interface VPC endpoint.
  vpceId?: string;
}

export function appstream_ImageBuilderAccessEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'vpceId',
      'Identifier (ID) of the interface VPC endpoint.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'endpointType',
      'Type of interface endpoint. For valid values, refer to the [AWS documentation](https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AccessEndpoint.html).',
      () => [],
      true,
      false,
    ),
  ];
}
