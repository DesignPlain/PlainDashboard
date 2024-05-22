import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  efs_getAccessPointRootDirectoryCreationInfo,
  efs_getAccessPointRootDirectoryCreationInfo_GetTypes,
} from "./efs_getAccessPointRootDirectoryCreationInfo";

export interface efs_getAccessPointRootDirectory {
  // Single element list containing information on the creation permissions of the directory
  creationInfos?: Array<efs_getAccessPointRootDirectoryCreationInfo>;

  // Path exposed as the root directory
  path?: string;
}

export function efs_getAccessPointRootDirectory_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "creationInfos",
      "Single element list containing information on the creation permissions of the directory",
      efs_getAccessPointRootDirectoryCreationInfo_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path exposed as the root directory",
      [],
      true,
      false,
    ),
  ];
}
