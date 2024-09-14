import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualGatewaySpecLoggingAccessLog,
  appmesh_VirtualGatewaySpecLoggingAccessLog_GetTypes,
} from "./appmesh_VirtualGatewaySpecLoggingAccessLog";

export interface appmesh_VirtualGatewaySpecLogging {
  // Access log configuration for a virtual gateway.
  accessLog?: appmesh_VirtualGatewaySpecLoggingAccessLog;
}

export function appmesh_VirtualGatewaySpecLogging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "accessLog",
      "Access log configuration for a virtual gateway.",
      () => appmesh_VirtualGatewaySpecLoggingAccessLog_GetTypes(),
      false,
      false,
    ),
  ];
}
