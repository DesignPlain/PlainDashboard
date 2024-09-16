import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_GatewayRouteSpecHttp2RouteActionTargetVirtualService {
  // Name of the virtual service that traffic is routed to. Must be between 1 and 255 characters in length.
  virtualServiceName?: string;
}

export function appmesh_GatewayRouteSpecHttp2RouteActionTargetVirtualService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'virtualServiceName',
      'Name of the virtual service that traffic is routed to. Must be between 1 and 255 characters in length.',
      () => [],
      true,
      false,
    ),
  ];
}
