import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlock,
  Gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlock_GetTypes,
} from "./Gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlock";

export interface Gkeonprem_VMwareClusterNetworkConfigStaticIpConfig {
  /*
Represents the configuration values for static IP allocation to nodes.
Structure is documented below.
*/
  IpBlocks?: Array<Gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlock>;
}

export function Gkeonprem_VMwareClusterNetworkConfigStaticIpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "IpBlocks",
      "Represents the configuration values for static IP allocation to nodes.\nStructure is documented below.",
      Gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlock_GetTypes(),
      true,
      false,
    ),
  ];
}
