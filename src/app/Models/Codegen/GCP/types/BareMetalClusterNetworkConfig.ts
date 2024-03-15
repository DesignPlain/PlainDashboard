import { BareMetalClusterNetworkConfigIslandModeCidr } from "./BareMetalClusterNetworkConfigIslandModeCidr";
import { BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig } from "./BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig";
import { BareMetalClusterNetworkConfigSrIovConfig } from "./BareMetalClusterNetworkConfigSrIovConfig";

export interface BareMetalClusterNetworkConfig {
  /*
Enables the use of advanced Anthos networking features, such as Bundled
Load Balancing with BGP or the egress NAT gateway.
Setting configuration for advanced networking features will automatically
set this flag.
*/
  AdvancedNetworking?: boolean;

  /*
A nested object resource
Structure is documented below.
*/
  IslandModeCidr?: BareMetalClusterNetworkConfigIslandModeCidr;

  /*
Configuration for multiple network interfaces.
Structure is documented below.
*/
  MultipleNetworkInterfacesConfig?: BareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig;

  /*
Configuration for SR-IOV.
Structure is documented below.
*/
  SrIovConfig?: BareMetalClusterNetworkConfigSrIovConfig;
}
