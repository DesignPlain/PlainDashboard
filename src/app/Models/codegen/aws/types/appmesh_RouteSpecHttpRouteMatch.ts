import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_RouteSpecHttpRouteMatchQueryParameter,
  appmesh_RouteSpecHttpRouteMatchQueryParameter_GetTypes,
} from "./appmesh_RouteSpecHttpRouteMatchQueryParameter";
import {
  appmesh_RouteSpecHttpRouteMatchHeader,
  appmesh_RouteSpecHttpRouteMatchHeader_GetTypes,
} from "./appmesh_RouteSpecHttpRouteMatchHeader";
import {
  appmesh_RouteSpecHttpRouteMatchPath,
  appmesh_RouteSpecHttpRouteMatchPath_GetTypes,
} from "./appmesh_RouteSpecHttpRouteMatchPath";

export interface appmesh_RouteSpecHttpRouteMatch {
  // The port number to match from the request.
  port?: number;

  /*
Path with which to match requests.
This parameter must always start with /, which by itself matches all requests to the virtual router service name.
*/
  prefix?: string;

  // Client request query parameters to match on.
  queryParameters?: Array<appmesh_RouteSpecHttpRouteMatchQueryParameter>;

  // Client request header scheme to match on. Valid values: `http`, `https`.
  scheme?: string;

  // Client request headers to match on.
  headers?: Array<appmesh_RouteSpecHttpRouteMatchHeader>;

  // Client request header method to match on. Valid values: `GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH`.
  method?: string;

  // Client request path to match on.
  path?: appmesh_RouteSpecHttpRouteMatchPath;
}

export function appmesh_RouteSpecHttpRouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "path",
      "Client request path to match on.",
      () => appmesh_RouteSpecHttpRouteMatchPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number to match from the request.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Path with which to match requests.\nThis parameter must always start with /, which by itself matches all requests to the virtual router service name.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "queryParameters",
      "Client request query parameters to match on.",
      () => appmesh_RouteSpecHttpRouteMatchQueryParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scheme",
      "Client request header scheme to match on. Valid values: `http`, `https`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Client request headers to match on.",
      () => appmesh_RouteSpecHttpRouteMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "method",
      "Client request header method to match on. Valid values: `GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH`.",
      () => [],
      false,
      false,
    ),
  ];
}
