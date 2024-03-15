import { VMwareClusterNetworkConfigStaticIpConfigIpBlock } from "./VMwareClusterNetworkConfigStaticIpConfigIpBlock";

export interface VMwareClusterNetworkConfigStaticIpConfig {
  /*
Represents the configuration values for static IP allocation to nodes.
Structure is documented below.
*/
  IpBlocks?: Array<VMwareClusterNetworkConfigStaticIpConfigIpBlock>;
}
