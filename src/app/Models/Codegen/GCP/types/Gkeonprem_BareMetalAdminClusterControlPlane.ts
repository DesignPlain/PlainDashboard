import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalAdminClusterControlPlaneApiServerArg,
  Gkeonprem_BareMetalAdminClusterControlPlaneApiServerArg_GetTypes,
} from "./Gkeonprem_BareMetalAdminClusterControlPlaneApiServerArg";
import {
  Gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig,
  Gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig_GetTypes,
} from "./Gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig";

export interface Gkeonprem_BareMetalAdminClusterControlPlane {
  /*
Customizes the default API server args. Only a subset of
customized flags are supported. Please refer to the API server
documentation below to know the exact format:
https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/
Structure is documented below.
*/
  ApiServerArgs?: Array<Gkeonprem_BareMetalAdminClusterControlPlaneApiServerArg>;

  /*
Configures the node pool running the control plane. If specified the corresponding NodePool will be created for the cluster's control plane. The NodePool will have the same name and namespace as the cluster.
Structure is documented below.
*/
  ControlPlaneNodePoolConfig?: Gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig;
}

export function Gkeonprem_BareMetalAdminClusterControlPlane_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ApiServerArgs",
      "Customizes the default API server args. Only a subset of\ncustomized flags are supported. Please refer to the API server\ndocumentation below to know the exact format:\nhttps://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/\nStructure is documented below.",
      Gkeonprem_BareMetalAdminClusterControlPlaneApiServerArg_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ControlPlaneNodePoolConfig",
      "Configures the node pool running the control plane. If specified the corresponding NodePool will be created for the cluster's control plane. The NodePool will have the same name and namespace as the cluster.\nStructure is documented below.",
      Gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
