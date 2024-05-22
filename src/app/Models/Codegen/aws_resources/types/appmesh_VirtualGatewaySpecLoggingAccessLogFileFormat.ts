import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_VirtualGatewaySpecLoggingAccessLogFileFormatJson,
  appmesh_VirtualGatewaySpecLoggingAccessLogFileFormatJson_GetTypes,
} from "./appmesh_VirtualGatewaySpecLoggingAccessLogFileFormatJson";

export interface appmesh_VirtualGatewaySpecLoggingAccessLogFileFormat {
  // The logging format for text. Must be between 1 and 1000 characters in length.
  text?: string;

  // The logging format for JSON.
  jsons?: Array<appmesh_VirtualGatewaySpecLoggingAccessLogFileFormatJson>;
}

export function appmesh_VirtualGatewaySpecLoggingAccessLogFileFormat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "text",
      "The logging format for text. Must be between 1 and 1000 characters in length.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "jsons",
      "The logging format for JSON.",
      appmesh_VirtualGatewaySpecLoggingAccessLogFileFormatJson_GetTypes(),
      false,
      false,
    ),
  ];
}
