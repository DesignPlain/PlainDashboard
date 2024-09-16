import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_BotClarificationPromptMessage,
  lex_BotClarificationPromptMessage_GetTypes,
} from './lex_BotClarificationPromptMessage';

export interface lex_BotClarificationPrompt {
  // The number of times to prompt the user for information.
  maxAttempts?: number;

  //
  messages?: Array<lex_BotClarificationPromptMessage>;

  //
  responseCard?: string;
}

export function lex_BotClarificationPrompt_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'responseCard',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxAttempts',
      'The number of times to prompt the user for information.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'messages',
      '',
      () => lex_BotClarificationPromptMessage_GetTypes(),
      true,
      false,
    ),
  ];
}
