import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getNetworkInsightsAnalysisExplanationTransitGatewayRouteTableRoute {
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

  //
  destinationCidr?: string;
}

export function ec2_getNetworkInsightsAnalysisExplanationTransitGatewayRouteTableRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefixListId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceType",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "routeOrigin",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "state", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "attachmentId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "destinationCidr",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
