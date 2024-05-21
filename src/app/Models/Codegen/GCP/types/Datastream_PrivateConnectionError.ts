import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datastream_PrivateConnectionError {
  // A list of messages that carry the error details.
  details?: Map<string, string>;

  // A message containing more information about the error that occurred.
  message?: string;
}

export function datastream_PrivateConnectionError_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "details",
      "A list of messages that carry the error details.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "message",
      "A message containing more information about the error that occurred.",
      [],
      false,
      false,
    ),
  ];
}
