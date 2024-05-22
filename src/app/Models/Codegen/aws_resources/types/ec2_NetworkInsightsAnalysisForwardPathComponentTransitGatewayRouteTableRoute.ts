import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_NetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute {
  //
  destinationCidr?: string;

  //
  prefixListId?: string;

  //
  resourceId?: string;

  //
  resourceType?: string;

  //
  routeOrigin?: string;

  //
  state?: string;

  //
  attachmentId?: string;
}

export function ec2_NetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destinationCidr",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "prefixListId", "", [], false, false),
    new DynamicUIProps(InputType.String, "resourceId", "", [], false, false),
    new DynamicUIProps(InputType.String, "resourceType", "", [], false, false),
    new DynamicUIProps(InputType.String, "routeOrigin", "", [], false, false),
    new DynamicUIProps(InputType.String, "state", "", [], false, false),
    new DynamicUIProps(InputType.String, "attachmentId", "", [], false, false),
  ];
}
