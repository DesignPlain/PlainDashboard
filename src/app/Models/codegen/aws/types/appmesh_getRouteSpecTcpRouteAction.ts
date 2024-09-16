import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getRouteSpecTcpRouteActionWeightedTarget,
  appmesh_getRouteSpecTcpRouteActionWeightedTarget_GetTypes,
} from './appmesh_getRouteSpecTcpRouteActionWeightedTarget';

export interface appmesh_getRouteSpecTcpRouteAction {
  //
  weightedTargets?: Array<appmesh_getRouteSpecTcpRouteActionWeightedTarget>;
}

export function appmesh_getRouteSpecTcpRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'weightedTargets',
      '',
      () => appmesh_getRouteSpecTcpRouteActionWeightedTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
