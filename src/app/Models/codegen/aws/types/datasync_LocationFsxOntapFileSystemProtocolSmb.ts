import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datasync_LocationFsxOntapFileSystemProtocolSmbMountOptions,
  datasync_LocationFsxOntapFileSystemProtocolSmbMountOptions_GetTypes,
} from "./datasync_LocationFsxOntapFileSystemProtocolSmbMountOptions";

export interface datasync_LocationFsxOntapFileSystemProtocolSmb {
  // Fully qualified domain name of the Microsoft Active Directory (AD) that your storage virtual machine belongs to.
  domain?: string;

  // Mount options that are available for DataSync to access an SMB location. See SMB Mount Options below.
  mountOptions?: datasync_LocationFsxOntapFileSystemProtocolSmbMountOptions;

  // Password of a user who has permission to access your SVM.
  password?: string;

  // Username that can mount the location and access the files, folders, and metadata that you need in the SVM.
  user?: string;
}

export function datasync_LocationFsxOntapFileSystemProtocolSmb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "mountOptions",
      "Mount options that are available for DataSync to access an SMB location. See SMB Mount Options below.",
      () =>
        datasync_LocationFsxOntapFileSystemProtocolSmbMountOptions_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "password",
      "Password of a user who has permission to access your SVM.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "user",
      "Username that can mount the location and access the files, folders, and metadata that you need in the SVM.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "domain",
      "Fully qualified domain name of the Microsoft Active Directory (AD) that your storage virtual machine belongs to.",
      () => [],
      false,
      true,
    ),
  ];
}
