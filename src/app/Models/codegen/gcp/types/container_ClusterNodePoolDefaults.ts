import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_ClusterNodePoolDefaultsNodeConfigDefaults,
  container_ClusterNodePoolDefaultsNodeConfigDefaults_GetTypes,
} from './container_ClusterNodePoolDefaultsNodeConfigDefaults';

export interface container_ClusterNodePoolDefaults {
  // Subset of NodeConfig message that has defaults.
  nodeConfigDefaults?: container_ClusterNodePoolDefaultsNodeConfigDefaults;
}

export function container_ClusterNodePoolDefaults_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'nodeConfigDefaults',
      'Subset of NodeConfig message that has defaults.',
      () => container_ClusterNodePoolDefaultsNodeConfigDefaults_GetTypes(),
      false,
      false,
    ),
  ];
}
