import { BareMetalClusterControlPlaneApiServerArg } from "./BareMetalClusterControlPlaneApiServerArg";
import { BareMetalClusterControlPlaneControlPlaneNodePoolConfig } from "./BareMetalClusterControlPlaneControlPlaneNodePoolConfig";

export interface BareMetalClusterControlPlane {
  /*
Customizes the default API server args. Only a subset of
customized flags are supported. Please refer to the API server
documentation below to know the exact format:
https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/
Structure is documented below.
*/
  ApiServerArgs?: Array<BareMetalClusterControlPlaneApiServerArg>;

  /*
Configures the node pool running the control plane. If specified the corresponding NodePool will be created for the cluster's control plane. The NodePool will have the same name and namespace as the cluster.
Structure is documented below.
*/
  ControlPlaneNodePoolConfig?: BareMetalClusterControlPlaneControlPlaneNodePoolConfig;
}
