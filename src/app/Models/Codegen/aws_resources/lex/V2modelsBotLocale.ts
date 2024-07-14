import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsBotLocaleTimeouts,
  lex_V2modelsBotLocaleTimeouts_GetTypes,
} from "../types/lex_V2modelsBotLocaleTimeouts";
import {
  lex_V2modelsBotLocaleVoiceSettings,
  lex_V2modelsBotLocaleVoiceSettings_GetTypes,
} from "../types/lex_V2modelsBotLocaleVoiceSettings";

export interface V2modelsBotLocaleArgs {
  //
  timeouts?: lex_V2modelsBotLocaleTimeouts;

  // Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. See `voice_settings`.
  voiceSettings?: lex_V2modelsBotLocaleVoiceSettings;

  // Identifier of the bot to create the locale for.
  botId?: string;

  // Version of the bot to create the locale for. This can only be the draft version of the bot.
  botVersion?: string;

  // Description of the bot locale. Use this to help identify the bot locale in lists.
  description?: string;

  // Identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see Supported languages (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)
  localeId?: string;

  /*
Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or both when returning alternative intents.

The following arguments are optional:
*/
  nLuIntentConfidenceThreshold?: number;

  // Specified locale name.
  name?: string;
}
export class V2modelsBotLocale extends Resource {
  //
  public timeouts?: lex_V2modelsBotLocaleTimeouts;

  // Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. See `voice_settings`.
  public voiceSettings?: lex_V2modelsBotLocaleVoiceSettings;

  // Identifier of the bot to create the locale for.
  public botId?: string;

  // Version of the bot to create the locale for. This can only be the draft version of the bot.
  public botVersion?: string;

  // Description of the bot locale. Use this to help identify the bot locale in lists.
  public description?: string;

  // Identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see Supported languages (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)
  public localeId?: string;

  /*
Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or both when returning alternative intents.

The following arguments are optional:
*/
  public nLuIntentConfidenceThreshold?: number;

  // Specified locale name.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        lex_V2modelsBotLocaleTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "voiceSettings",
        "Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. See `voice_settings`.",
        lex_V2modelsBotLocaleVoiceSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "botId",
        "Identifier of the bot to create the locale for.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "botVersion",
        "Version of the bot to create the locale for. This can only be the draft version of the bot.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the bot locale. Use this to help identify the bot locale in lists.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "localeId",
        "Identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see Supported languages (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "nLuIntentConfidenceThreshold",
        "Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or both when returning alternative intents.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Specified locale name.",
        [],
        false,
        false,
      ),
    ];
  }
}
