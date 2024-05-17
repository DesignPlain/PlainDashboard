import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator,
  Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator_GetTypes,
} from "./Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator";
import {
  Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigDiskConfig,
  Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigDiskConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigDiskConfig";

export interface Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig {
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

  /*
The Compute Engine accelerator (GPU) configuration for these instances. Can be specified 
multiple times.
*/
  Accelerators?: Array<Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator>;

  // Disk Config
  DiskConfig?: Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigDiskConfig;

  // List of auxiliary node group instance names which have been assigned to the cluster.
  InstanceNames?: Array<string>;

  /*
The name of a Google Compute Engine machine type
to create for the node group. If not specified, GCP will default to a predetermined
computed value (currently `n1-standard-4`).
*/
  MachineType?: string;
}

export function Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "DiskConfig",
      "Disk Config",
      Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigDiskConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InstanceNames",
      "List of auxiliary node group instance names which have been assigned to the cluster.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MachineType",
      "The name of a Google Compute Engine machine type\nto create for the node group. If not specified, GCP will default to a predetermined\ncomputed value (currently `n1-standard-4`).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinCpuPlatform",
      "The name of a minimum generation of CPU family\nfor the node group. If not specified, GCP will default to a predetermined computed value\nfor each zone. See [the guide](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)\nfor details about which CPU families are available (and defaulted) for each zone.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NumInstances",
      "Specifies the number of master nodes to create.\nPlease set a number greater than 0. Node Group must have at least 1 instance.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Accelerators",
      "The Compute Engine accelerator (GPU) configuration for these instances. Can be specified \nmultiple times.",
      Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator_GetTypes(),
      false,
      true,
    ),
  ];
}
