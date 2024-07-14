import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameterMatch,
  appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameterMatch_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameterMatch";

export interface appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameter {
  //
  matches?: Array<appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameterMatch>;

  // Name of the gateway route.
  name?: string;
}

export function appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      appmesh_getGatewayRouteSpecHttp2RouteMatchQueryParameterMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the gateway route.",
      [],
      true,
      false,
    ),
  ];
}
