import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getGatewayRouteSpecGrpcRouteActionTargetVirtualService,
  appmesh_getGatewayRouteSpecGrpcRouteActionTargetVirtualService_GetTypes,
} from './appmesh_getGatewayRouteSpecGrpcRouteActionTargetVirtualService';

export interface appmesh_getGatewayRouteSpecGrpcRouteActionTarget {
  //
  port?: number;

  //
  virtualServices?: Array<appmesh_getGatewayRouteSpecGrpcRouteActionTargetVirtualService>;
}

export function appmesh_getGatewayRouteSpecGrpcRouteActionTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, 'port', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'virtualServices',
      '',
      () =>
        appmesh_getGatewayRouteSpecGrpcRouteActionTargetVirtualService_GetTypes(),
      true,
      false,
    ),
  ];
}
