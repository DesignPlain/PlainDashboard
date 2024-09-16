import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterNodePoolAutoConfigNetworkTag {
  // List of network tags applied to auto-provisioned node pools.
  tags?: Array<string>;
}

export function container_getClusterNodePoolAutoConfigNetworkTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'tags',
      'List of network tags applied to auto-provisioned node pools.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
