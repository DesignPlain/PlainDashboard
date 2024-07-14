import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfig,
  gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfig_GetTypes,
} from "./gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfig";
import {
  gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaint,
  gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaint_GetTypes,
} from "./gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaint";

export interface gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig {
  /*
The list of machine addresses in the Bare Metal Node Pool.
Structure is documented below.
*/
  nodeConfigs?: Array<gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfig>;

  // Specifies the nodes operating system (default: LINUX).
  operatingSystem?: string;

  /*
The initial taints assigned to nodes of this node pool.
Structure is documented below.
*/
  taints?: Array<gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaint>;

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
}

export function gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "taints",
      "The initial taints assigned to nodes of this node pool.\nStructure is documented below.",
      gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaint_GetTypes(),
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
      gkeonprem_BareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "operatingSystem",
      "Specifies the nodes operating system (default: LINUX).",
      [],
      false,
      false,
    ),
  ];
}
