import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Databasemigrationservice_ConnectionProfileError {
  /*
(Output)
The status code, which should be an enum value of google.rpc.Code.
*/
  Code?: number;

  /*
(Output)
A list of messages that carry the error details.
*/
  Details?: Array<Map<string, InputType.String>>;

  /*
(Output)
Human readable message indicating details about the current status.
*/
  Message?: string;
}

export function Databasemigrationservice_ConnectionProfileError_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Code",
      "(Output)\nThe status code, which should be an enum value of google.rpc.Code.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Details",
      "(Output)\nA list of messages that carry the error details.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Message",
      "(Output)\nHuman readable message indicating details about the current status.",
      [],
      false,
      false,
    ),
  ];
}
