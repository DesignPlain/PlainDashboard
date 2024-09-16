import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_IntentRejectionStatementMessage,
  lex_IntentRejectionStatementMessage_GetTypes,
} from './lex_IntentRejectionStatementMessage';

export interface lex_IntentRejectionStatement {
  //
  messages?: Array<lex_IntentRejectionStatementMessage>;

  //
  responseCard?: string;
}

export function lex_IntentRejectionStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'messages',
      '',
      () => lex_IntentRejectionStatementMessage_GetTypes(),
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
