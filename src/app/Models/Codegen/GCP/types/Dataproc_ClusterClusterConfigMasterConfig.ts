import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterClusterConfigMasterConfigAccelerator,
  Dataproc_ClusterClusterConfigMasterConfigAccelerator_GetTypes,
} from "./Dataproc_ClusterClusterConfigMasterConfigAccelerator";
import {
  Dataproc_ClusterClusterConfigMasterConfigDiskConfig,
  Dataproc_ClusterClusterConfigMasterConfigDiskConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigMasterConfigDiskConfig";

export interface Dataproc_ClusterClusterConfigMasterConfig {
  /*
Specifies the number of master nodes to create.
If not specified, GCP will default to a predetermined computed value (currently 1).
*/
  NumInstances?: number;

  // The Compute Engine accelerator (GPU) configuration for these instances. Can be specified multiple times.
  Accelerators?: Array<Dataproc_ClusterClusterConfigMasterConfigAccelerator>;

  // Disk Config
  DiskConfig?: Dataproc_ClusterClusterConfigMasterConfigDiskConfig;

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

export function Dataproc_ClusterClusterConfigMasterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "InstanceNames",
      "List of master instance names which have been assigned to the cluster.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MachineType",
      "The name of a Google Compute Engine machine type\nto create for the master. If not specified, GCP will default to a predetermined\ncomputed value (currently `n1-standard-4`).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinCpuPlatform",
      "The name of a minimum generation of CPU family\nfor the master. If not specified, GCP will default to a predetermined computed value\nfor each zone. See [the guide](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)\nfor details about which CPU families are available (and defaulted) for each zone.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NumInstances",
      "Specifies the number of master nodes to create.\nIf not specified, GCP will default to a predetermined computed value (currently 1).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Accelerators",
      "The Compute Engine accelerator (GPU) configuration for these instances. Can be specified multiple times.",
      Dataproc_ClusterClusterConfigMasterConfigAccelerator_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DiskConfig",
      "Disk Config",
      Dataproc_ClusterClusterConfigMasterConfigDiskConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ImageUri",
      "The URI for the image to use for this worker.  See [the guide](https://cloud.google.com/dataproc/docs/guides/dataproc-images)\nfor more information.",
      [],
      false,
      true,
    ),
  ];
}
