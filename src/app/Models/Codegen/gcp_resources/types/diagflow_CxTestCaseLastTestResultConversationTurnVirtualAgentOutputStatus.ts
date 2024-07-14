import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus {
  // The status code, which should be an enum value of google.rpc.Code.
  code?: number;

  // A JSON encoded list of messages that carry the error details.
  details?: string;

  // A developer-facing error message.
  message?: string;
}

export function diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "code",
      "The status code, which should be an enum value of google.rpc.Code.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "details",
      "A JSON encoded list of messages that carry the error details.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "message",
      "A developer-facing error message.",
      [],
      false,
      false,
    ),
  ];
}
