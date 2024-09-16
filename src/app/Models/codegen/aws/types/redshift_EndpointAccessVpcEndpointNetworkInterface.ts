import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface redshift_EndpointAccessVpcEndpointNetworkInterface {
  // The subnet identifier.
  subnetId?: string;

  // The Availability Zone.
  availabilityZone?: string;

  // The network interface identifier.
  networkInterfaceId?: string;

  // The IPv4 address of the network interface within the subnet.
  privateIpAddress?: string;
}

export function redshift_EndpointAccessVpcEndpointNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'subnetId',
      'The subnet identifier.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'availabilityZone',
      'The Availability Zone.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'networkInterfaceId',
      'The network interface identifier.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'privateIpAddress',
      'The IPv4 address of the network interface within the subnet.',
      () => [],
      false,
      false,
    ),
  ];
}
