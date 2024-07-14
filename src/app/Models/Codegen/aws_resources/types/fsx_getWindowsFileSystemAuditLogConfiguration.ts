import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface fsx_getWindowsFileSystemAuditLogConfiguration {
  //
  auditLogDestination?: string;

  //
  fileAccessAuditLogLevel?: string;

  //
  fileShareAccessAuditLogLevel?: string;
}

export function fsx_getWindowsFileSystemAuditLogConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "auditLogDestination",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fileAccessAuditLogLevel",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fileShareAccessAuditLogLevel",
      "",
      [],
      true,
      false,
    ),
  ];
}
