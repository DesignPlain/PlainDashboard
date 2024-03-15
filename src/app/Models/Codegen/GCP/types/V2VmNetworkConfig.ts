export interface V2VmNetworkConfig {
  /*
The name of the network for the TPU node. It must be a preexisting Google Compute Engine
network. If both network and subnetwork are specified, the given subnetwork must belong
to the given network. If network is not specified, it will be looked up from the
subnetwork if one is provided, or otherwise use "default".
*/
  Network?: string;

  /*
The name of the subnetwork for the TPU node. It must be a preexisting Google Compute
Engine subnetwork. If both network and subnetwork are specified, the given subnetwork
must belong to the given network. If subnetwork is not specified, the subnetwork with the
same name as the network will be used.
*/
  Subnetwork?: string;

  /*
Allows the TPU node to send and receive packets with non-matching destination or source
IPs. This is required if you plan to use the TPU workers to forward routes.
*/
  CanIpForward?: boolean;

  /*
Indicates that external IP addresses would be associated with the TPU workers. If set to
false, the specified subnetwork or network should have Private Google Access enabled.
*/
  EnableExternalIps?: boolean;
}
