import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudrunv2_getServiceTemplateVolumeNf {
  // Hostname or IP address of the NFS server
  server?: string;

  // Path that is exported by the NFS server.
  path?: string;

  // If true, mount the NFS volume as read only
  readOnly?: boolean;
}

export function cloudrunv2_getServiceTemplateVolumeNf_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "server",
      "Hostname or IP address of the NFS server",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path that is exported by the NFS server.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "readOnly",
      "If true, mount the NFS volume as read only",
      [],
      true,
      false,
    ),
  ];
}
