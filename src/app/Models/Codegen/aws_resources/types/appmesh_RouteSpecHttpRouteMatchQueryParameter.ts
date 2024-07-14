import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_RouteSpecHttpRouteMatchQueryParameterMatch,
  appmesh_RouteSpecHttpRouteMatchQueryParameterMatch_GetTypes,
} from "./appmesh_RouteSpecHttpRouteMatchQueryParameterMatch";

export interface appmesh_RouteSpecHttpRouteMatchQueryParameter {
  // Criteria for determining an gRPC request match.
  match?: appmesh_RouteSpecHttpRouteMatchQueryParameterMatch;

  // Name to use for the route. Must be between 1 and 255 characters in length.
  name?: string;
}

export function appmesh_RouteSpecHttpRouteMatchQueryParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "match",
      "Criteria for determining an gRPC request match.",
      appmesh_RouteSpecHttpRouteMatchQueryParameterMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name to use for the route. Must be between 1 and 255 characters in length.",
      [],
      true,
      false,
    ),
  ];
}
