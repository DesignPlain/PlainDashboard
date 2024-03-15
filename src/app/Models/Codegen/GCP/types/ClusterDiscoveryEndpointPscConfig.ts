export interface ClusterDiscoveryEndpointPscConfig {
  /*
Required. The consumer network where the network address of
the discovery endpoint will be reserved, in the form of
projects/{network_project_id_or_number}/global/networks/{network_id}.

- - -
*/
  Network?: string;
}
