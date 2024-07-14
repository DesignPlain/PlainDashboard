import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataproc_ClusterClusterConfigWorkerConfigAccelerator,
  dataproc_ClusterClusterConfigWorkerConfigAccelerator_GetTypes,
} from "./dataproc_ClusterClusterConfigWorkerConfigAccelerator";
import {
  dataproc_ClusterClusterConfigWorkerConfigDiskConfig,
  dataproc_ClusterClusterConfigWorkerConfigDiskConfig_GetTypes,
} from "./dataproc_ClusterClusterConfigWorkerConfigDiskConfig";

export interface dataproc_ClusterClusterConfigWorkerConfig {
  /*
Specifies the number of worker nodes to create.
If not specified, GCP will default to a predetermined computed value (currently 2).
There is currently a beta feature which allows you to run a
[Single Node Cluster](https://cloud.google.com/dataproc/docs/concepts/single-node-clusters).
In order to take advantage of this you need to set
`"dataproc:dataproc.allow.zero.workers" = "true"` in
`cluster_config.software_config.properties`
*/
  numInstances?: number;

  // The Compute Engine accelerator configuration for these instances. Can be specified multiple times.
  accelerators?: Array<dataproc_ClusterClusterConfigWorkerConfigAccelerator>;

  // Disk Config
  diskConfig?: dataproc_ClusterClusterConfigWorkerConfigDiskConfig;

  /*
The URI for the image to use for this worker.  See [the guide](https://cloud.google.com/dataproc/docs/guides/dataproc-images)
for more information.
*/
  imageUri?: string;

  // List of master/worker instance names which have been assigned to the cluster.
  instanceNames?: Array<string>;

  /*
The name of a Google Compute Engine machine type
to create for the worker nodes. If not specified, GCP will default to a predetermined
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

  // The minimum number of primary worker instances to create.  If `min_num_instances` is set, cluster creation will succeed if the number of primary workers created is at least equal to the `min_num_instances` number.
  minNumInstances?: number;
}

export function dataproc_ClusterClusterConfigWorkerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "The name of a Google Compute Engine machine type\nto create for the worker nodes. If not specified, GCP will default to a predetermined\ncomputed value (currently `n1-standard-4`).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "minCpuPlatform",
      "The name of a minimum generation of CPU family\nfor the master. If not specified, GCP will default to a predetermined computed value\nfor each zone. See [the guide](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)\nfor details about which CPU families are available (and defaulted) for each zone.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minNumInstances",
      "The minimum number of primary worker instances to create.  If `min_num_instances` is set, cluster creation will succeed if the number of primary workers created is at least equal to the `min_num_instances` number.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numInstances",
      'Specifies the number of worker nodes to create.\nIf not specified, GCP will default to a predetermined computed value (currently 2).\nThere is currently a beta feature which allows you to run a\n[Single Node Cluster](https://cloud.google.com/dataproc/docs/concepts/single-node-clusters).\nIn order to take advantage of this you need to set\n`"dataproc:dataproc.allow.zero.workers" = "true"` in\n`cluster_config.software_config.properties`',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "accelerators",
      "The Compute Engine accelerator configuration for these instances. Can be specified multiple times.",
      dataproc_ClusterClusterConfigWorkerConfigAccelerator_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "diskConfig",
      "Disk Config",
      dataproc_ClusterClusterConfigWorkerConfigDiskConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageUri",
      "The URI for the image to use for this worker.  See [the guide](https://cloud.google.com/dataproc/docs/guides/dataproc-images)\nfor more information.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceNames",
      "List of master/worker instance names which have been assigned to the cluster.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
