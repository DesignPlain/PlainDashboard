import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface globalaccelerator_CustomRoutingEndpointGroupEndpointConfiguration {
  // An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID.
  endpointId?: string;
}

export function globalaccelerator_CustomRoutingEndpointGroupEndpointConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'endpointId',
      'An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID.',
      () => [],
      false,
      false,
    ),
  ];
}
