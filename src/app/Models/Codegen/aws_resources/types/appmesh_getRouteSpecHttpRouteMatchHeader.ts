import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getRouteSpecHttpRouteMatchHeaderMatch,
  appmesh_getRouteSpecHttpRouteMatchHeaderMatch_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteMatchHeaderMatch";

export interface appmesh_getRouteSpecHttpRouteMatchHeader {
  //
  invert?: boolean;

  //
  matches?: Array<appmesh_getRouteSpecHttpRouteMatchHeaderMatch>;

  // Name of the route.
  name?: string;
}

export function appmesh_getRouteSpecHttpRouteMatchHeader_GetTypes(): DynamicUIProps[] {
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
      appmesh_getRouteSpecHttpRouteMatchHeaderMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
