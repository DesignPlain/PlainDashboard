import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualNodeSpecLoggingAccessLog,
  appmesh_VirtualNodeSpecLoggingAccessLog_GetTypes,
} from "./appmesh_VirtualNodeSpecLoggingAccessLog";

export interface appmesh_VirtualNodeSpecLogging {
  // Access log configuration for a virtual node.
  accessLog?: appmesh_VirtualNodeSpecLoggingAccessLog;
}

export function appmesh_VirtualNodeSpecLogging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "accessLog",
      "Access log configuration for a virtual node.",
      () => appmesh_VirtualNodeSpecLoggingAccessLog_GetTypes(),
      false,
      false,
    ),
  ];
}
