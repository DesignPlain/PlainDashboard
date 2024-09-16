import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getRouteSpecHttp2RouteActionWeightedTarget,
  appmesh_getRouteSpecHttp2RouteActionWeightedTarget_GetTypes,
} from './appmesh_getRouteSpecHttp2RouteActionWeightedTarget';

export interface appmesh_getRouteSpecHttp2RouteAction {
  //
  weightedTargets?: Array<appmesh_getRouteSpecHttp2RouteActionWeightedTarget>;
}

export function appmesh_getRouteSpecHttp2RouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'weightedTargets',
      '',
      () => appmesh_getRouteSpecHttp2RouteActionWeightedTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
