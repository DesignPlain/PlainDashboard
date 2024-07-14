import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatch,
  appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatch_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatch";

export interface appmesh_getGatewayRouteSpecHttpRouteMatchHeader {
  //
  invert?: boolean;

  //
  matches?: Array<appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatch>;

  // Name of the gateway route.
  name?: string;
}

export function appmesh_getGatewayRouteSpecHttpRouteMatchHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the gateway route.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "invert", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
