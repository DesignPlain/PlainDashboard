import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getRouteSpecHttpRouteMatchQueryParameterMatch,
  appmesh_getRouteSpecHttpRouteMatchQueryParameterMatch_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteMatchQueryParameterMatch";

export interface appmesh_getRouteSpecHttpRouteMatchQueryParameter {
  //
  matches?: Array<appmesh_getRouteSpecHttpRouteMatchQueryParameterMatch>;

  // Name of the route.
  name?: string;
}

export function appmesh_getRouteSpecHttpRouteMatchQueryParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      appmesh_getRouteSpecHttpRouteMatchQueryParameterMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the route.",
      [],
      true,
      false,
    ),
  ];
}
