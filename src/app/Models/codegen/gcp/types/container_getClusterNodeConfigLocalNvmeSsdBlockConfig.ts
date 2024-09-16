import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterNodeConfigLocalNvmeSsdBlockConfig {
  // Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.
  localSsdCount?: number;
}

export function container_getClusterNodeConfigLocalNvmeSsdBlockConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'localSsdCount',
      'Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.',
      () => [],
      true,
      false,
    ),
  ];
}
