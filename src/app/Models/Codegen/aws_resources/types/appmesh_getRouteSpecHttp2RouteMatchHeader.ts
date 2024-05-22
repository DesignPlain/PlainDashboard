import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getRouteSpecHttp2RouteMatchHeaderMatch,
  appmesh_getRouteSpecHttp2RouteMatchHeaderMatch_GetTypes,
} from "./appmesh_getRouteSpecHttp2RouteMatchHeaderMatch";

export interface appmesh_getRouteSpecHttp2RouteMatchHeader {
  //
  invert?: boolean;

  //
  matches?: Array<appmesh_getRouteSpecHttp2RouteMatchHeaderMatch>;

  // Name of the route.
  name?: string;
}

export function appmesh_getRouteSpecHttp2RouteMatchHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the route.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "invert", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      appmesh_getRouteSpecHttp2RouteMatchHeaderMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
