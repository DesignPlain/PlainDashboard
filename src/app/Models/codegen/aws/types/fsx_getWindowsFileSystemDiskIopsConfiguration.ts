import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface fsx_getWindowsFileSystemDiskIopsConfiguration {
  //
  iops?: number;

  //
  mode?: string;
}

export function fsx_getWindowsFileSystemDiskIopsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, 'iops', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'mode', '', () => [], true, false),
  ];
}
