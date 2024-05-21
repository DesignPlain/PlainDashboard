import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaint,
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaint_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaint";
import {
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig,
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig";
import {
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfig,
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfig";

export interface gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig {
  /*
The initial taints assigned to nodes of this node pool.
Structure is documented below.
*/
  taints?: Array<gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaint>;

  /*
The modifiable kubelet configurations for the baremetal machines.
Structure is documented below.
*/
  kubeletConfig?: gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig;

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
  labels?: Map<string, string>;

  /*
The list of machine addresses in the Bare Metal Node Pool.
Structure is documented below.
*/
  nodeConfigs?: Array<gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfig>;

  // Specifies the nodes operating system (default: LINUX).
  operatingSystem?: string;
}

export function gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "operatingSystem",
      "Specifies the nodes operating system (default: LINUX).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "taints",
      "The initial taints assigned to nodes of this node pool.\nStructure is documented below.",
      gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kubeletConfig",
      "The modifiable kubelet configurations for the baremetal machines.\nStructure is documented below.",
      gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      'The map of Kubernetes labels (key/value pairs) to be applied to\neach node. These will added in addition to any default label(s)\nthat Kubernetes may apply to the node. In case of conflict in\nlabel keys, the applied set may differ depending on the Kubernetes\nversion -- it\'s best to assume the behavior is undefined and\nconflicts should be avoided. For more information, including usage\nand the valid values, see:\nhttp://kubernetes.io/v1.1/docs/user-guide/labels.html\nAn object containing a list of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nodeConfigs",
      "The list of machine addresses in the Bare Metal Node Pool.\nStructure is documented below.",
      gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
