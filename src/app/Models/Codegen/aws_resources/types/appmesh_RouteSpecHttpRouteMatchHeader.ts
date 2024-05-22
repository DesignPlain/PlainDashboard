import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_RouteSpecHttpRouteMatchHeaderMatch,
  appmesh_RouteSpecHttpRouteMatchHeaderMatch_GetTypes,
} from "./appmesh_RouteSpecHttpRouteMatchHeaderMatch";

export interface appmesh_RouteSpecHttpRouteMatchHeader {
  // If `true`, the match is on the opposite of the `match` method and value. Default is `false`.
  invert?: boolean;

  // Method and value to match the header value sent with a request. Specify one match method.
  match?: appmesh_RouteSpecHttpRouteMatchHeaderMatch;

  // Name for the HTTP header in the client request that will be matched on.
  name?: string;
}

export function appmesh_RouteSpecHttpRouteMatchHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "invert",
      "If `true`, the match is on the opposite of the `match` method and value. Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "match",
      "Method and value to match the header value sent with a request. Specify one match method.",
      appmesh_RouteSpecHttpRouteMatchHeaderMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name for the HTTP header in the client request that will be matched on.",
      [],
      true,
      false,
    ),
  ];
}
