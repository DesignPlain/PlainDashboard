import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Redis_ClusterDiscoveryEndpointPscConfig,
  Redis_ClusterDiscoveryEndpointPscConfig_GetTypes,
} from "./Redis_ClusterDiscoveryEndpointPscConfig";

export interface Redis_ClusterDiscoveryEndpoint {
  // Output only. The IP allocated on the consumer network for the PSC forwarding rule.
  Address?: string;

  // Output only. The port number of the exposed Redis endpoint.
  Port?: number;

  /*
Output only. Customer configuration for where the endpoint
is created and accessed from.
Structure is documented below.
*/
  PscConfig?: Redis_ClusterDiscoveryEndpointPscConfig;
}

export function Redis_ClusterDiscoveryEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "Output only. The port number of the exposed Redis endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PscConfig",
      "Output only. Customer configuration for where the endpoint\nis created and accessed from.\nStructure is documented below.",
      Redis_ClusterDiscoveryEndpointPscConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Address",
      "Output only. The IP allocated on the consumer network for the PSC forwarding rule.",
      [],
      false,
      false,
    ),
  ];
}
