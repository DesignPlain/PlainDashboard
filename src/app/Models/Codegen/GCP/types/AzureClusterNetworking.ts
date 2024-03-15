export interface AzureClusterNetworking {
  // The IP address range of the pods in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All pods in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.
  PodAddressCidrBlocks?: Array<string>;

  // The IP address range for services in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All services in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creating a cluster.
  ServiceAddressCidrBlocks?: Array<string>;

  /*
The Azure Resource Manager (ARM) ID of the VNet associated with your cluster. All components in the cluster (i.e. control plane and node pools) run on a single VNet. Example: `/subscriptions/-/resourceGroups/-/providers/Microsoft.Network/virtualNetworks/-` This field cannot be changed after creation.

- - -
*/
  VirtualNetworkId?: string;
}
