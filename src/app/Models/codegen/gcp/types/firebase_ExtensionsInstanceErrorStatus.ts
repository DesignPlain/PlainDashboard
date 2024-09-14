import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface firebase_ExtensionsInstanceErrorStatus {
  // The status code, which should be an enum value of google.rpc.Code.
  code?: number;

  // A list of messages that carry the error details.
  details?: Array<Map<string, string>>;

  // A developer-facing error message, which should be in English.
  message?: string;
}

export function firebase_ExtensionsInstanceErrorStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "code",
      "The status code, which should be an enum value of google.rpc.Code.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "details",
      "A list of messages that carry the error details.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "message",
      "A developer-facing error message, which should be in English.",
      () => [],
      false,
      false,
    ),
  ];
}
