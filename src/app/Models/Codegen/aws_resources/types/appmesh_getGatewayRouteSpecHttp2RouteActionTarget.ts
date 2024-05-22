import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getGatewayRouteSpecHttp2RouteActionTargetVirtualService,
  appmesh_getGatewayRouteSpecHttp2RouteActionTargetVirtualService_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteActionTargetVirtualService";

export interface appmesh_getGatewayRouteSpecHttp2RouteActionTarget {
  //
  virtualServices?: Array<appmesh_getGatewayRouteSpecHttp2RouteActionTargetVirtualService>;

  //
  port?: number;
}

export function appmesh_getGatewayRouteSpecHttp2RouteActionTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "virtualServices",
      "",
      appmesh_getGatewayRouteSpecHttp2RouteActionTargetVirtualService_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "port", "", [], true, false),
  ];
}
