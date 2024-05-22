import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualGatewaySpecLoggingAccessLog,
  appmesh_getVirtualGatewaySpecLoggingAccessLog_GetTypes,
} from "./appmesh_getVirtualGatewaySpecLoggingAccessLog";

export interface appmesh_getVirtualGatewaySpecLogging {
  //
  accessLogs?: Array<appmesh_getVirtualGatewaySpecLoggingAccessLog>;
}

export function appmesh_getVirtualGatewaySpecLogging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "accessLogs",
      "",
      appmesh_getVirtualGatewaySpecLoggingAccessLog_GetTypes(),
      true,
      false,
    ),
  ];
}
