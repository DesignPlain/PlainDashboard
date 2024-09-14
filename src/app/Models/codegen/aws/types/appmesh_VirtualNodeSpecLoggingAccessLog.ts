import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualNodeSpecLoggingAccessLogFile,
  appmesh_VirtualNodeSpecLoggingAccessLogFile_GetTypes,
} from "./appmesh_VirtualNodeSpecLoggingAccessLogFile";

export interface appmesh_VirtualNodeSpecLoggingAccessLog {
  // File object to send virtual node access logs to.
  file?: appmesh_VirtualNodeSpecLoggingAccessLogFile;
}

export function appmesh_VirtualNodeSpecLoggingAccessLog_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "file",
      "File object to send virtual node access logs to.",
      () => appmesh_VirtualNodeSpecLoggingAccessLogFile_GetTypes(),
      false,
      false,
    ),
  ];
}
