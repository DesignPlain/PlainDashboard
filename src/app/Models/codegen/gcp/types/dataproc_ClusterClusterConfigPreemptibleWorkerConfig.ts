import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_ClusterClusterConfigPreemptibleWorkerConfigDiskConfig,
  dataproc_ClusterClusterConfigPreemptibleWorkerConfigDiskConfig_GetTypes,
} from './dataproc_ClusterClusterConfigPreemptibleWorkerConfigDiskConfig';
import {
  dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy,
  dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy_GetTypes,
} from './dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy';

export interface dataproc_ClusterClusterConfigPreemptibleWorkerConfig {
  // Disk Config
  diskConfig?: dataproc_ClusterClusterConfigPreemptibleWorkerConfigDiskConfig;

  // Instance flexibility Policy allowing a mixture of VM shapes and provisioning models.
  instanceFlexibilityPolicy?: dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy;

  // List of preemptible instance names which have been assigned to the cluster.
  instanceNames?: Array<string>;

  /*
Specifies the number of preemptible nodes to create.
Defaults to 0.
*/
  numInstances?: number;

  /*
Specifies the preemptibility of the secondary workers. The default value is `PREEMPTIBLE`
Accepted values are:
- PREEMPTIBILITY_UNSPECIFIED
- NON_PREEMPTIBLE
- PREEMPTIBLE
*/
  preemptibility?: string;
}

export function dataproc_ClusterClusterConfigPreemptibleWorkerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'diskConfig',
      'Disk Config',
      () =>
        dataproc_ClusterClusterConfigPreemptibleWorkerConfigDiskConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'instanceFlexibilityPolicy',
      'Instance flexibility Policy allowing a mixture of VM shapes and provisioning models.',
      () =>
        dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'instanceNames',
      'List of preemptible instance names which have been assigned to the cluster.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'numInstances',
      'Specifies the number of preemptible nodes to create.\nDefaults to 0.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'preemptibility',
      'Specifies the preemptibility of the secondary workers. The default value is `PREEMPTIBLE`\nAccepted values are:\n* PREEMPTIBILITY_UNSPECIFIED\n* NON_PREEMPTIBLE\n* PREEMPTIBLE',
      () => [],
      false,
      true,
    ),
  ];
}
