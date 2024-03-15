import { WorkflowTemplatePlacementManagedClusterConfigMasterConfigManagedGroupConfig } from "./WorkflowTemplatePlacementManagedClusterConfigMasterConfigManagedGroupConfig";
import { WorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig } from "./WorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig";
import { WorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerator } from "./WorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerator";

export interface WorkflowTemplatePlacementManagedClusterConfigMasterConfig {
  // Specifies the minimum cpu platform for the Instance Group. See (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
  MinCpuPlatform?: string;

  // The Compute Engine accelerator configuration for these instances.
  Accelerators?: Array<WorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerator>;

  // The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: - `https://www.googleapis.com/compute/beta/projects/` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
  Image?: string;

  // Output only. Specifies that this instance group contains preemptible instances.
  IsPreemptible?: boolean;

  // The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: - `https://www.googleapis.com/compute/v1/projects/(https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`.
  MachineType?: string;

  // Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.
  ManagedGroupConfigs?: Array<WorkflowTemplatePlacementManagedClusterConfigMasterConfigManagedGroupConfig>;

  // The number of VM instances in the instance group. For master instance groups, must be set to 1.
  NumInstances?: number;

  // Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE
  Preemptibility?: string;

  // Disk option config settings.
  DiskConfig?: WorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig;

  // Output only. The list of instance names. Dataproc derives the names from `cluster_name`, `num_instances`, and the instance group.
  InstanceNames?: Array<string>;
}
