import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getGatewayRouteSpecHttp2RouteActionRewrite,
  appmesh_getGatewayRouteSpecHttp2RouteActionRewrite_GetTypes,
} from './appmesh_getGatewayRouteSpecHttp2RouteActionRewrite';
import {
  appmesh_getGatewayRouteSpecHttp2RouteActionTarget,
  appmesh_getGatewayRouteSpecHttp2RouteActionTarget_GetTypes,
} from './appmesh_getGatewayRouteSpecHttp2RouteActionTarget';

export interface appmesh_getGatewayRouteSpecHttp2RouteAction {
  //
  rewrites?: Array<appmesh_getGatewayRouteSpecHttp2RouteActionRewrite>;

  //
  targets?: Array<appmesh_getGatewayRouteSpecHttp2RouteActionTarget>;
}

export function appmesh_getGatewayRouteSpecHttp2RouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'rewrites',
      '',
      () => appmesh_getGatewayRouteSpecHttp2RouteActionRewrite_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'targets',
      '',
      () => appmesh_getGatewayRouteSpecHttp2RouteActionTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
