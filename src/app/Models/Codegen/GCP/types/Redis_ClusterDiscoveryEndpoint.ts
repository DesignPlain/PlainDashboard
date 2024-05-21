import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  redis_ClusterDiscoveryEndpointPscConfig,
  redis_ClusterDiscoveryEndpointPscConfig_GetTypes,
} from "./redis_ClusterDiscoveryEndpointPscConfig";

export interface redis_ClusterDiscoveryEndpoint {
  // Output only. The IP allocated on the consumer network for the PSC forwarding rule.
  address?: string;

  // Output only. The port number of the exposed Redis endpoint.
  port?: number;

  /*
Output only. Customer configuration for where the endpoint
is created and accessed from.
Structure is documented below.
*/
  pscConfig?: redis_ClusterDiscoveryEndpointPscConfig;
}

export function redis_ClusterDiscoveryEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Output only. The port number of the exposed Redis endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "pscConfig",
      "Output only. Customer configuration for where the endpoint\nis created and accessed from.\nStructure is documented below.",
      redis_ClusterDiscoveryEndpointPscConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "address",
      "Output only. The IP allocated on the consumer network for the PSC forwarding rule.",
      [],
      false,
      false,
    ),
  ];
}
