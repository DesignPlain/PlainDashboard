import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualNodeSpecLoggingAccessLog,
  appmesh_getVirtualNodeSpecLoggingAccessLog_GetTypes,
} from "./appmesh_getVirtualNodeSpecLoggingAccessLog";

export interface appmesh_getVirtualNodeSpecLogging {
  //
  accessLogs?: Array<appmesh_getVirtualNodeSpecLoggingAccessLog>;
}

export function appmesh_getVirtualNodeSpecLogging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "accessLogs",
      "",
      () => appmesh_getVirtualNodeSpecLoggingAccessLog_GetTypes(),
      true,
      false,
    ),
  ];
}
