import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_RouteSpecHttp2RouteMatchHeaderMatch,
  appmesh_RouteSpecHttp2RouteMatchHeaderMatch_GetTypes,
} from "./appmesh_RouteSpecHttp2RouteMatchHeaderMatch";

export interface appmesh_RouteSpecHttp2RouteMatchHeader {
  // If `true`, the match is on the opposite of the `match` method and value. Default is `false`.
  invert?: boolean;

  // Method and value to match the header value sent with a request. Specify one match method.
  match?: appmesh_RouteSpecHttp2RouteMatchHeaderMatch;

  // Name for the HTTP header in the client request that will be matched on.
  name?: string;
}

export function appmesh_RouteSpecHttp2RouteMatchHeader_GetTypes(): DynamicUIProps[] {
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
      appmesh_RouteSpecHttp2RouteMatchHeaderMatch_GetTypes(),
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
