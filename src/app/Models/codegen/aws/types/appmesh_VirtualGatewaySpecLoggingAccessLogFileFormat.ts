import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualGatewaySpecLoggingAccessLogFileFormatJson,
  appmesh_VirtualGatewaySpecLoggingAccessLogFileFormatJson_GetTypes,
} from "./appmesh_VirtualGatewaySpecLoggingAccessLogFileFormatJson";

export interface appmesh_VirtualGatewaySpecLoggingAccessLogFileFormat {
  // The logging format for JSON.
  jsons?: Array<appmesh_VirtualGatewaySpecLoggingAccessLogFileFormatJson>;

  // The logging format for text. Must be between 1 and 1000 characters in length.
  text?: string;
}

export function appmesh_VirtualGatewaySpecLoggingAccessLogFileFormat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "jsons",
      "The logging format for JSON.",
      () => appmesh_VirtualGatewaySpecLoggingAccessLogFileFormatJson_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "text",
      "The logging format for text. Must be between 1 and 1000 characters in length.",
      () => [],
      false,
      false,
    ),
  ];
}
