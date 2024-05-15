import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterClusterConfigWorkerConfigDiskConfig,
  Dataproc_ClusterClusterConfigWorkerConfigDiskConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigWorkerConfigDiskConfig";
import {
  Dataproc_ClusterClusterConfigWorkerConfigAccelerator,
  Dataproc_ClusterClusterConfigWorkerConfigAccelerator_GetTypes,
} from "./Dataproc_ClusterClusterConfigWorkerConfigAccelerator";

export interface Dataproc_ClusterClusterConfigWorkerConfig {
  // Disk Config
  DiskConfig?: Dataproc_ClusterClusterConfigWorkerConfigDiskConfig;

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

  // The Compute Engine accelerator configuration for these instances. Can be specified multiple times.
  Accelerators?: Array<Dataproc_ClusterClusterConfigWorkerConfigAccelerator>;
}

export function Dataproc_ClusterClusterConfigWorkerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ImageUri",
      "The URI for the image to use for this worker.  See [the guide](https://cloud.google.com/dataproc/docs/guides/dataproc-images)\nfor more information.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InstanceNames",
      "List of master/worker instance names which have been assigned to the cluster.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MachineType",
      "The name of a Google Compute Engine machine type\nto create for the worker nodes. If not specified, GCP will default to a predetermined\ncomputed value (currently `n1-standard-4`).",
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
      "MinNumInstances",
      "The minimum number of primary worker instances to create.  If `min_num_instances` is set, cluster creation will succeed if the number of primary workers created is at least equal to the `min_num_instances` number.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NumInstances",
      'Specifies the number of worker nodes to create.\nIf not specified, GCP will default to a predetermined computed value (currently 2).\nThere is currently a beta feature which allows you to run a\n[Single Node Cluster](https://cloud.google.com/dataproc/docs/concepts/single-node-clusters).\nIn order to take advantage of this you need to set\n`"dataproc:dataproc.allow.zero.workers" = "true"` in\n`cluster_config.software_config.properties`',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Accelerators",
      "The Compute Engine accelerator configuration for these instances. Can be specified multiple times.",
      Dataproc_ClusterClusterConfigWorkerConfigAccelerator_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DiskConfig",
      "Disk Config",
      Dataproc_ClusterClusterConfigWorkerConfigDiskConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
