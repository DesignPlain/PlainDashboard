import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_BotAbortStatementMessage,
  lex_BotAbortStatementMessage_GetTypes,
} from './lex_BotAbortStatementMessage';

export interface lex_BotAbortStatement {
  //
  messages?: Array<lex_BotAbortStatementMessage>;

  //
  responseCard?: string;
}

export function lex_BotAbortStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'messages',
      '',
      () => lex_BotAbortStatementMessage_GetTypes(),
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
