import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_RouteSpecHttp2RouteMatchHeader,
  appmesh_RouteSpecHttp2RouteMatchHeader_GetTypes,
} from "./appmesh_RouteSpecHttp2RouteMatchHeader";
import {
  appmesh_RouteSpecHttp2RouteMatchPath,
  appmesh_RouteSpecHttp2RouteMatchPath_GetTypes,
} from "./appmesh_RouteSpecHttp2RouteMatchPath";
import {
  appmesh_RouteSpecHttp2RouteMatchQueryParameter,
  appmesh_RouteSpecHttp2RouteMatchQueryParameter_GetTypes,
} from "./appmesh_RouteSpecHttp2RouteMatchQueryParameter";

export interface appmesh_RouteSpecHttp2RouteMatch {
  // Client request header method to match on. Valid values: `GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH`.
  method?: string;

  // Client request path to match on.
  path?: appmesh_RouteSpecHttp2RouteMatchPath;

  // The port number to match from the request.
  port?: number;

  // Header value sent by the client must begin with the specified characters.
  prefix?: string;

  // Client request query parameters to match on.
  queryParameters?: Array<appmesh_RouteSpecHttp2RouteMatchQueryParameter>;

  // Client request header scheme to match on. Valid values: `http`, `https`.
  scheme?: string;

  // Client request headers to match on.
  headers?: Array<appmesh_RouteSpecHttp2RouteMatchHeader>;
}

export function appmesh_RouteSpecHttp2RouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "queryParameters",
      "Client request query parameters to match on.",
      appmesh_RouteSpecHttp2RouteMatchQueryParameter_GetTypes(),
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
      appmesh_RouteSpecHttp2RouteMatchHeader_GetTypes(),
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
    new DynamicUIProps(
      InputType.Object,
      "path",
      "Client request path to match on.",
      appmesh_RouteSpecHttp2RouteMatchPath_GetTypes(),
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
  ];
}
