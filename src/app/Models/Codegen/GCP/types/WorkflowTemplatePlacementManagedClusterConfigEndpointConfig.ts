export interface WorkflowTemplatePlacementManagedClusterConfigEndpointConfig {
  // If true, enable http access to specific ports on the cluster from external sources. Defaults to false.
  EnableHttpPortAccess?: boolean;

  // Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true.
  HttpPorts?: Map<string, string>;
}
