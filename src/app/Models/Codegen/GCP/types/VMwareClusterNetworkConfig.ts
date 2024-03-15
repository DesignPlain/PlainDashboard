import { VMwareClusterNetworkConfigStaticIpConfig } from "./VMwareClusterNetworkConfigStaticIpConfig";
import { VMwareClusterNetworkConfigControlPlaneV2Config } from "./VMwareClusterNetworkConfigControlPlaneV2Config";
import { VMwareClusterNetworkConfigDhcpIpConfig } from "./VMwareClusterNetworkConfigDhcpIpConfig";
import { VMwareClusterNetworkConfigHostConfig } from "./VMwareClusterNetworkConfigHostConfig";

export interface VMwareClusterNetworkConfig {
  /*
All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.
Only a single range is supported. This field cannot be changed after creation.
*/
  PodAddressCidrBlocks?: Array<string>;

  /*
All services in the cluster are assigned an RFC1918 IPv4 address
from these ranges. Only a single range is supported.. This field
cannot be changed after creation.
*/
  ServiceAddressCidrBlocks?: Array<string>;

  /*
Configuration settings for a static IP configuration.
Structure is documented below.
*/
  StaticIpConfig?: VMwareClusterNetworkConfigStaticIpConfig;

  /*
(Output)
vcenter_network specifies vCenter network name. Inherited from the admin cluster.
*/
  VcenterNetwork?: string;

  /*
Configuration for control plane V2 mode.
Structure is documented below.
*/
  ControlPlaneV2Config?: VMwareClusterNetworkConfigControlPlaneV2Config;

  /*
Configuration settings for a DHCP IP configuration.
Structure is documented below.
*/
  DhcpIpConfig?: VMwareClusterNetworkConfigDhcpIpConfig;

  /*
Represents common network settings irrespective of the host's IP address.
Structure is documented below.
*/
  HostConfig?: VMwareClusterNetworkConfigHostConfig;
}
