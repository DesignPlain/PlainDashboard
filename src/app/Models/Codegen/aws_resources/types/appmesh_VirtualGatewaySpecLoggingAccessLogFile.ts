import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_VirtualGatewaySpecLoggingAccessLogFileFormat,
  appmesh_VirtualGatewaySpecLoggingAccessLogFileFormat_GetTypes,
} from "./appmesh_VirtualGatewaySpecLoggingAccessLogFileFormat";

export interface appmesh_VirtualGatewaySpecLoggingAccessLogFile {
  // The specified format for the logs.
  format?: appmesh_VirtualGatewaySpecLoggingAccessLogFileFormat;

  // File path to write access logs to. You can use `/dev/stdout` to send access logs to standard out. Must be between 1 and 255 characters in length.
  path?: string;
}

export function appmesh_VirtualGatewaySpecLoggingAccessLogFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "format",
      "The specified format for the logs.",
      appmesh_VirtualGatewaySpecLoggingAccessLogFileFormat_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "File path to write access logs to. You can use `/dev/stdout` to send access logs to standard out. Must be between 1 and 255 characters in length.",
      [],
      true,
      false,
    ),
  ];
}
