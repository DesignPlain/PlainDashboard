import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface connect_getBotAssociationLexBot {
  // Region that the Amazon Lex (V1) bot was created in.
  lexRegion?: string;

  // Name of the Amazon Lex (V1) bot.
  name?: string;
}

export function connect_getBotAssociationLexBot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'lexRegion',
      'Region that the Amazon Lex (V1) bot was created in.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the Amazon Lex (V1) bot.',
      () => [],
      true,
      false,
    ),
  ];
}
