import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp,
  appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp_GetTypes,
} from './appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp';
import {
  appmesh_getVirtualGatewaySpecListenerConnectionPoolGrpc,
  appmesh_getVirtualGatewaySpecListenerConnectionPoolGrpc_GetTypes,
} from './appmesh_getVirtualGatewaySpecListenerConnectionPoolGrpc';
import {
  appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp2,
  appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp2_GetTypes,
} from './appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp2';

export interface appmesh_getVirtualGatewaySpecListenerConnectionPool {
  //
  http2s?: Array<appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp2>;

  //
  https?: Array<appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp>;

  //
  grpcs?: Array<appmesh_getVirtualGatewaySpecListenerConnectionPoolGrpc>;
}

export function appmesh_getVirtualGatewaySpecListenerConnectionPool_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'http2s',
      '',
      () => appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp2_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'https',
      '',
      () => appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'grpcs',
      '',
      () => appmesh_getVirtualGatewaySpecListenerConnectionPoolGrpc_GetTypes(),
      true,
      false,
    ),
  ];
}
