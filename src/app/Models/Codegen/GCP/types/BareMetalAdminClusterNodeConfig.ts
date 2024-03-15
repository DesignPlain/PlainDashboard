export interface BareMetalAdminClusterNodeConfig {
  /*
The maximum number of pods a node can run. The size of the CIDR range
assigned to the node will be derived from this parameter.
*/
  MaxPodsPerNode?: number;
}
