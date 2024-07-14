import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datasync_LocationFsxOntapFileSystemProtocolNfsMountOptions,
  datasync_LocationFsxOntapFileSystemProtocolNfsMountOptions_GetTypes,
} from "./datasync_LocationFsxOntapFileSystemProtocolNfsMountOptions";

export interface datasync_LocationFsxOntapFileSystemProtocolNfs {
  // Mount options that are available for DataSync to access an NFS location. See NFS Mount Options below.
  mountOptions?: datasync_LocationFsxOntapFileSystemProtocolNfsMountOptions;
}

export function datasync_LocationFsxOntapFileSystemProtocolNfs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "mountOptions",
      "Mount options that are available for DataSync to access an NFS location. See NFS Mount Options below.",
      datasync_LocationFsxOntapFileSystemProtocolNfsMountOptions_GetTypes(),
      true,
      true,
    ),
  ];
}
