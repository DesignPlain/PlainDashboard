import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  efs_AccessPointRootDirectoryCreationInfo,
  efs_AccessPointRootDirectoryCreationInfo_GetTypes,
} from "./efs_AccessPointRootDirectoryCreationInfo";

export interface efs_AccessPointRootDirectory {
  // POSIX IDs and permissions to apply to the access point's Root Directory. See Creation Info below.
  creationInfo?: efs_AccessPointRootDirectoryCreationInfo;

  // Path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide `creation_info`.
  path?: string;
}

export function efs_AccessPointRootDirectory_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "creationInfo",
      "POSIX IDs and permissions to apply to the access point's Root Directory. See Creation Info below.",
      efs_AccessPointRootDirectoryCreationInfo_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide `creation_info`.",
      [],
      false,
      true,
    ),
  ];
}
