import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appstream_StackAccessEndpoint {
  /*
Type of the interface endpoint.
See the [`AccessEndpoint` AWS API documentation](https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AccessEndpoint.html) for valid values.
*/
  endpointType?: string;

  // ID of the VPC in which the interface endpoint is used.
  vpceId?: string;
}

export function appstream_StackAccessEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'endpointType',
      'Type of the interface endpoint.\nSee the [`AccessEndpoint` AWS API documentation](https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AccessEndpoint.html) for valid values.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpceId',
      'ID of the VPC in which the interface endpoint is used.',
      () => [],
      false,
      false,
    ),
  ];
}
