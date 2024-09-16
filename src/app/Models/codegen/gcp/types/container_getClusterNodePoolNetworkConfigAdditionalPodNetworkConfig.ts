import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig {
  // The maximum number of pods per node which use this pod network.
  maxPodsPerNode?: number;

  // The name of the secondary range on the subnet which provides IP address for this pod range.
  secondaryPodRange?: string;

  // Name of the subnetwork where the additional pod network belongs.
  subnetwork?: string;
}

export function container_getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maxPodsPerNode',
      'The maximum number of pods per node which use this pod network.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'secondaryPodRange',
      'The name of the secondary range on the subnet which provides IP address for this pod range.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'subnetwork',
      'Name of the subnetwork where the additional pod network belongs.',
      () => [],
      true,
      false,
    ),
  ];
}
