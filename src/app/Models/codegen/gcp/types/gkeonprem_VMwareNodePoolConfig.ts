import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkeonprem_VMwareNodePoolConfigTaint,
  gkeonprem_VMwareNodePoolConfigTaint_GetTypes,
} from "./gkeonprem_VMwareNodePoolConfigTaint";
import {
  gkeonprem_VMwareNodePoolConfigVsphereConfig,
  gkeonprem_VMwareNodePoolConfigVsphereConfig_GetTypes,
} from "./gkeonprem_VMwareNodePoolConfigVsphereConfig";

export interface gkeonprem_VMwareNodePoolConfig {
  // The number of CPUs for each node in the node pool.
  cpus?: number;

  // The OS image name in vCenter, only valid when using Windows.
  image?: string;

  // The megabytes of memory for each node in the node pool.
  memoryMb?: number;

  /*
The initial taints assigned to nodes of this node pool.
Structure is documented below.
*/
  taints?: Array<gkeonprem_VMwareNodePoolConfigTaint>;

  /*
Specifies the vSphere config for node pool.
Structure is documented below.
*/
  vsphereConfigs?: Array<gkeonprem_VMwareNodePoolConfigVsphereConfig>;

  // VMware disk size to be used during creation.
  bootDiskSizeGb?: number;

  /*
Allow node pool traffic to be load balanced. Only works for clusters with
MetalLB load balancers.
*/
  enableLoadBalancer?: boolean;

  /*
The OS image to be used for each node in a node pool.
Currently `cos`, `ubuntu`, `ubuntu_containerd` and `windows` are supported.
*/
  imageType?: string;

  /*
The map of Kubernetes labels (key/value pairs) to be applied to each node.
These will added in addition to any default label(s) that
Kubernetes may apply to the node.
In case of conflict in label keys, the applied set may differ depending on
the Kubernetes version -- it's best to assume the behavior is undefined
and conflicts should be avoided.
*/
  labels?: Map<string, string>;

  // The number of nodes in the node pool.
  replicas?: number;
}

export function gkeonprem_VMwareNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "bootDiskSizeGb",
      "VMware disk size to be used during creation.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageType",
      "The OS image to be used for each node in a node pool.\nCurrently `cos`, `ubuntu`, `ubuntu_containerd` and `windows` are supported.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "The map of Kubernetes labels (key/value pairs) to be applied to each node.\nThese will added in addition to any default label(s) that\nKubernetes may apply to the node.\nIn case of conflict in label keys, the applied set may differ depending on\nthe Kubernetes version -- it's best to assume the behavior is undefined\nand conflicts should be avoided.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "replicas",
      "The number of nodes in the node pool.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cpus",
      "The number of CPUs for each node in the node pool.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "image",
      "The OS image name in vCenter, only valid when using Windows.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryMb",
      "The megabytes of memory for each node in the node pool.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "taints",
      "The initial taints assigned to nodes of this node pool.\nStructure is documented below.",
      () => gkeonprem_VMwareNodePoolConfigTaint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vsphereConfigs",
      "Specifies the vSphere config for node pool.\nStructure is documented below.",
      () => gkeonprem_VMwareNodePoolConfigVsphereConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableLoadBalancer",
      "Allow node pool traffic to be load balanced. Only works for clusters with\nMetalLB load balancers.",
      () => [],
      false,
      false,
    ),
  ];
}
