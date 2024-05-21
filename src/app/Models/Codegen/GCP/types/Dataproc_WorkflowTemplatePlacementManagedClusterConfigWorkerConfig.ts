import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerator,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerator_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerator";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigManagedGroupConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigManagedGroupConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigManagedGroupConfig";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig";

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfig {
  // The Compute Engine accelerator configuration for these instances.
  accelerators?: Array<dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerator>;

  // Output only. The list of instance names. Dataproc derives the names from `cluster_name`, `num_instances`, and the instance group.
  instanceNames?: Array<string>;

  // Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.
  managedGroupConfigs?: Array<dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigManagedGroupConfig>;

  // Specifies the minimum cpu platform for the Instance Group. See (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
  minCpuPlatform?: string;

  // Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE
  preemptibility?: string;

  // Disk option config settings.
  diskConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig;

  // The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: - `https://www.googleapis.com/compute/beta/projects/` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
  image?: string;

  // Output only. Specifies that this instance group contains preemptible instances.
  isPreemptible?: boolean;

  // The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: - `https://www.googleapis.com/compute/v1/projects/(https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`.
  machineType?: string;

  // The number of VM instances in the instance group. For master instance groups, must be set to 1.
  numInstances?: number;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "accelerators",
      "The Compute Engine accelerator configuration for these instances.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerator_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "managedGroupConfigs",
      "Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigManagedGroupConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "diskConfig",
      "Disk option config settings.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "image",
      "The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: * `https://www.googleapis.com/compute/beta/projects/` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numInstances",
      "The number of VM instances in the instance group. For master instance groups, must be set to 1.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceNames",
      "Output only. The list of instance names. Dataproc derives the names from `cluster_name`, `num_instances`, and the instance group.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minCpuPlatform",
      "Specifies the minimum cpu platform for the Instance Group. See (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "preemptibility",
      "Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isPreemptible",
      "Output only. Specifies that this instance group contains preemptible instances.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/(https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`.",
      [],
      false,
      true,
    ),
  ];
}
