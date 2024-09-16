import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getRouteSpecTcpRouteAction,
  appmesh_getRouteSpecTcpRouteAction_GetTypes,
} from './appmesh_getRouteSpecTcpRouteAction';
import {
  appmesh_getRouteSpecTcpRouteMatch,
  appmesh_getRouteSpecTcpRouteMatch_GetTypes,
} from './appmesh_getRouteSpecTcpRouteMatch';
import {
  appmesh_getRouteSpecTcpRouteTimeout,
  appmesh_getRouteSpecTcpRouteTimeout_GetTypes,
} from './appmesh_getRouteSpecTcpRouteTimeout';

export interface appmesh_getRouteSpecTcpRoute {
  //
  actions?: Array<appmesh_getRouteSpecTcpRouteAction>;

  //
  matches?: Array<appmesh_getRouteSpecTcpRouteMatch>;

  //
  timeouts?: Array<appmesh_getRouteSpecTcpRouteTimeout>;
}

export function appmesh_getRouteSpecTcpRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'actions',
      '',
      () => appmesh_getRouteSpecTcpRouteAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'matches',
      '',
      () => appmesh_getRouteSpecTcpRouteMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'timeouts',
      '',
      () => appmesh_getRouteSpecTcpRouteTimeout_GetTypes(),
      true,
      false,
    ),
  ];
}
