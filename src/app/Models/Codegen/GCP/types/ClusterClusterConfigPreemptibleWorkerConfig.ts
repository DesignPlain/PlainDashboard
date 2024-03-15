import { ClusterClusterConfigPreemptibleWorkerConfigDiskConfig } from "./ClusterClusterConfigPreemptibleWorkerConfigDiskConfig";
import { ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy } from "./ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy";

export interface ClusterClusterConfigPreemptibleWorkerConfig {
  // Disk Config
  DiskConfig?: ClusterClusterConfigPreemptibleWorkerConfigDiskConfig;

  // Instance flexibility Policy allowing a mixture of VM shapes and provisioning models.
  InstanceFlexibilityPolicy?: ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy;

  // List of preemptible instance names which have been assigned to the cluster.
  InstanceNames?: Array<string>;

  /*
Specifies the number of preemptible nodes to create.
Defaults to 0.
*/
  NumInstances?: number;

  /*
Specifies the preemptibility of the secondary workers. The default value is `PREEMPTIBLE`
Accepted values are:
- PREEMPTIBILITY_UNSPECIFIED
- NON_PREEMPTIBLE
- PREEMPTIBLE
*/
  Preemptibility?: string;
}
