import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_RouteSpecHttp2RouteMatchQueryParameterMatch,
  appmesh_RouteSpecHttp2RouteMatchQueryParameterMatch_GetTypes,
} from "./appmesh_RouteSpecHttp2RouteMatchQueryParameterMatch";

export interface appmesh_RouteSpecHttp2RouteMatchQueryParameter {
  // The query parameter to match on.
  match?: appmesh_RouteSpecHttp2RouteMatchQueryParameterMatch;

  // Name for the query parameter that will be matched on.
  name?: string;
}

export function appmesh_RouteSpecHttp2RouteMatchQueryParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name for the query parameter that will be matched on.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "match",
      "The query parameter to match on.",
      () => appmesh_RouteSpecHttp2RouteMatchQueryParameterMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
