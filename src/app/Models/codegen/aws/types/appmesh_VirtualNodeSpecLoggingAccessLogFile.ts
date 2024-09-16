import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecLoggingAccessLogFileFormat,
  appmesh_VirtualNodeSpecLoggingAccessLogFileFormat_GetTypes,
} from './appmesh_VirtualNodeSpecLoggingAccessLogFileFormat';

export interface appmesh_VirtualNodeSpecLoggingAccessLogFile {
  // File path to write access logs to. You can use `/dev/stdout` to send access logs to standard out. Must be between 1 and 255 characters in length.
  path?: string;

  // The specified format for the logs.
  format?: appmesh_VirtualNodeSpecLoggingAccessLogFileFormat;
}

export function appmesh_VirtualNodeSpecLoggingAccessLogFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'path',
      'File path to write access logs to. You can use `/dev/stdout` to send access logs to standard out. Must be between 1 and 255 characters in length.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'format',
      'The specified format for the logs.',
      () => appmesh_VirtualNodeSpecLoggingAccessLogFileFormat_GetTypes(),
      false,
      false,
    ),
  ];
}
