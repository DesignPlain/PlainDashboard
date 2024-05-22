import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_VirtualNodeSpecListenerConnectionPoolHttp {
  // Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster. Minimum value of `1`.
  maxConnections?: number;

  /*
Number of overflowing requests after `max_connections` Envoy will queue to upstream cluster. Minimum value of `1`.

The `http2` connection pool object supports the following:
*/
  maxPendingRequests?: number;
}

export function appmesh_VirtualNodeSpecListenerConnectionPoolHttp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxConnections",
      "Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster. Minimum value of `1`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxPendingRequests",
      "Number of overflowing requests after `max_connections` Envoy will queue to upstream cluster. Minimum value of `1`.\n\nThe `http2` connection pool object supports the following:",
      [],
      false,
      false,
    ),
  ];
}
