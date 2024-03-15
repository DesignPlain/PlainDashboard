import { ClusterDiscoveryEndpointPscConfig } from "./ClusterDiscoveryEndpointPscConfig";

export interface ClusterDiscoveryEndpoint {
  // Output only. The IP allocated on the consumer network for the PSC forwarding rule.
  Address?: string;

  // Output only. The port number of the exposed Redis endpoint.
  Port?: number;

  /*
Output only. Customer configuration for where the endpoint
is created and accessed from.
Structure is documented below.
*/
  PscConfig?: ClusterDiscoveryEndpointPscConfig;
}
