import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lex_V2modelsBotMember {
  // Name of the bot. The bot name must be unique in the account that creates the bot. Type String. Length Constraints: Minimum length of 1. Maximum length of 100.
  name?: string;

  // (Required) - Version of a bot that is a member of this network of bots.
  version?: string;

  // (Required) - Alias ID of a bot that is a member of this network of bots.
  aliasId?: string;

  // (Required) - Alias name of a bot that is a member of this network of bots.
  aliasName?: string;

  // (Required) - Unique ID of a bot that is a member of this network of bots.
  id?: string;
}

export function lex_V2modelsBotMember_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "(Required) - Unique ID of a bot that is a member of this network of bots.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the bot. The bot name must be unique in the account that creates the bot. Type String. Length Constraints: Minimum length of 1. Maximum length of 100.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "(Required) - Version of a bot that is a member of this network of bots.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "aliasId",
      "(Required) - Alias ID of a bot that is a member of this network of bots.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "aliasName",
      "(Required) - Alias name of a bot that is a member of this network of bots.",
      [],
      true,
      false,
    ),
  ];
}
