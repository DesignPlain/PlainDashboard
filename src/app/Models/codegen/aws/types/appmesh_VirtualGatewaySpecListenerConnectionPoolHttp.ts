import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_VirtualGatewaySpecListenerConnectionPoolHttp {
  // Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster. Minimum value of `1`.
  maxConnections?: number;

  // Number of overflowing requests after `max_connections` Envoy will queue to upstream cluster. Minimum value of `1`.
  maxPendingRequests?: number;
}

export function appmesh_VirtualGatewaySpecListenerConnectionPoolHttp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxConnections",
      "Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster. Minimum value of `1`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxPendingRequests",
      "Number of overflowing requests after `max_connections` Envoy will queue to upstream cluster. Minimum value of `1`.",
      () => [],
      false,
      false,
    ),
  ];
}
