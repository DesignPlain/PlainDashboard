import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getGatewayRouteSpecHttpRouteActionTargetVirtualService,
  appmesh_getGatewayRouteSpecHttpRouteActionTargetVirtualService_GetTypes,
} from './appmesh_getGatewayRouteSpecHttpRouteActionTargetVirtualService';

export interface appmesh_getGatewayRouteSpecHttpRouteActionTarget {
  //
  port?: number;

  //
  virtualServices?: Array<appmesh_getGatewayRouteSpecHttpRouteActionTargetVirtualService>;
}

export function appmesh_getGatewayRouteSpecHttpRouteActionTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, 'port', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'virtualServices',
      '',
      () =>
        appmesh_getGatewayRouteSpecHttpRouteActionTargetVirtualService_GetTypes(),
      true,
      false,
    ),
  ];
}
