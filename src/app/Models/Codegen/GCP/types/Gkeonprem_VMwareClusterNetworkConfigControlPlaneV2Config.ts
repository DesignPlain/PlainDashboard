import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock,
  Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock_GetTypes,
} from "./Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock";

export interface Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2Config {
  /*
Static IP addresses for the control plane nodes.
Structure is documented below.
*/
  ControlPlaneIpBlock?: Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock;
}

export function Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ControlPlaneIpBlock",
      "Static IP addresses for the control plane nodes.\nStructure is documented below.",
      Gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock_GetTypes(),
      false,
      false,
    ),
  ];
}
