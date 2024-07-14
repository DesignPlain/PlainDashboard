import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration,
  fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration_GetTypes,
} from "./fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration";

export interface fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExports {
  // A list of configuration objects that contain the client and options for mounting the OpenZFS file system. Maximum of 25 items. See Client Configurations Below.
  clientConfigurations?: Array<fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration>;
}

export function fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExports_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "clientConfigurations",
      "A list of configuration objects that contain the client and options for mounting the OpenZFS file system. Maximum of 25 items. See Client Configurations Below.",
      fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
