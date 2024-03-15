export interface NetworkEndpointListNetworkEndpoint {
  /*
The name for a specific VM instance that the IP address belongs to.
This is required for network endpoints of type GCE_VM_IP_PORT.
The instance must be in the same zone as the network endpoint group.
*/
  Instance?: string;

  /*
IPv4 address of network endpoint. The IP address must belong
to a VM in GCE (either the primary IP or as part of an aliased IP
range).
*/
  IpAddress?: string;

  /*
Port number of network endpoint.
--Note-- `port` is required unless the Network Endpoint Group is created
with the type of `GCE_VM_IP`
*/
  Port?: number;
}
