import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_IntentConclusionStatementMessage,
  lex_IntentConclusionStatementMessage_GetTypes,
} from './lex_IntentConclusionStatementMessage';

export interface lex_IntentConclusionStatement {
  //
  messages?: Array<lex_IntentConclusionStatementMessage>;

  //
  responseCard?: string;
}

export function lex_IntentConclusionStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'messages',
      '',
      () => lex_IntentConclusionStatementMessage_GetTypes(),
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
  ];
}
