import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_NetworkInsightsAnalysisExplanationTransitGatewayRouteTableRoute {
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

export function ec2_NetworkInsightsAnalysisExplanationTransitGatewayRouteTableRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "routeOrigin",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "state", "", () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      "attachmentId",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "destinationCidr",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefixListId",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceId",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceType",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
