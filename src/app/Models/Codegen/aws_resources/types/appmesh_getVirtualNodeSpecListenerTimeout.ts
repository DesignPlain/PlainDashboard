import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualNodeSpecListenerTimeoutHttp2,
  appmesh_getVirtualNodeSpecListenerTimeoutHttp2_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTimeoutHttp2";
import {
  appmesh_getVirtualNodeSpecListenerTimeoutHttp,
  appmesh_getVirtualNodeSpecListenerTimeoutHttp_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTimeoutHttp";
import {
  appmesh_getVirtualNodeSpecListenerTimeoutTcp,
  appmesh_getVirtualNodeSpecListenerTimeoutTcp_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTimeoutTcp";
import {
  appmesh_getVirtualNodeSpecListenerTimeoutGrpc,
  appmesh_getVirtualNodeSpecListenerTimeoutGrpc_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTimeoutGrpc";

export interface appmesh_getVirtualNodeSpecListenerTimeout {
  //
  grpcs?: Array<appmesh_getVirtualNodeSpecListenerTimeoutGrpc>;

  //
  http2s?: Array<appmesh_getVirtualNodeSpecListenerTimeoutHttp2>;

  //
  https?: Array<appmesh_getVirtualNodeSpecListenerTimeoutHttp>;

  //
  tcps?: Array<appmesh_getVirtualNodeSpecListenerTimeoutTcp>;
}

export function appmesh_getVirtualNodeSpecListenerTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "grpcs",
      "",
      appmesh_getVirtualNodeSpecListenerTimeoutGrpc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "http2s",
      "",
      appmesh_getVirtualNodeSpecListenerTimeoutHttp2_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "https",
      "",
      appmesh_getVirtualNodeSpecListenerTimeoutHttp_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tcps",
      "",
      appmesh_getVirtualNodeSpecListenerTimeoutTcp_GetTypes(),
      true,
      false,
    ),
  ];
}
