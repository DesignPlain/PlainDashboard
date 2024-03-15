import { VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp } from "./VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp";

export interface VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock {
  // The network gateway used by the VMware User Cluster.
  Gateway?: string;

  /*
The node's network configurations used by the VMware User Cluster.
Structure is documented below.
*/
  Ips?: Array<VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp>;

  // The netmask used by the VMware User Cluster.
  Netmask?: string;
}
