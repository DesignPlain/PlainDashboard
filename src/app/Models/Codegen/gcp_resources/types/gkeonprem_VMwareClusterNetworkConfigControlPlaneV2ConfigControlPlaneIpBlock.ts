import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp,
  gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp_GetTypes,
} from "./gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp";

export interface gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock {
  // The network gateway used by the VMware User Cluster.
  gateway?: string;

  /*
The node's network configurations used by the VMware User Cluster.
Structure is documented below.
*/
  ips?: Array<gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp>;

  // The netmask used by the VMware User Cluster.
  netmask?: string;
}

export function gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "gateway",
      "The network gateway used by the VMware User Cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ips",
      "The node's network configurations used by the VMware User Cluster.\nStructure is documented below.",
      gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "netmask",
      "The netmask used by the VMware User Cluster.",
      [],
      false,
      false,
    ),
  ];
}
