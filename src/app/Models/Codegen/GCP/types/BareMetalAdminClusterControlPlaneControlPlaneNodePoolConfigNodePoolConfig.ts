import { BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaint } from "./BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaint";
import { BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfig } from "./BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfig";

export interface BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig {
  /*
The map of Kubernetes labels (key/value pairs) to be applied to
each node. These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:
http://kubernetes.io/v1.1/docs/user-guide/labels.html
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  Labels?: Map<string, string>;

  /*
The list of machine addresses in the Bare Metal Node Pool.
Structure is documented below.
*/
  NodeConfigs?: Array<BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfig>;

  // Specifies the nodes operating system (default: LINUX).
  OperatingSystem?: string;

  /*
The initial taints assigned to nodes of this node pool.
Structure is documented below.
*/
  Taints?: Array<BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaint>;
}
