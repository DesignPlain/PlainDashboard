import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsBotTimeouts,
  lex_V2modelsBotTimeouts_GetTypes,
} from '../types/lex_V2modelsBotTimeouts';
import {
  lex_V2modelsBotDataPrivacy,
  lex_V2modelsBotDataPrivacy_GetTypes,
} from '../types/lex_V2modelsBotDataPrivacy';
import {
  lex_V2modelsBotMember,
  lex_V2modelsBotMember_GetTypes,
} from '../types/lex_V2modelsBotMember';

export interface V2modelsBotArgs {
  /*
ARN of an IAM role that has permission to access the bot.

The following arguments are optional:
*/
  roleArn?: string;

  // List of tags to add to the bot. You can only add tags when you create a bot.
  tags?: Map<string, string>;

  // Name of the bot. The bot name must be unique in the account that creates the bot. Type String. Length Constraints: Minimum length of 1. Maximum length of 100.
  name?: string;

  // List of tags to add to the test alias for a bot. You can only add tags when you create a bot.
  testBotAliasTags?: Map<string, string>;

  //
  timeouts?: lex_V2modelsBotTimeouts;

  // Type of a bot to create. Possible values are `"Bot"` and `"BotNetwork"`.
  type?: string;

  // Provides information on additional privacy protections Amazon Lex should use with the bot's data. See `data_privacy`
  dataPrivacies?: Array<lex_V2modelsBotDataPrivacy>;

  // Description of the bot. It appears in lists to help you identify a particular bot.
  description?: string;

  // Time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.
  idleSessionTtlInSeconds?: number;

  // List of bot members in a network to be created. See `bot_members`.
  members?: Array<lex_V2modelsBotMember>;
}
export class V2modelsBot extends DS_Resource {
  // Description of the bot. It appears in lists to help you identify a particular bot.
  public description?: string;

  // Name of the bot. The bot name must be unique in the account that creates the bot. Type String. Length Constraints: Minimum length of 1. Maximum length of 100.
  public name?: string;

  /*
ARN of an IAM role that has permission to access the bot.

The following arguments are optional:
*/
  public roleArn?: string;

  // List of tags to add to the bot. You can only add tags when you create a bot.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // List of tags to add to the test alias for a bot. You can only add tags when you create a bot.
  public testBotAliasTags?: Map<string, string>;

  // Type of a bot to create. Possible values are `"Bot"` and `"BotNetwork"`.
  public type?: string;

  //
  public arn?: string;

  // Provides information on additional privacy protections Amazon Lex should use with the bot's data. See `data_privacy`
  public dataPrivacies?: Array<lex_V2modelsBotDataPrivacy>;

  // Time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.
  public idleSessionTtlInSeconds?: number;

  // List of bot members in a network to be created. See `bot_members`.
  public members?: Array<lex_V2modelsBotMember>;

  //
  public timeouts?: lex_V2modelsBotTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'ARN of an IAM role that has permission to access the bot.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => lex_V2modelsBotTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'Type of a bot to create. Possible values are `"Bot"` and `"BotNetwork"`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'dataPrivacies',
        "Provides information on additional privacy protections Amazon Lex should use with the bot's data. See `data_privacy`",
        () => lex_V2modelsBotDataPrivacy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the bot. It appears in lists to help you identify a particular bot.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'List of tags to add to the bot. You can only add tags when you create a bot.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the bot. The bot name must be unique in the account that creates the bot. Type String. Length Constraints: Minimum length of 1. Maximum length of 100.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'testBotAliasTags',
        'List of tags to add to the test alias for a bot. You can only add tags when you create a bot.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'idleSessionTtlInSeconds',
        "Time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'members',
        'List of bot members in a network to be created. See `bot_members`.',
        () => lex_V2modelsBotMember_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
