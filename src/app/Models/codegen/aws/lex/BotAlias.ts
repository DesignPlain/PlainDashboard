import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_BotAliasConversationLogs,
  lex_BotAliasConversationLogs_GetTypes,
} from '../types/lex_BotAliasConversationLogs';

export interface BotAliasArgs {
  // The name of the bot.
  botName?: string;

  // The version of the bot.
  botVersion?: string;

  // The settings that determine how Amazon Lex uses conversation logs for the alias. Attributes are documented under conversation_logs.
  conversationLogs?: lex_BotAliasConversationLogs;

  // A description of the alias. Must be less than or equal to 200 characters in length.
  description?: string;

  // The name of the alias. The name is not case sensitive. Must be less than or equal to 100 characters in length.
  name?: string;
}
export class BotAlias extends DS_Resource {
  // The settings that determine how Amazon Lex uses conversation logs for the alias. Attributes are documented under conversation_logs.
  public conversationLogs?: lex_BotAliasConversationLogs;

  // The date that the bot alias was updated. When you create a resource, the creation date and the last updated date are the same.
  public lastUpdatedDate?: string;

  // The name of the alias. The name is not case sensitive. Must be less than or equal to 100 characters in length.
  public name?: string;

  // The ARN of the bot alias.
  public arn?: string;

  // The name of the bot.
  public botName?: string;

  // Checksum of the bot alias.
  public checksum?: string;

  // The version of the bot.
  public botVersion?: string;

  // The date that the bot alias was created.
  public createdDate?: string;

  // A description of the alias. Must be less than or equal to 200 characters in length.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the alias. The name is not case sensitive. Must be less than or equal to 100 characters in length.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'botName',
        'The name of the bot.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'botVersion',
        'The version of the bot.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'conversationLogs',
        'The settings that determine how Amazon Lex uses conversation logs for the alias. Attributes are documented under conversation_logs.',
        () => lex_BotAliasConversationLogs_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description of the alias. Must be less than or equal to 200 characters in length.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
