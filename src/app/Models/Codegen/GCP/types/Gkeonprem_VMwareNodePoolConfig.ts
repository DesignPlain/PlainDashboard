import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_VMwareNodePoolConfigTaint,
  Gkeonprem_VMwareNodePoolConfigTaint_GetTypes,
} from "./Gkeonprem_VMwareNodePoolConfigTaint";
import {
  Gkeonprem_VMwareNodePoolConfigVsphereConfig,
  Gkeonprem_VMwareNodePoolConfigVsphereConfig_GetTypes,
} from "./Gkeonprem_VMwareNodePoolConfigVsphereConfig";

export interface Gkeonprem_VMwareNodePoolConfig {
  // VMware disk size to be used during creation.
  BootDiskSizeGb?: number;

  // The OS image name in vCenter, only valid when using Windows.
  Image?: string;

  // The megabytes of memory for each node in the node pool.
  MemoryMb?: number;

  // The number of nodes in the node pool.
  Replicas?: number;

  /*
The initial taints assigned to nodes of this node pool.
Structure is documented below.
*/
  Taints?: Array<Gkeonprem_VMwareNodePoolConfigTaint>;

  /*
Specifies the vSphere config for node pool.
Structure is documented below.
*/
  VsphereConfigs?: Array<Gkeonprem_VMwareNodePoolConfigVsphereConfig>;

  // The number of CPUs for each node in the node pool.
  Cpus?: number;

  /*
Allow node pool traffic to be load balanced. Only works for clusters with
MetalLB load balancers.
*/
  EnableLoadBalancer?: boolean;

  /*
The OS image to be used for each node in a node pool.
Currently `cos`, `ubuntu`, `ubuntu_containerd` and `windows` are supported.
*/
  ImageType?: string;

  /*
The map of Kubernetes labels (key/value pairs) to be applied to each node.
These will added in addition to any default label(s) that
Kubernetes may apply to the node.
In case of conflict in label keys, the applied set may differ depending on
the Kubernetes version -- it's best to assume the behavior is undefined
and conflicts should be avoided.
*/
  Labels?: Map<string, string>;
}

export function Gkeonprem_VMwareNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Replicas",
      "The number of nodes in the node pool.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Taints",
      "The initial taints assigned to nodes of this node pool.\nStructure is documented below.",
      Gkeonprem_VMwareNodePoolConfigTaint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "The map of Kubernetes labels (key/value pairs) to be applied to each node.\nThese will added in addition to any default label(s) that\nKubernetes may apply to the node.\nIn case of conflict in label keys, the applied set may differ depending on\nthe Kubernetes version -- it's best to assume the behavior is undefined\nand conflicts should be avoided.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VsphereConfigs",
      "Specifies the vSphere config for node pool.\nStructure is documented below.",
      Gkeonprem_VMwareNodePoolConfigVsphereConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Cpus",
      "The number of CPUs for each node in the node pool.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableLoadBalancer",
      "Allow node pool traffic to be load balanced. Only works for clusters with\nMetalLB load balancers.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ImageType",
      "The OS image to be used for each node in a node pool.\nCurrently `cos`, `ubuntu`, `ubuntu_containerd` and `windows` are supported.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "BootDiskSizeGb",
      "VMware disk size to be used during creation.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Image",
      "The OS image name in vCenter, only valid when using Windows.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MemoryMb",
      "The megabytes of memory for each node in the node pool.",
      [],
      false,
      false,
    ),
  ];
}
