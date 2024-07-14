import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface connect_getBotAssociationLexBot {
  // Name of the Amazon Lex (V1) bot.
  name?: string;

  // Region that the Amazon Lex (V1) bot was created in.
  lexRegion?: string;
}

export function connect_getBotAssociationLexBot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the Amazon Lex (V1) bot.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lexRegion",
      "Region that the Amazon Lex (V1) bot was created in.",
      [],
      true,
      false,
    ),
  ];
}
