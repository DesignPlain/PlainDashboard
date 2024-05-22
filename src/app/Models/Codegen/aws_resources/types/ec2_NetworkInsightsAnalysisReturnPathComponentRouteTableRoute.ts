import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_NetworkInsightsAnalysisReturnPathComponentRouteTableRoute {
  //
  vpcPeeringConnectionId?: string;

  //
  destinationPrefixListId?: string;

  //
  gatewayId?: string;

  //
  natGatewayId?: string;

  //
  origin?: string;

  //
  transitGatewayId?: string;

  //
  destinationCidr?: string;

  //
  egressOnlyInternetGatewayId?: string;

  //
  instanceId?: string;

  //
  networkInterfaceId?: string;
}

export function ec2_NetworkInsightsAnalysisReturnPathComponentRouteTableRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "gatewayId", "", [], false, false),
    new DynamicUIProps(InputType.String, "origin", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "transitGatewayId",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "instanceId", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "destinationPrefixListId",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "natGatewayId", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "destinationCidr",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "egressOnlyInternetGatewayId",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkInterfaceId",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcPeeringConnectionId",
      "",
      [],
      false,
      false,
    ),
  ];
}
