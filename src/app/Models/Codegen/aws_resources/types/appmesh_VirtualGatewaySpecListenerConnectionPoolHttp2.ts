import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_VirtualGatewaySpecListenerConnectionPoolHttp2 {
  // Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster. Minimum value of `1`.
  maxRequests?: number;
}

export function appmesh_VirtualGatewaySpecListenerConnectionPoolHttp2_GetTypes(): DynamicUIProps[] {
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
