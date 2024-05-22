import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualNodeSpecListenerConnectionPoolTcp,
  appmesh_getVirtualNodeSpecListenerConnectionPoolTcp_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerConnectionPoolTcp";
import {
  appmesh_getVirtualNodeSpecListenerConnectionPoolGrpc,
  appmesh_getVirtualNodeSpecListenerConnectionPoolGrpc_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerConnectionPoolGrpc";
import {
  appmesh_getVirtualNodeSpecListenerConnectionPoolHttp2,
  appmesh_getVirtualNodeSpecListenerConnectionPoolHttp2_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerConnectionPoolHttp2";
import {
  appmesh_getVirtualNodeSpecListenerConnectionPoolHttp,
  appmesh_getVirtualNodeSpecListenerConnectionPoolHttp_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerConnectionPoolHttp";

export interface appmesh_getVirtualNodeSpecListenerConnectionPool {
  //
  grpcs?: Array<appmesh_getVirtualNodeSpecListenerConnectionPoolGrpc>;

  //
  http2s?: Array<appmesh_getVirtualNodeSpecListenerConnectionPoolHttp2>;

  //
  https?: Array<appmesh_getVirtualNodeSpecListenerConnectionPoolHttp>;

  //
  tcps?: Array<appmesh_getVirtualNodeSpecListenerConnectionPoolTcp>;
}

export function appmesh_getVirtualNodeSpecListenerConnectionPool_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "http2s",
      "",
      appmesh_getVirtualNodeSpecListenerConnectionPoolHttp2_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "https",
      "",
      appmesh_getVirtualNodeSpecListenerConnectionPoolHttp_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tcps",
      "",
      appmesh_getVirtualNodeSpecListenerConnectionPoolTcp_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "grpcs",
      "",
      appmesh_getVirtualNodeSpecListenerConnectionPoolGrpc_GetTypes(),
      true,
      false,
    ),
  ];
}
