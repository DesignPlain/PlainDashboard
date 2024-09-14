import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

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
      () => [],
      true,
      false,
    ),
  ];
}
