import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig {
  // Name of the VPC where the additional interface belongs.
  network?: string;

  // Name of the subnetwork where the additional interface belongs.
  subnetwork?: string;
}

export function container_getClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'network',
      'Name of the VPC where the additional interface belongs.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'subnetwork',
      'Name of the subnetwork where the additional interface belongs.',
      () => [],
      true,
      false,
    ),
  ];
}
