import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_IntentFollowUpPromptRejectionStatement,
  lex_IntentFollowUpPromptRejectionStatement_GetTypes,
} from './lex_IntentFollowUpPromptRejectionStatement';
import {
  lex_IntentFollowUpPromptPrompt,
  lex_IntentFollowUpPromptPrompt_GetTypes,
} from './lex_IntentFollowUpPromptPrompt';

export interface lex_IntentFollowUpPrompt {
  /*
If the user answers "no" to the question defined in the prompt field,
Amazon Lex responds with this statement to acknowledge that the intent was canceled. Attributes are
documented below under statement.
*/
  rejectionStatement?: lex_IntentFollowUpPromptRejectionStatement;

  // Prompts for information from the user. Attributes are documented under prompt.
  prompt?: lex_IntentFollowUpPromptPrompt;
}

export function lex_IntentFollowUpPrompt_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'rejectionStatement',
      'If the user answers "no" to the question defined in the prompt field,\nAmazon Lex responds with this statement to acknowledge that the intent was canceled. Attributes are\ndocumented below under statement.',
      () => lex_IntentFollowUpPromptRejectionStatement_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'prompt',
      'Prompts for information from the user. Attributes are documented under prompt.',
      () => lex_IntentFollowUpPromptPrompt_GetTypes(),
      true,
      false,
    ),
  ];
}
