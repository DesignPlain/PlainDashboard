import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface redshiftserverless_EndpointAccessVpcEndpointNetworkInterface {
  // The unique identifier of the network interface.
  networkInterfaceId?: string;

  // The IPv4 address of the network interface within the subnet.
  privateIpAddress?: string;

  // The unique identifier of the subnet.
  subnetId?: string;

  // The availability Zone.
  availabilityZone?: string;
}

export function redshiftserverless_EndpointAccessVpcEndpointNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "networkInterfaceId",
      "The unique identifier of the network interface.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateIpAddress",
      "The IPv4 address of the network interface within the subnet.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetId",
      "The unique identifier of the subnet.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "The availability Zone.",
      [],
      false,
      false,
    ),
  ];
}
