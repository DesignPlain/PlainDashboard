import { ClusterClusterConfigMasterConfigAccelerator } from "./ClusterClusterConfigMasterConfigAccelerator";
import { ClusterClusterConfigMasterConfigDiskConfig } from "./ClusterClusterConfigMasterConfigDiskConfig";

export interface ClusterClusterConfigMasterConfig {
  /*
Specifies the number of master nodes to create.
If not specified, GCP will default to a predetermined computed value (currently 1).
*/
  NumInstances?: number;

  // The Compute Engine accelerator (GPU) configuration for these instances. Can be specified multiple times.
  Accelerators?: Array<ClusterClusterConfigMasterConfigAccelerator>;

  // Disk Config
  DiskConfig?: ClusterClusterConfigMasterConfigDiskConfig;

  /*
The URI for the image to use for this worker.  See [the guide](https://cloud.google.com/dataproc/docs/guides/dataproc-images)
for more information.
*/
  ImageUri?: string;

  // List of master instance names which have been assigned to the cluster.
  InstanceNames?: Array<string>;

  /*
The name of a Google Compute Engine machine type
to create for the master. If not specified, GCP will default to a predetermined
computed value (currently `n1-standard-4`).
*/
  MachineType?: string;

  /*
The name of a minimum generation of CPU family
for the master. If not specified, GCP will default to a predetermined computed value
for each zone. See [the guide](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
for details about which CPU families are available (and defaulted) for each zone.
*/
  MinCpuPlatform?: string;
}
