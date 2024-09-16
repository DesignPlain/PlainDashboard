import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_GatewayRouteSpecHttpRouteMatchHeader,
  appmesh_GatewayRouteSpecHttpRouteMatchHeader_GetTypes,
} from './appmesh_GatewayRouteSpecHttpRouteMatchHeader';
import {
  appmesh_GatewayRouteSpecHttpRouteMatchHostname,
  appmesh_GatewayRouteSpecHttpRouteMatchHostname_GetTypes,
} from './appmesh_GatewayRouteSpecHttpRouteMatchHostname';
import {
  appmesh_GatewayRouteSpecHttpRouteMatchPath,
  appmesh_GatewayRouteSpecHttpRouteMatchPath_GetTypes,
} from './appmesh_GatewayRouteSpecHttpRouteMatchPath';
import {
  appmesh_GatewayRouteSpecHttpRouteMatchQueryParameter,
  appmesh_GatewayRouteSpecHttpRouteMatchQueryParameter_GetTypes,
} from './appmesh_GatewayRouteSpecHttpRouteMatchQueryParameter';

export interface appmesh_GatewayRouteSpecHttpRouteMatch {
  // Client request headers to match on.
  headers?: Array<appmesh_GatewayRouteSpecHttpRouteMatchHeader>;

  // Host name to match on.
  hostname?: appmesh_GatewayRouteSpecHttpRouteMatchHostname;

  // Client request path to match on.
  path?: appmesh_GatewayRouteSpecHttpRouteMatchPath;

  // The port number to match from the request.
  port?: number;

  // Path to match requests with. This parameter must always start with `/`, which by itself matches all requests to the virtual service name.
  prefix?: string;

  // Client request query parameters to match on.
  queryParameters?: Array<appmesh_GatewayRouteSpecHttpRouteMatchQueryParameter>;
}

export function appmesh_GatewayRouteSpecHttpRouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'hostname',
      'Host name to match on.',
      () => appmesh_GatewayRouteSpecHttpRouteMatchHostname_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'path',
      'Client request path to match on.',
      () => appmesh_GatewayRouteSpecHttpRouteMatchPath_GetTypes(),
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
      () => appmesh_GatewayRouteSpecHttpRouteMatchQueryParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'headers',
      'Client request headers to match on.',
      () => appmesh_GatewayRouteSpecHttpRouteMatchHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
