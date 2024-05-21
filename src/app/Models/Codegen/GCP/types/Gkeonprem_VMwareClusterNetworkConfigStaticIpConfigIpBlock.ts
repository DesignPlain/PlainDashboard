import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlockIp,
  gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlockIp_GetTypes,
} from "./gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlockIp";

export interface gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlock {
  // The network gateway used by the VMware User Cluster.
  gateway?: string;

  /*
The node's network configurations used by the VMware User Cluster.
Structure is documented below.
*/
  ips?: Array<gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlockIp>;

  // The netmask used by the VMware User Cluster.
  netmask?: string;
}

export function gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "gateway",
      "The network gateway used by the VMware User Cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ips",
      "The node's network configurations used by the VMware User Cluster.\nStructure is documented below.",
      gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlockIp_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "netmask",
      "The netmask used by the VMware User Cluster.",
      [],
      true,
      false,
    ),
  ];
}
