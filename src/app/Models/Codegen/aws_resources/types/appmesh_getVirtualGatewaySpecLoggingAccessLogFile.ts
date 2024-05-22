import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormat,
  appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormat_GetTypes,
} from "./appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormat";

export interface appmesh_getVirtualGatewaySpecLoggingAccessLogFile {
  //
  formats?: Array<appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormat>;

  //
  path?: string;
}

export function appmesh_getVirtualGatewaySpecLoggingAccessLogFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "formats",
      "",
      appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormat_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "path", "", [], true, false),
  ];
}
