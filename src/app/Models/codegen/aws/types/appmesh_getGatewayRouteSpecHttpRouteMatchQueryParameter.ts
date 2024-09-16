import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameterMatch,
  appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameterMatch_GetTypes,
} from './appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameterMatch';

export interface appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameter {
  //
  matches?: Array<appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameterMatch>;

  // Name of the gateway route.
  name?: string;
}

export function appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'matches',
      '',
      () =>
        appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameterMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the gateway route.',
      () => [],
      true,
      false,
    ),
  ];
}
