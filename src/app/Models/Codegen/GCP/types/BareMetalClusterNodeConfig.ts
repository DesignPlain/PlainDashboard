export interface BareMetalClusterNodeConfig {
  /*
The available runtimes that can be used to run containers in a Bare Metal User Cluster.
Possible values are: `CONTAINER_RUNTIME_UNSPECIFIED`, `DOCKER`, `CONTAINERD`.
*/
  ContainerRuntime?: string;

  /*
The maximum number of pods a node can run. The size of the CIDR range
assigned to the node will be derived from this parameter.
*/
  MaxPodsPerNode?: number;
}
