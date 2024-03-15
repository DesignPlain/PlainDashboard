import { V2VmNetworkEndpointAccessConfig } from "./V2VmNetworkEndpointAccessConfig";

export interface V2VmNetworkEndpoint {
  /*
(Output)
The access config for the TPU worker.
Structure is documented below.
*/
  AccessConfigs?: Array<V2VmNetworkEndpointAccessConfig>;

  /*
(Output)
The internal IP address of this network endpoint.
*/
  IpAddress?: string;

  /*
(Output)
The port of this network endpoint.
*/
  Port?: number;
}
