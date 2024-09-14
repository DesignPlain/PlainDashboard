import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_VirtualGatewaySpecLoggingAccessLogFileFormatJson {
  // The specified value for the JSON. Must be between 1 and 100 characters in length.
  value?: string;

  // The specified key for the JSON. Must be between 1 and 100 characters in length.
  key?: string;
}

export function appmesh_VirtualGatewaySpecLoggingAccessLogFileFormatJson_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "The specified key for the JSON. Must be between 1 and 100 characters in length.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The specified value for the JSON. Must be between 1 and 100 characters in length.",
      () => [],
      true,
      false,
    ),
  ];
}
