import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameterMatch,
  appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameterMatch_GetTypes,
} from "./appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameterMatch";

export interface appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameter {
  // The query parameter to match on.
  match?: appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameterMatch;

  // Name for the query parameter that will be matched on.
  name?: string;
}

export function appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "match",
      "The query parameter to match on.",
      appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameterMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name for the query parameter that will be matched on.",
      [],
      true,
      false,
    ),
  ];
}
