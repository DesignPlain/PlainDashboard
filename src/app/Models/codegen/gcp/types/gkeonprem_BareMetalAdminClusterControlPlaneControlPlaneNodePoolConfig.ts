import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig,
  gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig_GetTypes,
} from "./gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig";

export interface gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig {
  /*
The generic configuration for a node pool running the control plane.
Structure is documented below.
*/
  nodePoolConfig?: gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
}

export function gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "nodePoolConfig",
      "The generic configuration for a node pool running the control plane.\nStructure is documented below.",
      () =>
        gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
