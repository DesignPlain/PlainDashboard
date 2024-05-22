import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_VirtualNodeSpecListenerConnectionPoolGrpc {
  // Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster. Minimum value of `1`.
  maxRequests?: number;
}

export function appmesh_VirtualNodeSpecListenerConnectionPoolGrpc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxRequests",
      "Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster. Minimum value of `1`.",
      [],
      true,
      false,
    ),
  ];
}
