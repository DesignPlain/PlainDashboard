import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getNetworkInsightsAnalysisForwardPathComponentRouteTableRoute {
  //
  egressOnlyInternetGatewayId?: string;

  //
  gatewayId?: string;

  //
  transitGatewayId?: string;

  //
  vpcPeeringConnectionId?: string;

  //
  origin?: string;

  //
  destinationCidr?: string;

  //
  destinationPrefixListId?: string;

  //
  instanceId?: string;

  //
  natGatewayId?: string;

  //
  networkInterfaceId?: string;
}

export function ec2_getNetworkInsightsAnalysisForwardPathComponentRouteTableRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "origin", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "networkInterfaceId",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "gatewayId", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "transitGatewayId",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "destinationCidr",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "destinationPrefixListId",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "instanceId", "", [], true, false),
    new DynamicUIProps(InputType.String, "natGatewayId", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "egressOnlyInternetGatewayId",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcPeeringConnectionId",
      "",
      [],
      true,
      false,
    ),
  ];
}
