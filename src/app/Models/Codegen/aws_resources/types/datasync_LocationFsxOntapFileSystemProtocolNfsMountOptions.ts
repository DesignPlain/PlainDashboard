import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datasync_LocationFsxOntapFileSystemProtocolNfsMountOptions {
  // The specific NFS version that you want DataSync to use for mounting your NFS share. Valid values: `NFS3`. Default: `NFS3`
  version?: string;
}

export function datasync_LocationFsxOntapFileSystemProtocolNfsMountOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "version",
      "The specific NFS version that you want DataSync to use for mounting your NFS share. Valid values: `NFS3`. Default: `NFS3`",
      [],
      false,
      true,
    ),
  ];
}
