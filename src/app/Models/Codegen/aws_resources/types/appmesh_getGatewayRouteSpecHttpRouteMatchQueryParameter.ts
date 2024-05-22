import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameterMatch,
  appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameterMatch_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameterMatch";

export interface appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameter {
  //
  matches?: Array<appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameterMatch>;

  // Name of the gateway route.
  name?: string;
}

export function appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the gateway route.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameterMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
