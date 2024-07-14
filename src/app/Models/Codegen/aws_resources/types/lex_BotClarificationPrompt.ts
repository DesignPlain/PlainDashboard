import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_BotClarificationPromptMessage,
  lex_BotClarificationPromptMessage_GetTypes,
} from "./lex_BotClarificationPromptMessage";

export interface lex_BotClarificationPrompt {
  // The number of times to prompt the user for information.
  maxAttempts?: number;

  /*
A set of messages, each of which provides a message string and its type.
You can specify the message string in plain text or in Speech Synthesis Markup Language (SSML).
Attributes are documented under message.
*/
  messages?: Array<lex_BotClarificationPromptMessage>;

  /*
The response card. Amazon Lex will substitute session attributes and
slot values into the response card. For more information, see
[Example: Using a Response Card](https://docs.aws.amazon.com/lex/latest/dg/ex-resp-card.html).
*/
  responseCard?: string;
}

export function lex_BotClarificationPrompt_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxAttempts",
      "The number of times to prompt the user for information.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "messages",
      "A set of messages, each of which provides a message string and its type.\nYou can specify the message string in plain text or in Speech Synthesis Markup Language (SSML).\nAttributes are documented under message.",
      lex_BotClarificationPromptMessage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "responseCard",
      "The response card. Amazon Lex will substitute session attributes and\nslot values into the response card. For more information, see\n[Example: Using a Response Card](https://docs.aws.amazon.com/lex/latest/dg/ex-resp-card.html).",
      [],
      false,
      false,
    ),
  ];
}
