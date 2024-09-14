import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_RouteTableRoute {
  // Identifier of a VPC Endpoint.
  vpcEndpointId?: string;

  // Identifier of a carrier gateway. This attribute can only be used when the VPC contains a subnet which is associated with a Wavelength Zone.
  carrierGatewayId?: string;

  // The CIDR block of the route.
  cidrBlock?: string;

  // The Amazon Resource Name (ARN) of a core network.
  coreNetworkArn?: string;

  /*
The ID of a managed prefix list destination of the route.

One of the following target arguments must be supplied:
*/
  destinationPrefixListId?: string;

  // The Ipv6 CIDR block of the route.
  ipv6CidrBlock?: string;

  // Identifier of a Outpost local gateway.
  localGatewayId?: string;

  // Identifier of an EC2 Transit Gateway.
  transitGatewayId?: string;

  /*
Identifier of a VPC peering connection.

Note that the default route, mapping the VPC's CIDR block to "local", is created implicitly and cannot be specified.
*/
  vpcPeeringConnectionId?: string;

  // Identifier of a VPC Egress Only Internet Gateway.
  egressOnlyGatewayId?: string;

  // Identifier of a VPC internet gateway, virtual private gateway, or `local`. `local` routes cannot be created but can be adopted or imported. See the example above.
  gatewayId?: string;

  // Identifier of a VPC NAT gateway.
  natGatewayId?: string;

  // Identifier of an EC2 network interface.
  networkInterfaceId?: string;
}

export function ec2_RouteTableRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ipv6CidrBlock",
      "The Ipv6 CIDR block of the route.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "localGatewayId",
      "Identifier of a Outpost local gateway.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcPeeringConnectionId",
      'Identifier of a VPC peering connection.\n\nNote that the default route, mapping the VPC\'s CIDR block to "local", is created implicitly and cannot be specified.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gatewayId",
      "Identifier of a VPC internet gateway, virtual private gateway, or `local`. `local` routes cannot be created but can be adopted or imported. See the example above.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkInterfaceId",
      "Identifier of an EC2 network interface.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "carrierGatewayId",
      "Identifier of a carrier gateway. This attribute can only be used when the VPC contains a subnet which is associated with a Wavelength Zone.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cidrBlock",
      "The CIDR block of the route.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "coreNetworkArn",
      "The Amazon Resource Name (ARN) of a core network.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "destinationPrefixListId",
      "The ID of a managed prefix list destination of the route.\n\nOne of the following target arguments must be supplied:",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "transitGatewayId",
      "Identifier of an EC2 Transit Gateway.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "egressOnlyGatewayId",
      "Identifier of a VPC Egress Only Internet Gateway.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "natGatewayId",
      "Identifier of a VPC NAT gateway.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcEndpointId",
      "Identifier of a VPC Endpoint.",
      () => [],
      false,
      false,
    ),
  ];
}
