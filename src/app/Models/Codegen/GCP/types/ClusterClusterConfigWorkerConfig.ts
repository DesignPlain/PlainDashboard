import { ClusterClusterConfigWorkerConfigAccelerator } from "./ClusterClusterConfigWorkerConfigAccelerator";
import { ClusterClusterConfigWorkerConfigDiskConfig } from "./ClusterClusterConfigWorkerConfigDiskConfig";

export interface ClusterClusterConfigWorkerConfig {
  // The Compute Engine accelerator configuration for these instances. Can be specified multiple times.
  Accelerators?: Array<ClusterClusterConfigWorkerConfigAccelerator>;

  // Disk Config
  DiskConfig?: ClusterClusterConfigWorkerConfigDiskConfig;

  /*
The URI for the image to use for this worker.  See [the guide](https://cloud.google.com/dataproc/docs/guides/dataproc-images)
for more information.
*/
  ImageUri?: string;

  // List of master/worker instance names which have been assigned to the cluster.
  InstanceNames?: Array<string>;

  /*
The name of a Google Compute Engine machine type
to create for the worker nodes. If not specified, GCP will default to a predetermined
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

  // The minimum number of primary worker instances to create.  If `min_num_instances` is set, cluster creation will succeed if the number of primary workers created is at least equal to the `min_num_instances` number.
  MinNumInstances?: number;

  /*
Specifies the number of worker nodes to create.
If not specified, GCP will default to a predetermined computed value (currently 2).
There is currently a beta feature which allows you to run a
[Single Node Cluster](https://cloud.google.com/dataproc/docs/concepts/single-node-clusters).
In order to take advantage of this you need to set
`"dataproc:dataproc.allow.zero.workers" = "true"` in
`cluster_config.software_config.properties`
*/
  NumInstances?: number;
}
