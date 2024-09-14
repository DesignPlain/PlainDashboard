import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface connect_BotAssociationLexBot {
  // The name of the Amazon Lex (V1) bot.
  name?: string;

  // The Region that the Amazon Lex (V1) bot was created in. Defaults to current region.
  lexRegion?: string;
}

export function connect_BotAssociationLexBot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "lexRegion",
      "The Region that the Amazon Lex (V1) bot was created in. Defaults to current region.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Amazon Lex (V1) bot.",
      () => [],
      true,
      true,
    ),
  ];
}
