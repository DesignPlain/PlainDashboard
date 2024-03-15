import { VMwareClusterControlPlaneNodeVsphereConfig } from "./VMwareClusterControlPlaneNodeVsphereConfig";
import { VMwareClusterControlPlaneNodeAutoResizeConfig } from "./VMwareClusterControlPlaneNodeAutoResizeConfig";

export interface VMwareClusterControlPlaneNode {
  /*
The number of CPUs for each admin cluster node that serve as control planes
for this VMware User Cluster. (default: 4 CPUs)
*/
  Cpus?: number;

  /*
The megabytes of memory for each admin cluster node that serves as a
control plane for this VMware User Cluster (default: 8192 MB memory).
*/
  Memory?: number;

  /*
The number of control plane nodes for this VMware User Cluster.
(default: 1 replica).
*/
  Replicas?: number;

  /*
(Output)
Vsphere-specific config.
Structure is documented below.
*/
  VsphereConfigs?: Array<VMwareClusterControlPlaneNodeVsphereConfig>;

  /*
AutoResizeConfig provides auto resizing configurations.
Structure is documented below.
*/
  AutoResizeConfig?: VMwareClusterControlPlaneNodeAutoResizeConfig;
}
