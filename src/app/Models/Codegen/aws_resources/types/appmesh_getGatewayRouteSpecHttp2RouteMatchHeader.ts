import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatch,
  appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatch_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatch";

export interface appmesh_getGatewayRouteSpecHttp2RouteMatchHeader {
  //
  matches?: Array<appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatch>;

  // Name of the gateway route.
  name?: string;

  //
  invert?: boolean;
}

export function appmesh_getGatewayRouteSpecHttp2RouteMatchHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatch_GetTypes(),
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
    new DynamicUIProps(InputType.Bool, "invert", "", [], true, false),
  ];
}
