import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigManagedGroupConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigManagedGroupConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigManagedGroupConfig";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerator,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerator_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerator";

export interface Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfig {
  // The Compute Engine accelerator configuration for these instances.
  Accelerators?: Array<Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerator>;

  // The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: - `https://www.googleapis.com/compute/beta/projects/` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
  Image?: string;

  // Output only. The list of instance names. Dataproc derives the names from `cluster_name`, `num_instances`, and the instance group.
  InstanceNames?: Array<string>;

  // The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: - `https://www.googleapis.com/compute/v1/projects/(https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`.
  MachineType?: string;

  // Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.
  ManagedGroupConfigs?: Array<Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigManagedGroupConfig>;

  // Specifies the minimum cpu platform for the Instance Group. See (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
  MinCpuPlatform?: string;

  // Disk option config settings.
  DiskConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig;

  // Output only. Specifies that this instance group contains preemptible instances.
  IsPreemptible?: boolean;

  // The number of VM instances in the instance group. For master instance groups, must be set to 1.
  NumInstances?: number;

  // Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE
  Preemptibility?: string;
}

export function Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Image",
      "The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: * `https://www.googleapis.com/compute/beta/projects/` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InstanceNames",
      "Output only. The list of instance names. Dataproc derives the names from `cluster_name`, `num_instances`, and the instance group.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MachineType",
      "The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/(https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinCpuPlatform",
      "Specifies the minimum cpu platform for the Instance Group. See (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IsPreemptible",
      "Output only. Specifies that this instance group contains preemptible instances.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Accelerators",
      "The Compute Engine accelerator configuration for these instances.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerator_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DiskConfig",
      "Disk option config settings.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NumInstances",
      "The number of VM instances in the instance group. For master instance groups, must be set to 1.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Preemptibility",
      "Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ManagedGroupConfigs",
      "Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigManagedGroupConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
