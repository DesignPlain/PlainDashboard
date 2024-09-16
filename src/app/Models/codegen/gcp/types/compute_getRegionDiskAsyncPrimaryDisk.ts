import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_getRegionDiskAsyncPrimaryDisk {
  // Primary disk for asynchronous disk replication.
  disk?: string;
}

export function compute_getRegionDiskAsyncPrimaryDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'disk',
      'Primary disk for asynchronous disk replication.',
      () => [],
      true,
      false,
    ),
  ];
}
