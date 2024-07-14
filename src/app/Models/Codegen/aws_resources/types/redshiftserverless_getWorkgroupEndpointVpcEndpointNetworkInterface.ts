import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface redshiftserverless_getWorkgroupEndpointVpcEndpointNetworkInterface {
  // The availability Zone.
  availabilityZone?: string;

  // The unique identifier of the network interface.
  networkInterfaceId?: string;

  // The IPv4 address of the network interface within the subnet.
  privateIpAddress?: string;

  // The unique identifier of the subnet.
  subnetId?: string;
}

export function redshiftserverless_getWorkgroupEndpointVpcEndpointNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "The availability Zone.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkInterfaceId",
      "The unique identifier of the network interface.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateIpAddress",
      "The IPv4 address of the network interface within the subnet.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetId",
      "The unique identifier of the subnet.",
      [],
      true,
      false,
    ),
  ];
}
