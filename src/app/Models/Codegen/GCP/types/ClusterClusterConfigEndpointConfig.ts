export interface ClusterClusterConfigEndpointConfig {
  /*
The flag to enable http access to specific ports
on the cluster from external sources (aka Component Gateway). Defaults to false.
*/
  EnableHttpPortAccess?: boolean;

  // The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true.
  HttpPorts?: Map<string, string>;
}
