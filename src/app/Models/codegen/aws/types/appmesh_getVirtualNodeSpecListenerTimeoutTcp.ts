import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualNodeSpecListenerTimeoutTcpIdle,
  appmesh_getVirtualNodeSpecListenerTimeoutTcpIdle_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTimeoutTcpIdle";

export interface appmesh_getVirtualNodeSpecListenerTimeoutTcp {
  //
  idles?: Array<appmesh_getVirtualNodeSpecListenerTimeoutTcpIdle>;
}

export function appmesh_getVirtualNodeSpecListenerTimeoutTcp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "idles",
      "",
      () => appmesh_getVirtualNodeSpecListenerTimeoutTcpIdle_GetTypes(),
      true,
      false,
    ),
  ];
}
