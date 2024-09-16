import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_RouteSpecHttpRouteActionWeightedTarget,
  appmesh_RouteSpecHttpRouteActionWeightedTarget_GetTypes,
} from './appmesh_RouteSpecHttpRouteActionWeightedTarget';

export interface appmesh_RouteSpecHttpRouteAction {
  /*
Targets that traffic is routed to when a request matches the route.
You can specify one or more targets and their relative weights with which to distribute traffic.
*/
  weightedTargets?: Array<appmesh_RouteSpecHttpRouteActionWeightedTarget>;
}

export function appmesh_RouteSpecHttpRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'weightedTargets',
      'Targets that traffic is routed to when a request matches the route.\nYou can specify one or more targets and their relative weights with which to distribute traffic.',
      () => appmesh_RouteSpecHttpRouteActionWeightedTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
