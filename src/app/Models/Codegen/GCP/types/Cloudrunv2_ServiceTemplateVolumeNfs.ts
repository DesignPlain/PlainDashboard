import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_ServiceTemplateVolumeNfs {
  // Path that is exported by the NFS server.
  Path?: string;

  /*
If true, mount the NFS volume as read only

- - -
*/
  ReadOnly?: boolean;

  // Hostname or IP address of the NFS server
  Server?: string;
}

export function Cloudrunv2_ServiceTemplateVolumeNfs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Server",
      "Hostname or IP address of the NFS server",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "Path that is exported by the NFS server.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ReadOnly",
      "If true, mount the NFS volume as read only\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
