import { VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock } from "./VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock";

export interface VMwareClusterNetworkConfigControlPlaneV2Config {
  /*
Static IP addresses for the control plane nodes.
Structure is documented below.
*/
  ControlPlaneIpBlock?: VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock;
}
