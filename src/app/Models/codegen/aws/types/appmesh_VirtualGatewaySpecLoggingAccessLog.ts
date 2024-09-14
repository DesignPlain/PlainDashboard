import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualGatewaySpecLoggingAccessLogFile,
  appmesh_VirtualGatewaySpecLoggingAccessLogFile_GetTypes,
} from "./appmesh_VirtualGatewaySpecLoggingAccessLogFile";

export interface appmesh_VirtualGatewaySpecLoggingAccessLog {
  // File object to send virtual gateway access logs to.
  file?: appmesh_VirtualGatewaySpecLoggingAccessLogFile;
}

export function appmesh_VirtualGatewaySpecLoggingAccessLog_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "file",
      "File object to send virtual gateway access logs to.",
      () => appmesh_VirtualGatewaySpecLoggingAccessLogFile_GetTypes(),
      false,
      false,
    ),
  ];
}
