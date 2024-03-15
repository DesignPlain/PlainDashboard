import { ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator } from "./ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator";
import { ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigDiskConfig } from "./ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigDiskConfig";

export interface ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig {
  /*
The Compute Engine accelerator (GPU) configuration for these instances. Can be specified 
multiple times.
*/
  Accelerators?: Array<ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator>;

  // Disk Config
  DiskConfig?: ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigDiskConfig;

  // List of auxiliary node group instance names which have been assigned to the cluster.
  InstanceNames?: Array<string>;

  /*
The name of a Google Compute Engine machine type
to create for the node group. If not specified, GCP will default to a predetermined
computed value (currently `n1-standard-4`).
*/
  MachineType?: string;

  /*
The name of a minimum generation of CPU family
for the node group. If not specified, GCP will default to a predetermined computed value
for each zone. See [the guide](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
for details about which CPU families are available (and defaulted) for each zone.
*/
  MinCpuPlatform?: string;

  /*
Specifies the number of master nodes to create.
Please set a number greater than 0. Node Group must have at least 1 instance.
*/
  NumInstances?: number;
}
