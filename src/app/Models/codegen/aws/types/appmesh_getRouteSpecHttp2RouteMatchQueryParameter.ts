import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getRouteSpecHttp2RouteMatchQueryParameterMatch,
  appmesh_getRouteSpecHttp2RouteMatchQueryParameterMatch_GetTypes,
} from './appmesh_getRouteSpecHttp2RouteMatchQueryParameterMatch';

export interface appmesh_getRouteSpecHttp2RouteMatchQueryParameter {
  //
  matches?: Array<appmesh_getRouteSpecHttp2RouteMatchQueryParameterMatch>;

  // Name of the route.
  name?: string;
}

export function appmesh_getRouteSpecHttp2RouteMatchQueryParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'matches',
      '',
      () => appmesh_getRouteSpecHttp2RouteMatchQueryParameterMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the route.',
      () => [],
      true,
      false,
    ),
  ];
}
