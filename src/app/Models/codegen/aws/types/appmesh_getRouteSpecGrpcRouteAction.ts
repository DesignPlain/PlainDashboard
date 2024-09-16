import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getRouteSpecGrpcRouteActionWeightedTarget,
  appmesh_getRouteSpecGrpcRouteActionWeightedTarget_GetTypes,
} from './appmesh_getRouteSpecGrpcRouteActionWeightedTarget';

export interface appmesh_getRouteSpecGrpcRouteAction {
  //
  weightedTargets?: Array<appmesh_getRouteSpecGrpcRouteActionWeightedTarget>;
}

export function appmesh_getRouteSpecGrpcRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'weightedTargets',
      '',
      () => appmesh_getRouteSpecGrpcRouteActionWeightedTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
