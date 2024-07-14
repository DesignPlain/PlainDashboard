import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_GatewayRouteSpecHttpRouteMatchHostname,
  appmesh_GatewayRouteSpecHttpRouteMatchHostname_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRouteMatchHostname";
import {
  appmesh_GatewayRouteSpecHttpRouteMatchPath,
  appmesh_GatewayRouteSpecHttpRouteMatchPath_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRouteMatchPath";
import {
  appmesh_GatewayRouteSpecHttpRouteMatchQueryParameter,
  appmesh_GatewayRouteSpecHttpRouteMatchQueryParameter_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRouteMatchQueryParameter";
import {
  appmesh_GatewayRouteSpecHttpRouteMatchHeader,
  appmesh_GatewayRouteSpecHttpRouteMatchHeader_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRouteMatchHeader";

export interface appmesh_GatewayRouteSpecHttpRouteMatch {
  // Host name to match on.
  hostname?: appmesh_GatewayRouteSpecHttpRouteMatchHostname;

  // Client request path to match on.
  path?: appmesh_GatewayRouteSpecHttpRouteMatchPath;

  // The port number to match from the request.
  port?: number;

  // Header value sent by the client must begin with the specified characters.
  prefix?: string;

  // Client request query parameters to match on.
  queryParameters?: Array<appmesh_GatewayRouteSpecHttpRouteMatchQueryParameter>;

  // Client request headers to match on.
  headers?: Array<appmesh_GatewayRouteSpecHttpRouteMatchHeader>;
}

export function appmesh_GatewayRouteSpecHttpRouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "path",
      "Client request path to match on.",
      appmesh_GatewayRouteSpecHttpRouteMatchPath_GetTypes(),
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
      appmesh_GatewayRouteSpecHttpRouteMatchQueryParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Client request headers to match on.",
      appmesh_GatewayRouteSpecHttpRouteMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "hostname",
      "Host name to match on.",
      appmesh_GatewayRouteSpecHttpRouteMatchHostname_GetTypes(),
      false,
      false,
    ),
  ];
}
