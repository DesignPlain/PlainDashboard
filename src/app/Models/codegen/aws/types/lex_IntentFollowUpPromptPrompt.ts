import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_IntentFollowUpPromptPromptMessage,
  lex_IntentFollowUpPromptPromptMessage_GetTypes,
} from './lex_IntentFollowUpPromptPromptMessage';

export interface lex_IntentFollowUpPromptPrompt {
  // The number of times to prompt the user for information. Must be a number between 1 and 5 (inclusive).
  maxAttempts?: number;

  /*
A set of messages, each of which provides a message string and its type.
You can specify the message string in plain text or in Speech Synthesis Markup Language (SSML).
Attributes are documented under message. Must contain between 1 and 15 messages.
*/
  messages?: Array<lex_IntentFollowUpPromptPromptMessage>;

  /*
The response card. Amazon Lex will substitute session attributes and
slot values into the response card. For more information, see
[Example: Using a Response Card](https://docs.aws.amazon.com/lex/latest/dg/ex-resp-card.html). Must be less than or equal to 50000 characters in length.
*/
  responseCard?: string;
}

export function lex_IntentFollowUpPromptPrompt_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maxAttempts',
      'The number of times to prompt the user for information. Must be a number between 1 and 5 (inclusive).',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'messages',
      'A set of messages, each of which provides a message string and its type.\nYou can specify the message string in plain text or in Speech Synthesis Markup Language (SSML).\nAttributes are documented under message. Must contain between 1 and 15 messages.',
      () => lex_IntentFollowUpPromptPromptMessage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'responseCard',
      'The response card. Amazon Lex will substitute session attributes and\nslot values into the response card. For more information, see\n[Example: Using a Response Card](https://docs.aws.amazon.com/lex/latest/dg/ex-resp-card.html). Must be less than or equal to 50000 characters in length.',
      () => [],
      false,
      false,
    ),
  ];
}
