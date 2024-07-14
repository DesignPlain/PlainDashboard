import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getRouteSpecTcpRouteMatch,
  appmesh_getRouteSpecTcpRouteMatch_GetTypes,
} from "./appmesh_getRouteSpecTcpRouteMatch";
import {
  appmesh_getRouteSpecTcpRouteTimeout,
  appmesh_getRouteSpecTcpRouteTimeout_GetTypes,
} from "./appmesh_getRouteSpecTcpRouteTimeout";
import {
  appmesh_getRouteSpecTcpRouteAction,
  appmesh_getRouteSpecTcpRouteAction_GetTypes,
} from "./appmesh_getRouteSpecTcpRouteAction";

export interface appmesh_getRouteSpecTcpRoute {
  //
  matches?: Array<appmesh_getRouteSpecTcpRouteMatch>;

  //
  timeouts?: Array<appmesh_getRouteSpecTcpRouteTimeout>;

  //
  actions?: Array<appmesh_getRouteSpecTcpRouteAction>;
}

export function appmesh_getRouteSpecTcpRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      appmesh_getRouteSpecTcpRouteMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "timeouts",
      "",
      appmesh_getRouteSpecTcpRouteTimeout_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "",
      appmesh_getRouteSpecTcpRouteAction_GetTypes(),
      true,
      false,
    ),
  ];
}
