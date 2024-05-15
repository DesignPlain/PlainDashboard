import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig,
  Gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig_GetTypes,
} from "./Gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig";

export interface Gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig {
  /*
The generic configuration for a node pool running the control plane.
Structure is documented below.
*/
  NodePoolConfig?: Gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
}

export function Gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "NodePoolConfig",
      "The generic configuration for a node pool running the control plane.\nStructure is documented below.",
      Gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
