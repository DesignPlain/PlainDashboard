import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_NetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute {
  //
  routeOrigin?: string;

  //
  state?: string;

  //
  attachmentId?: string;

  //
  destinationCidr?: string;

  //
  prefixListId?: string;

  //
  resourceId?: string;

  //
  resourceType?: string;
}

export function ec2_NetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "resourceId", "", [], false, false),
    new DynamicUIProps(InputType.String, "resourceType", "", [], false, false),
    new DynamicUIProps(InputType.String, "routeOrigin", "", [], false, false),
    new DynamicUIProps(InputType.String, "state", "", [], false, false),
    new DynamicUIProps(InputType.String, "attachmentId", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "destinationCidr",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "prefixListId", "", [], false, false),
  ];
}
