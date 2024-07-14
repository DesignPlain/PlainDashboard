import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getRouteSpecTcpRouteTimeoutIdle,
  appmesh_getRouteSpecTcpRouteTimeoutIdle_GetTypes,
} from "./appmesh_getRouteSpecTcpRouteTimeoutIdle";

export interface appmesh_getRouteSpecTcpRouteTimeout {
  //
  idles?: Array<appmesh_getRouteSpecTcpRouteTimeoutIdle>;
}

export function appmesh_getRouteSpecTcpRouteTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "idles",
      "",
      appmesh_getRouteSpecTcpRouteTimeoutIdle_GetTypes(),
      true,
      false,
    ),
  ];
}
