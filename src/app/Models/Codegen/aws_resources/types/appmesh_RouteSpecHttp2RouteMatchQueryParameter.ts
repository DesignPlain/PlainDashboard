import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_RouteSpecHttp2RouteMatchQueryParameterMatch,
  appmesh_RouteSpecHttp2RouteMatchQueryParameterMatch_GetTypes,
} from "./appmesh_RouteSpecHttp2RouteMatchQueryParameterMatch";

export interface appmesh_RouteSpecHttp2RouteMatchQueryParameter {
  // Criteria for determining an gRPC request match.
  match?: appmesh_RouteSpecHttp2RouteMatchQueryParameterMatch;

  // Name to use for the route. Must be between 1 and 255 characters in length.
  name?: string;
}

export function appmesh_RouteSpecHttp2RouteMatchQueryParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "match",
      "Criteria for determining an gRPC request match.",
      appmesh_RouteSpecHttp2RouteMatchQueryParameterMatch_GetTypes(),
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
