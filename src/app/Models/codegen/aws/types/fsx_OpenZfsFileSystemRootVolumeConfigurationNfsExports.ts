import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration,
  fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration_GetTypes,
} from "./fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration";

export interface fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExports {
  // A list of configuration objects that contain the client and options for mounting the OpenZFS file system. Maximum of 25 items. See `client_configurations` Block for details.
  clientConfigurations?: Array<fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration>;
}

export function fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExports_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "clientConfigurations",
      "A list of configuration objects that contain the client and options for mounting the OpenZFS file system. Maximum of 25 items. See `client_configurations` Block for details.",
      () =>
        fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
