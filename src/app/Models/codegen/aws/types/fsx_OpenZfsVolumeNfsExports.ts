import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  fsx_OpenZfsVolumeNfsExportsClientConfiguration,
  fsx_OpenZfsVolumeNfsExportsClientConfiguration_GetTypes,
} from './fsx_OpenZfsVolumeNfsExportsClientConfiguration';

export interface fsx_OpenZfsVolumeNfsExports {
  // A list of configuration objects that contain the client and options for mounting the OpenZFS file system. Maximum of 25 items. See `client_configurations` Block below for details.
  clientConfigurations?: Array<fsx_OpenZfsVolumeNfsExportsClientConfiguration>;
}

export function fsx_OpenZfsVolumeNfsExports_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'clientConfigurations',
      'A list of configuration objects that contain the client and options for mounting the OpenZFS file system. Maximum of 25 items. See `client_configurations` Block below for details.',
      () => fsx_OpenZfsVolumeNfsExportsClientConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
