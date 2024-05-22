import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualNodeSpecListenerTimeoutGrpcIdle,
  appmesh_getVirtualNodeSpecListenerTimeoutGrpcIdle_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTimeoutGrpcIdle";
import {
  appmesh_getVirtualNodeSpecListenerTimeoutGrpcPerRequest,
  appmesh_getVirtualNodeSpecListenerTimeoutGrpcPerRequest_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTimeoutGrpcPerRequest";

export interface appmesh_getVirtualNodeSpecListenerTimeoutGrpc {
  //
  idles?: Array<appmesh_getVirtualNodeSpecListenerTimeoutGrpcIdle>;

  //
  perRequests?: Array<appmesh_getVirtualNodeSpecListenerTimeoutGrpcPerRequest>;
}

export function appmesh_getVirtualNodeSpecListenerTimeoutGrpc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "idles",
      "",
      appmesh_getVirtualNodeSpecListenerTimeoutGrpcIdle_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "perRequests",
      "",
      appmesh_getVirtualNodeSpecListenerTimeoutGrpcPerRequest_GetTypes(),
      true,
      false,
    ),
  ];
}
