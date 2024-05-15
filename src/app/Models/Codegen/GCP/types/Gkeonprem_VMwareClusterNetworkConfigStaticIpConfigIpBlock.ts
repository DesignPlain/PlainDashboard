import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlockIp,
  Gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlockIp_GetTypes,
} from "./Gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlockIp";

export interface Gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlock {
  // The network gateway used by the VMware User Cluster.
  Gateway?: string;

  /*
The node's network configurations used by the VMware User Cluster.
Structure is documented below.
*/
  Ips?: Array<Gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlockIp>;

  // The netmask used by the VMware User Cluster.
  Netmask?: string;
}

export function Gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Netmask",
      "The netmask used by the VMware User Cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Gateway",
      "The network gateway used by the VMware User Cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ips",
      "The node's network configurations used by the VMware User Cluster.\nStructure is documented below.",
      Gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlockIp_GetTypes(),
      true,
      false,
    ),
  ];
}
