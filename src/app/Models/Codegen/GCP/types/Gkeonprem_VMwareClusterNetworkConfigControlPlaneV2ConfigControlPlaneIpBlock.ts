import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp,
  Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp_GetTypes,
} from "./Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp";

export interface Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock {
  // The netmask used by the VMware User Cluster.
  Netmask?: string;

  // The network gateway used by the VMware User Cluster.
  Gateway?: string;

  /*
The node's network configurations used by the VMware User Cluster.
Structure is documented below.
*/
  Ips?: Array<Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp>;
}

export function Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Netmask",
      "The netmask used by the VMware User Cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Gateway",
      "The network gateway used by the VMware User Cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ips",
      "The node's network configurations used by the VMware User Cluster.\nStructure is documented below.",
      Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp_GetTypes(),
      false,
      false,
    ),
  ];
}
