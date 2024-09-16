import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_RouteSpecTcpRouteMatch,
  appmesh_RouteSpecTcpRouteMatch_GetTypes,
} from './appmesh_RouteSpecTcpRouteMatch';
import {
  appmesh_RouteSpecTcpRouteTimeout,
  appmesh_RouteSpecTcpRouteTimeout_GetTypes,
} from './appmesh_RouteSpecTcpRouteTimeout';
import {
  appmesh_RouteSpecTcpRouteAction,
  appmesh_RouteSpecTcpRouteAction_GetTypes,
} from './appmesh_RouteSpecTcpRouteAction';

export interface appmesh_RouteSpecTcpRoute {
  // Action to take if a match is determined.
  action?: appmesh_RouteSpecTcpRouteAction;

  //
  match?: appmesh_RouteSpecTcpRouteMatch;

  // Types of timeouts.
  timeout?: appmesh_RouteSpecTcpRouteTimeout;
}

export function appmesh_RouteSpecTcpRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'timeout',
      'Types of timeouts.',
      () => appmesh_RouteSpecTcpRouteTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'action',
      'Action to take if a match is determined.',
      () => appmesh_RouteSpecTcpRouteAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'match',
      '',
      () => appmesh_RouteSpecTcpRouteMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
