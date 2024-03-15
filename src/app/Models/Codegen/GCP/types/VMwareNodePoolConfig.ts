import { VMwareNodePoolConfigTaint } from "./VMwareNodePoolConfigTaint";
import { VMwareNodePoolConfigVsphereConfig } from "./VMwareNodePoolConfigVsphereConfig";

export interface VMwareNodePoolConfig {
  // VMware disk size to be used during creation.
  BootDiskSizeGb?: number;

  // The number of CPUs for each node in the node pool.
  Cpus?: number;

  /*
Allow node pool traffic to be load balanced. Only works for clusters with
MetalLB load balancers.
*/
  EnableLoadBalancer?: boolean;

  // The megabytes of memory for each node in the node pool.
  MemoryMb?: number;

  // The OS image name in vCenter, only valid when using Windows.
  Image?: string;

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

  // The number of nodes in the node pool.
  Replicas?: number;

  /*
The initial taints assigned to nodes of this node pool.
Structure is documented below.
*/
  Taints?: Array<VMwareNodePoolConfigTaint>;

  /*
Specifies the vSphere config for node pool.
Structure is documented below.
*/
  VsphereConfigs?: Array<VMwareNodePoolConfigVsphereConfig>;
}
