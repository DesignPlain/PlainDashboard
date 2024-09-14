import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_IntentFollowUpPromptRejectionStatementMessage,
  lex_IntentFollowUpPromptRejectionStatementMessage_GetTypes,
} from "./lex_IntentFollowUpPromptRejectionStatementMessage";

export interface lex_IntentFollowUpPromptRejectionStatement {
  //
  messages?: Array<lex_IntentFollowUpPromptRejectionStatementMessage>;

  //
  responseCard?: string;
}

export function lex_IntentFollowUpPromptRejectionStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "messages",
      "",
      () => lex_IntentFollowUpPromptRejectionStatementMessage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "responseCard",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
