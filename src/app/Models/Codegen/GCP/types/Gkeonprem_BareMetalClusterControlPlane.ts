import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkeonprem_BareMetalClusterControlPlaneApiServerArg,
  gkeonprem_BareMetalClusterControlPlaneApiServerArg_GetTypes,
} from "./gkeonprem_BareMetalClusterControlPlaneApiServerArg";
import {
  gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfig,
  gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfig";

export interface gkeonprem_BareMetalClusterControlPlane {
  /*
Customizes the default API server args. Only a subset of
customized flags are supported. Please refer to the API server
documentation below to know the exact format:
https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/
Structure is documented below.
*/
  apiServerArgs?: Array<gkeonprem_BareMetalClusterControlPlaneApiServerArg>;

  /*
Configures the node pool running the control plane. If specified the corresponding NodePool will be created for the cluster's control plane. The NodePool will have the same name and namespace as the cluster.
Structure is documented below.
*/
  controlPlaneNodePoolConfig?: gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfig;
}

export function gkeonprem_BareMetalClusterControlPlane_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "apiServerArgs",
      "Customizes the default API server args. Only a subset of\ncustomized flags are supported. Please refer to the API server\ndocumentation below to know the exact format:\nhttps://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/\nStructure is documented below.",
      gkeonprem_BareMetalClusterControlPlaneApiServerArg_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "controlPlaneNodePoolConfig",
      "Configures the node pool running the control plane. If specified the corresponding NodePool will be created for the cluster's control plane. The NodePool will have the same name and namespace as the cluster.\nStructure is documented below.",
      gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
