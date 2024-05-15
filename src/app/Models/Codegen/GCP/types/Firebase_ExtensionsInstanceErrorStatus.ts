import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Firebase_ExtensionsInstanceErrorStatus {
  // The status code, which should be an enum value of google.rpc.Code.
  Code?: number;

  // A list of messages that carry the error details.
  Details?: Array<Map<string, InputType.String>>;

  // A developer-facing error message, which should be in English.
  Message?: string;
}

export function Firebase_ExtensionsInstanceErrorStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Code",
      "The status code, which should be an enum value of google.rpc.Code.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Details",
      "A list of messages that carry the error details.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Message",
      "A developer-facing error message, which should be in English.",
      [],
      false,
      false,
    ),
  ];
}
