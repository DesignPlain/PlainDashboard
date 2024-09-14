import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataproc_ClusterClusterConfigMasterConfigAccelerator,
  dataproc_ClusterClusterConfigMasterConfigAccelerator_GetTypes,
} from "./dataproc_ClusterClusterConfigMasterConfigAccelerator";
import {
  dataproc_ClusterClusterConfigMasterConfigDiskConfig,
  dataproc_ClusterClusterConfigMasterConfigDiskConfig_GetTypes,
} from "./dataproc_ClusterClusterConfigMasterConfigDiskConfig";

export interface dataproc_ClusterClusterConfigMasterConfig {
  /*
The URI for the image to use for this worker.  See [the guide](https://cloud.google.com/dataproc/docs/guides/dataproc-images)
for more information.
*/
  imageUri?: string;

  // List of master instance names which have been assigned to the cluster.
  instanceNames?: Array<string>;

  /*
The name of a Google Compute Engine machine type
to create for the master. If not specified, GCP will default to a predetermined
computed value (currently `n1-standard-4`).
*/
  machineType?: string;

  /*
The name of a minimum generation of CPU family
for the master. If not specified, GCP will default to a predetermined computed value
for each zone. See [the guide](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
for details about which CPU families are available (and defaulted) for each zone.
*/
  minCpuPlatform?: string;

  /*
Specifies the number of master nodes to create.
If not specified, GCP will default to a predetermined computed value (currently 1).
*/
  numInstances?: number;

  // The Compute Engine accelerator (GPU) configuration for these instances. Can be specified multiple times.
  accelerators?: Array<dataproc_ClusterClusterConfigMasterConfigAccelerator>;

  // Disk Config
  diskConfig?: dataproc_ClusterClusterConfigMasterConfigDiskConfig;
}

export function dataproc_ClusterClusterConfigMasterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "The name of a Google Compute Engine machine type\nto create for the master. If not specified, GCP will default to a predetermined\ncomputed value (currently `n1-standard-4`).",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "minCpuPlatform",
      "The name of a minimum generation of CPU family\nfor the master. If not specified, GCP will default to a predetermined computed value\nfor each zone. See [the guide](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)\nfor details about which CPU families are available (and defaulted) for each zone.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numInstances",
      "Specifies the number of master nodes to create.\nIf not specified, GCP will default to a predetermined computed value (currently 1).",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "accelerators",
      "The Compute Engine accelerator (GPU) configuration for these instances. Can be specified multiple times.",
      () => dataproc_ClusterClusterConfigMasterConfigAccelerator_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "diskConfig",
      "Disk Config",
      () => dataproc_ClusterClusterConfigMasterConfigDiskConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageUri",
      "The URI for the image to use for this worker.  See [the guide](https://cloud.google.com/dataproc/docs/guides/dataproc-images)\nfor more information.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceNames",
      "List of master instance names which have been assigned to the cluster.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
