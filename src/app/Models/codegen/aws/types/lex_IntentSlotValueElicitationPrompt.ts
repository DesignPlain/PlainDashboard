import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_IntentSlotValueElicitationPromptMessage,
  lex_IntentSlotValueElicitationPromptMessage_GetTypes,
} from "./lex_IntentSlotValueElicitationPromptMessage";

export interface lex_IntentSlotValueElicitationPrompt {
  //
  responseCard?: string;

  // The number of times to prompt the user for information. Must be a number between 1 and 5 (inclusive).
  maxAttempts?: number;

  //
  messages?: Array<lex_IntentSlotValueElicitationPromptMessage>;
}

export function lex_IntentSlotValueElicitationPrompt_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxAttempts",
      "The number of times to prompt the user for information. Must be a number between 1 and 5 (inclusive).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "messages",
      "",
      () => lex_IntentSlotValueElicitationPromptMessage_GetTypes(),
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
