import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getGatewayRouteSpecHttp2RouteActionTargetVirtualService,
  appmesh_getGatewayRouteSpecHttp2RouteActionTargetVirtualService_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteActionTargetVirtualService";

export interface appmesh_getGatewayRouteSpecHttp2RouteActionTarget {
  //
  port?: number;

  //
  virtualServices?: Array<appmesh_getGatewayRouteSpecHttp2RouteActionTargetVirtualService>;
}

export function appmesh_getGatewayRouteSpecHttp2RouteActionTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "port", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "virtualServices",
      "",
      () =>
        appmesh_getGatewayRouteSpecHttp2RouteActionTargetVirtualService_GetTypes(),
      true,
      false,
    ),
  ];
}
