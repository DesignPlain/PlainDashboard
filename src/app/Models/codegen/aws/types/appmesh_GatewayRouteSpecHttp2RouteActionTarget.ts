import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_GatewayRouteSpecHttp2RouteActionTargetVirtualService,
  appmesh_GatewayRouteSpecHttp2RouteActionTargetVirtualService_GetTypes,
} from './appmesh_GatewayRouteSpecHttp2RouteActionTargetVirtualService';

export interface appmesh_GatewayRouteSpecHttp2RouteActionTarget {
  // The port number that corresponds to the target for Virtual Service provider port. This is required when the provider (router or node) of the Virtual Service has multiple listeners.
  port?: number;

  // Virtual service gateway route target.
  virtualService?: appmesh_GatewayRouteSpecHttp2RouteActionTargetVirtualService;
}

export function appmesh_GatewayRouteSpecHttp2RouteActionTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'port',
      'The port number that corresponds to the target for Virtual Service provider port. This is required when the provider (router or node) of the Virtual Service has multiple listeners.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'virtualService',
      'Virtual service gateway route target.',
      () =>
        appmesh_GatewayRouteSpecHttp2RouteActionTargetVirtualService_GetTypes(),
      true,
      false,
    ),
  ];
}
