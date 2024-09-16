import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface fsx_getWindowsFileSystemAuditLogConfiguration {
  //
  fileAccessAuditLogLevel?: string;

  //
  fileShareAccessAuditLogLevel?: string;

  //
  auditLogDestination?: string;
}

export function fsx_getWindowsFileSystemAuditLogConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'fileAccessAuditLogLevel',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'fileShareAccessAuditLogLevel',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'auditLogDestination',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
