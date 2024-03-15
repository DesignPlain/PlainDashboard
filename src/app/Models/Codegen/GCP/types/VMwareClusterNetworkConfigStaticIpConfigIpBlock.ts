import { VMwareClusterNetworkConfigStaticIpConfigIpBlockIp } from "./VMwareClusterNetworkConfigStaticIpConfigIpBlockIp";

export interface VMwareClusterNetworkConfigStaticIpConfigIpBlock {
  // The network gateway used by the VMware User Cluster.
  Gateway?: string;

  /*
The node's network configurations used by the VMware User Cluster.
Structure is documented below.
*/
  Ips?: Array<VMwareClusterNetworkConfigStaticIpConfigIpBlockIp>;

  // The netmask used by the VMware User Cluster.
  Netmask?: string;
}
