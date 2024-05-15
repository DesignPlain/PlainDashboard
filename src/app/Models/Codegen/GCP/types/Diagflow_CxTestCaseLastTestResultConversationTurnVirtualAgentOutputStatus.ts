import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus {
  // The status code, which should be an enum value of google.rpc.Code.
  Code?: number;

  // A JSON encoded list of messages that carry the error details.
  Details?: string;

  // A developer-facing error message.
  Message?: string;
}

export function Diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus_GetTypes(): DynamicUIProps[] {
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
      InputType.String,
      "Details",
      "A JSON encoded list of messages that carry the error details.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Message",
      "A developer-facing error message.",
      [],
      false,
      false,
    ),
  ];
}
