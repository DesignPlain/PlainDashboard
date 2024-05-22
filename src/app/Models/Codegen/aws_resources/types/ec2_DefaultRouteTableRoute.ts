import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_DefaultRouteTableRoute {
  /*
The ID of a managed prefix list destination of the route.

One of the following target arguments must be supplied:
*/
  destinationPrefixListId?: string;

  // Identifier of an EC2 instance.
  instanceId?: string;

  // Identifier of a VPC NAT gateway.
  natGatewayId?: string;

  // Identifier of an EC2 network interface.
  networkInterfaceId?: string;

  /*
Identifier of a VPC peering connection.

Note that the default route, mapping the VPC's CIDR block to "local", is created implicitly and cannot be specified.
*/
  vpcPeeringConnectionId?: string;

  // The CIDR block of the route.
  cidrBlock?: string;

  // The Amazon Resource Name (ARN) of a core network.
  coreNetworkArn?: string;

  // Identifier of a VPC Egress Only Internet Gateway.
  egressOnlyGatewayId?: string;

  // Identifier of a VPC internet gateway or a virtual private gateway.
  gatewayId?: string;

  // The Ipv6 CIDR block of the route
  ipv6CidrBlock?: string;

  // Identifier of an EC2 Transit Gateway.
  transitGatewayId?: string;

  // Identifier of a VPC Endpoint. This route must be removed prior to VPC Endpoint deletion.
  vpcEndpointId?: string;
}

export function ec2_DefaultRouteTableRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "gatewayId",
      "Identifier of a VPC internet gateway or a virtual private gateway.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcEndpointId",
      "Identifier of a VPC Endpoint. This route must be removed prior to VPC Endpoint deletion.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceId",
      "Identifier of an EC2 instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkInterfaceId",
      "Identifier of an EC2 network interface.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcPeeringConnectionId",
      'Identifier of a VPC peering connection.\n\nNote that the default route, mapping the VPC\'s CIDR block to "local", is created implicitly and cannot be specified.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cidrBlock",
      "The CIDR block of the route.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "coreNetworkArn",
      "The Amazon Resource Name (ARN) of a core network.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "egressOnlyGatewayId",
      "Identifier of a VPC Egress Only Internet Gateway.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipv6CidrBlock",
      "The Ipv6 CIDR block of the route",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "transitGatewayId",
      "Identifier of an EC2 Transit Gateway.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "destinationPrefixListId",
      "The ID of a managed prefix list destination of the route.\n\nOne of the following target arguments must be supplied:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "natGatewayId",
      "Identifier of a VPC NAT gateway.",
      [],
      false,
      false,
    ),
  ];
}
