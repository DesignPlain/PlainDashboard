import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datasync_FsxOpenZfsFileSystemProtocolNfsMountOptions,
  datasync_FsxOpenZfsFileSystemProtocolNfsMountOptions_GetTypes,
} from "./datasync_FsxOpenZfsFileSystemProtocolNfsMountOptions";

export interface datasync_FsxOpenZfsFileSystemProtocolNfs {
  // Represents the mount options that are available for DataSync to access an NFS location. See below.
  mountOptions?: datasync_FsxOpenZfsFileSystemProtocolNfsMountOptions;
}

export function datasync_FsxOpenZfsFileSystemProtocolNfs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "mountOptions",
      "Represents the mount options that are available for DataSync to access an NFS location. See below.",
      datasync_FsxOpenZfsFileSystemProtocolNfsMountOptions_GetTypes(),
      true,
      true,
    ),
  ];
}
