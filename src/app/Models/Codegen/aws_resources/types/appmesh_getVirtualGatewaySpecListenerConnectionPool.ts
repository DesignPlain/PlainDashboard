import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualGatewaySpecListenerConnectionPoolGrpc,
  appmesh_getVirtualGatewaySpecListenerConnectionPoolGrpc_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerConnectionPoolGrpc";
import {
  appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp2,
  appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp2_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp2";
import {
  appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp,
  appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp";

export interface appmesh_getVirtualGatewaySpecListenerConnectionPool {
  //
  grpcs?: Array<appmesh_getVirtualGatewaySpecListenerConnectionPoolGrpc>;

  //
  http2s?: Array<appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp2>;

  //
  https?: Array<appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp>;
}

export function appmesh_getVirtualGatewaySpecListenerConnectionPool_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "grpcs",
      "",
      appmesh_getVirtualGatewaySpecListenerConnectionPoolGrpc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "http2s",
      "",
      appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp2_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "https",
      "",
      appmesh_getVirtualGatewaySpecListenerConnectionPoolHttp_GetTypes(),
      true,
      false,
    ),
  ];
}
