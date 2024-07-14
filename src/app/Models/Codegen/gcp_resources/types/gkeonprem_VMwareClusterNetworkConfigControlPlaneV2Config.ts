import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock,
  gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock_GetTypes,
} from "./gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock";

export interface gkeonprem_VMwareClusterNetworkConfigControlPlaneV2Config {
  /*
Static IP addresses for the control plane nodes.
Structure is documented below.
*/
  controlPlaneIpBlock?: gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock;
}

export function gkeonprem_VMwareClusterNetworkConfigControlPlaneV2Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "controlPlaneIpBlock",
      "Static IP addresses for the control plane nodes.\nStructure is documented below.",
      gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock_GetTypes(),
      false,
      false,
    ),
  ];
}
