import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator,
  dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator_GetTypes,
} from './dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator';
import {
  dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigDiskConfig,
  dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigDiskConfig_GetTypes,
} from './dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigDiskConfig';

export interface dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig {
  /*
The name of a minimum generation of CPU family
for the node group. If not specified, GCP will default to a predetermined computed value
for each zone. See [the guide](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
for details about which CPU families are available (and defaulted) for each zone.
*/
  minCpuPlatform?: string;

  /*
Specifies the number of master nodes to create.
Please set a number greater than 0. Node Group must have at least 1 instance.
*/
  numInstances?: number;

  /*
The Compute Engine accelerator (GPU) configuration for these instances. Can be specified 
multiple times.
*/
  accelerators?: Array<dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator>;

  // Disk Config
  diskConfig?: dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigDiskConfig;

  // List of auxiliary node group instance names which have been assigned to the cluster.
  instanceNames?: Array<string>;

  /*
The name of a Google Compute Engine machine type
to create for the node group. If not specified, GCP will default to a predetermined
computed value (currently `n1-standard-4`).
*/
  machineType?: string;
}

export function dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'minCpuPlatform',
      'The name of a minimum generation of CPU family\nfor the node group. If not specified, GCP will default to a predetermined computed value\nfor each zone. See [the guide](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)\nfor details about which CPU families are available (and defaulted) for each zone.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'numInstances',
      'Specifies the number of master nodes to create.\nPlease set a number greater than 0. Node Group must have at least 1 instance.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'accelerators',
      'The Compute Engine accelerator (GPU) configuration for these instances. Can be specified \nmultiple times.',
      () =>
        dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'diskConfig',
      'Disk Config',
      () =>
        dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigDiskConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'instanceNames',
      'List of auxiliary node group instance names which have been assigned to the cluster.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'machineType',
      'The name of a Google Compute Engine machine type\nto create for the node group. If not specified, GCP will default to a predetermined\ncomputed value (currently `n1-standard-4`).',
      () => [],
      false,
      true,
    ),
  ];
}
