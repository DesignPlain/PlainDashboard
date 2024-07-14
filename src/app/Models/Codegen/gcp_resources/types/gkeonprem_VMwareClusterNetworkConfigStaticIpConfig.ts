import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlock,
  gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlock_GetTypes,
} from "./gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlock";

export interface gkeonprem_VMwareClusterNetworkConfigStaticIpConfig {
  /*
Represents the configuration values for static IP allocation to nodes.
Structure is documented below.
*/
  ipBlocks?: Array<gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlock>;
}

export function gkeonprem_VMwareClusterNetworkConfigStaticIpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ipBlocks",
      "Represents the configuration values for static IP allocation to nodes.\nStructure is documented below.",
      gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlock_GetTypes(),
      true,
      false,
    ),
  ];
}
