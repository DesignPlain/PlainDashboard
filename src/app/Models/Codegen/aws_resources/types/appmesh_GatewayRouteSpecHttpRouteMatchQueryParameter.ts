import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_GatewayRouteSpecHttpRouteMatchQueryParameterMatch,
  appmesh_GatewayRouteSpecHttpRouteMatchQueryParameterMatch_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRouteMatchQueryParameterMatch";

export interface appmesh_GatewayRouteSpecHttpRouteMatchQueryParameter {
  // The query parameter to match on.
  match?: appmesh_GatewayRouteSpecHttpRouteMatchQueryParameterMatch;

  // Name for the query parameter that will be matched on.
  name?: string;
}

export function appmesh_GatewayRouteSpecHttpRouteMatchQueryParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name for the query parameter that will be matched on.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "match",
      "The query parameter to match on.",
      appmesh_GatewayRouteSpecHttpRouteMatchQueryParameterMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
