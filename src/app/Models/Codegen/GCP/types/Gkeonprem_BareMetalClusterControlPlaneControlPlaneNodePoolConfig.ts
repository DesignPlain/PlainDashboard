import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig,
  Gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig";

export interface Gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfig {
  /*
The generic configuration for a node pool running the control plane.
Structure is documented below.
*/
  NodePoolConfig?: Gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
}

export function Gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "NodePoolConfig",
      "The generic configuration for a node pool running the control plane.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
