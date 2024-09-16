import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_IntentConfirmationPromptMessage,
  lex_IntentConfirmationPromptMessage_GetTypes,
} from './lex_IntentConfirmationPromptMessage';

export interface lex_IntentConfirmationPrompt {
  //
  messages?: Array<lex_IntentConfirmationPromptMessage>;

  //
  responseCard?: string;

  // The number of times to prompt the user for information. Must be a number between 1 and 5 (inclusive).
  maxAttempts?: number;
}

export function lex_IntentConfirmationPrompt_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'messages',
      '',
      () => lex_IntentConfirmationPromptMessage_GetTypes(),
      true,
      false,
    ),
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
      'The number of times to prompt the user for information. Must be a number between 1 and 5 (inclusive).',
      () => [],
      true,
      false,
    ),
  ];
}
