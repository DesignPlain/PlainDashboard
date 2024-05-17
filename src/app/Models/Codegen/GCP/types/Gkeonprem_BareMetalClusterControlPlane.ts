import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalClusterControlPlaneApiServerArg,
  Gkeonprem_BareMetalClusterControlPlaneApiServerArg_GetTypes,
} from "./Gkeonprem_BareMetalClusterControlPlaneApiServerArg";
import {
  Gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfig,
  Gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfig";

export interface Gkeonprem_BareMetalClusterControlPlane {
  /*
Customizes the default API server args. Only a subset of
customized flags are supported. Please refer to the API server
documentation below to know the exact format:
https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/
Structure is documented below.
*/
  ApiServerArgs?: Array<Gkeonprem_BareMetalClusterControlPlaneApiServerArg>;

  /*
Configures the node pool running the control plane. If specified the corresponding NodePool will be created for the cluster's control plane. The NodePool will have the same name and namespace as the cluster.
Structure is documented below.
*/
  ControlPlaneNodePoolConfig?: Gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfig;
}

export function Gkeonprem_BareMetalClusterControlPlane_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ApiServerArgs",
      "Customizes the default API server args. Only a subset of\ncustomized flags are supported. Please refer to the API server\ndocumentation below to know the exact format:\nhttps://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/\nStructure is documented below.",
      Gkeonprem_BareMetalClusterControlPlaneApiServerArg_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ControlPlaneNodePoolConfig",
      "Configures the node pool running the control plane. If specified the corresponding NodePool will be created for the cluster's control plane. The NodePool will have the same name and namespace as the cluster.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
