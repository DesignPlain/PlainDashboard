import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datastream_PrivateConnectionError {
  // A list of messages that carry the error details.
  Details?: Map<string, string>;

  // A message containing more information about the error that occurred.
  Message?: string;
}

export function Datastream_PrivateConnectionError_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Details",
      "A list of messages that carry the error details.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Message",
      "A message containing more information about the error that occurred.",
      [],
      false,
      false,
    ),
  ];
}
