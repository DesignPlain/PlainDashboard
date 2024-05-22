import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_RouteSpecHttpRouteMatchHeader,
  appmesh_RouteSpecHttpRouteMatchHeader_GetTypes,
} from "./appmesh_RouteSpecHttpRouteMatchHeader";
import {
  appmesh_RouteSpecHttpRouteMatchPath,
  appmesh_RouteSpecHttpRouteMatchPath_GetTypes,
} from "./appmesh_RouteSpecHttpRouteMatchPath";
import {
  appmesh_RouteSpecHttpRouteMatchQueryParameter,
  appmesh_RouteSpecHttpRouteMatchQueryParameter_GetTypes,
} from "./appmesh_RouteSpecHttpRouteMatchQueryParameter";

export interface appmesh_RouteSpecHttpRouteMatch {
  // Client request headers to match on.
  headers?: Array<appmesh_RouteSpecHttpRouteMatchHeader>;

  // Client request header method to match on. Valid values: `GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH`.
  method?: string;

  // Client request path to match on.
  path?: appmesh_RouteSpecHttpRouteMatchPath;

  // The port number to match from the request.
  port?: number;

  // Header value sent by the client must begin with the specified characters.
  prefix?: string;

  // Client request query parameters to match on.
  queryParameters?: Array<appmesh_RouteSpecHttpRouteMatchQueryParameter>;

  // Client request header scheme to match on. Valid values: `http`, `https`.
  scheme?: string;
}

export function appmesh_RouteSpecHttpRouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "path",
      "Client request path to match on.",
      appmesh_RouteSpecHttpRouteMatchPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number to match from the request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Header value sent by the client must begin with the specified characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "queryParameters",
      "Client request query parameters to match on.",
      appmesh_RouteSpecHttpRouteMatchQueryParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scheme",
      "Client request header scheme to match on. Valid values: `http`, `https`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Client request headers to match on.",
      appmesh_RouteSpecHttpRouteMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "method",
      "Client request header method to match on. Valid values: `GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH`.",
      [],
      false,
      false,
    ),
  ];
}
