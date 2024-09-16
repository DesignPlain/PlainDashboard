import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig,
  dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig_GetTypes,
} from './dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig';

export interface dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroup {
  /*
The name of the cluster, unique within the project and
zone.

- - -
*/
  name?: string;

  // The node group instance group configuration.
  nodeGroupConfig?: dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig;

  /*
Node group roles. 
One of `"DRIVER"`.
*/
  roles?: Array<string>;
}

export function dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the cluster, unique within the project and\nzone.\n\n- - -',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'nodeGroupConfig',
      'The node group instance group configuration.',
      () =>
        dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'roles',
      'Node group roles. \nOne of `"DRIVER"`.',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
