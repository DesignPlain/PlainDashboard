import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_GatewayRouteSpecHttp2RouteMatchHeader,
  appmesh_GatewayRouteSpecHttp2RouteMatchHeader_GetTypes,
} from './appmesh_GatewayRouteSpecHttp2RouteMatchHeader';
import {
  appmesh_GatewayRouteSpecHttp2RouteMatchHostname,
  appmesh_GatewayRouteSpecHttp2RouteMatchHostname_GetTypes,
} from './appmesh_GatewayRouteSpecHttp2RouteMatchHostname';
import {
  appmesh_GatewayRouteSpecHttp2RouteMatchPath,
  appmesh_GatewayRouteSpecHttp2RouteMatchPath_GetTypes,
} from './appmesh_GatewayRouteSpecHttp2RouteMatchPath';
import {
  appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameter,
  appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameter_GetTypes,
} from './appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameter';

export interface appmesh_GatewayRouteSpecHttp2RouteMatch {
  // Client request headers to match on.
  headers?: Array<appmesh_GatewayRouteSpecHttp2RouteMatchHeader>;

  // Host name to match on.
  hostname?: appmesh_GatewayRouteSpecHttp2RouteMatchHostname;

  // Client request path to match on.
  path?: appmesh_GatewayRouteSpecHttp2RouteMatchPath;

  // The port number to match from the request.
  port?: number;

  // Path to match requests with. This parameter must always start with `/`, which by itself matches all requests to the virtual service name.
  prefix?: string;

  // Client request query parameters to match on.
  queryParameters?: Array<appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameter>;
}

export function appmesh_GatewayRouteSpecHttp2RouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'hostname',
      'Host name to match on.',
      () => appmesh_GatewayRouteSpecHttp2RouteMatchHostname_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'path',
      'Client request path to match on.',
      () => appmesh_GatewayRouteSpecHttp2RouteMatchPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'port',
      'The port number to match from the request.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'prefix',
      'Path to match requests with. This parameter must always start with `/`, which by itself matches all requests to the virtual service name.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'queryParameters',
      'Client request query parameters to match on.',
      () => appmesh_GatewayRouteSpecHttp2RouteMatchQueryParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'headers',
      'Client request headers to match on.',
      () => appmesh_GatewayRouteSpecHttp2RouteMatchHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
