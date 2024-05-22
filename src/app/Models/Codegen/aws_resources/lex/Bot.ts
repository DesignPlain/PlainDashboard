import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_BotAbortStatement,
  lex_BotAbortStatement_GetTypes,
} from "../types/lex_BotAbortStatement";
import {
  lex_BotClarificationPrompt,
  lex_BotClarificationPrompt_GetTypes,
} from "../types/lex_BotClarificationPrompt";
import { lex_BotIntent, lex_BotIntent_GetTypes } from "../types/lex_BotIntent";

export interface BotArgs {
  // The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user. The locale configured for the voice must match the locale of the bot. For more information, see [Available Voices](http://docs.aws.amazon.com/polly/latest/dg/voicelist.html) in the Amazon Polly Developer Guide.
  voiceId?: string;

  // By specifying true, you confirm that your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. For more information see the [Amazon Lex FAQ](https://aws.amazon.com/lex/faqs#data-security) and the [Amazon Lex PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-childDirected).
  childDirected?: boolean;

  // A description of the bot. Must be less than or equal to 200 characters in length.
  description?: string;

  // When set to true user utterances are sent to Amazon Comprehend for sentiment analysis. If you don't specify detectSentiment, the default is `false`.
  detectSentiment?: boolean;

  // Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the bot. For available locales, see [Amazon Lex Bot PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-locale). Default is `en-US`.
  locale?: string;

  // Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or both when returning alternative intents in a PostContent or PostText response. AMAZON.FallbackIntent and AMAZON.KendraSearchIntent are only inserted if they are configured for the bot. For more information see [Amazon Lex Bot PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-nluIntentConfidenceThreshold) This value requires `enable_model_improvements` to be set to `true` and the default is `0`. Must be a float between 0 and 1.
  nluIntentConfidenceThreshold?: number;

  // If you set the `process_behavior` element to `BUILD`, Amazon Lex builds the bot so that it can be run. If you set the element to `SAVE` Amazon Lex saves the bot, but doesn't build it. Default is `SAVE`.
  processBehavior?: string;

  // Set to `true` to enable access to natural language understanding improvements. When you set the `enable_model_improvements` parameter to true you can use the `nlu_intent_confidence_threshold` parameter to configure confidence scores. For more information, see [Confidence Scores](https://docs.aws.amazon.com/lex/latest/dg/confidence-scores.html). You can only set the `enable_model_improvements` parameter in certain Regions. If you set the parameter to true, your bot has access to accuracy improvements. For more information see the [Amazon Lex Bot PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-enableModelImprovements).
  enableModelImprovements?: boolean;

  // A set of Intent objects. Each intent represents a command that a user can express. Attributes are documented under intent. Can have up to 250 Intent objects.
  intents?: Array<lex_BotIntent>;

  // Determines if a new bot version is created when the initial resource is created and on each update. Defaults to `false`.
  createVersion?: boolean;

  // The name of the bot that you want to create, case sensitive. Must be between 2 and 50 characters in length.
  name?: string;

  // The message that Amazon Lex uses to abort a conversation. Attributes are documented under statement.
  abortStatement?: lex_BotAbortStatement;

  // The message that Amazon Lex uses when it doesn't understand the user's request. Attributes are documented under prompt.
  clarificationPrompt?: lex_BotClarificationPrompt;

  // The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. Default is `300`. Must be a number between 60 and 86400 (inclusive).
  idleSessionTtlInSeconds?: number;
}
export class Bot extends Resource {
  // The message that Amazon Lex uses to abort a conversation. Attributes are documented under statement.
  public abortStatement?: lex_BotAbortStatement;

  // By specifying true, you confirm that your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. For more information see the [Amazon Lex FAQ](https://aws.amazon.com/lex/faqs#data-security) and the [Amazon Lex PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-childDirected).
  public childDirected?: boolean;

  // If status is FAILED, Amazon Lex provides the reason that it failed to build the bot.
  public failureReason?: string;

  // The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. Default is `300`. Must be a number between 60 and 86400 (inclusive).
  public idleSessionTtlInSeconds?: number;

  // The version of the bot.
  public version?: string;

  /*
Checksum identifying the version of the bot that was created. The checksum is not
included as an argument because the resource will add it automatically when updating the bot.
*/
  public checksum?: string;

  // The date when the $LATEST version of this bot was updated.
  public lastUpdatedDate?: string;

  // Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the bot. For available locales, see [Amazon Lex Bot PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-locale). Default is `en-US`.
  public locale?: string;

  //
  public arn?: string;

  // A description of the bot. Must be less than or equal to 200 characters in length.
  public description?: string;

  // A set of Intent objects. Each intent represents a command that a user can express. Attributes are documented under intent. Can have up to 250 Intent objects.
  public intents?: Array<lex_BotIntent>;

  // The name of the bot that you want to create, case sensitive. Must be between 2 and 50 characters in length.
  public name?: string;

  // If you set the `process_behavior` element to `BUILD`, Amazon Lex builds the bot so that it can be run. If you set the element to `SAVE` Amazon Lex saves the bot, but doesn't build it. Default is `SAVE`.
  public processBehavior?: string;

  /*
When you send a request to create or update a bot, Amazon Lex sets the status response
element to BUILDING. After Amazon Lex builds the bot, it sets status to READY. If Amazon Lex can't
build the bot, it sets status to FAILED. Amazon Lex returns the reason for the failure in the
failure_reason response element.
*/
  public status?: string;

  // The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user. The locale configured for the voice must match the locale of the bot. For more information, see [Available Voices](http://docs.aws.amazon.com/polly/latest/dg/voicelist.html) in the Amazon Polly Developer Guide.
  public voiceId?: string;

  // The message that Amazon Lex uses when it doesn't understand the user's request. Attributes are documented under prompt.
  public clarificationPrompt?: lex_BotClarificationPrompt;

  // Determines if a new bot version is created when the initial resource is created and on each update. Defaults to `false`.
  public createVersion?: boolean;

  // The date when the bot version was created.
  public createdDate?: string;

  // When set to true user utterances are sent to Amazon Comprehend for sentiment analysis. If you don't specify detectSentiment, the default is `false`.
  public detectSentiment?: boolean;

  // Set to `true` to enable access to natural language understanding improvements. When you set the `enable_model_improvements` parameter to true you can use the `nlu_intent_confidence_threshold` parameter to configure confidence scores. For more information, see [Confidence Scores](https://docs.aws.amazon.com/lex/latest/dg/confidence-scores.html). You can only set the `enable_model_improvements` parameter in certain Regions. If you set the parameter to true, your bot has access to accuracy improvements. For more information see the [Amazon Lex Bot PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-enableModelImprovements).
  public enableModelImprovements?: boolean;

  // Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or both when returning alternative intents in a PostContent or PostText response. AMAZON.FallbackIntent and AMAZON.KendraSearchIntent are only inserted if they are configured for the bot. For more information see [Amazon Lex Bot PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-nluIntentConfidenceThreshold) This value requires `enable_model_improvements` to be set to `true` and the default is `0`. Must be a float between 0 and 1.
  public nluIntentConfidenceThreshold?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "childDirected",
        "By specifying true, you confirm that your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. For more information see the [Amazon Lex FAQ](https://aws.amazon.com/lex/faqs#data-security) and the [Amazon Lex PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-childDirected).",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "clarificationPrompt",
        "The message that Amazon Lex uses when it doesn't understand the user's request. Attributes are documented under prompt.",
        lex_BotClarificationPrompt_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "idleSessionTtlInSeconds",
        "The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. Default is `300`. Must be a number between 60 and 86400 (inclusive).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "nluIntentConfidenceThreshold",
        "Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or both when returning alternative intents in a PostContent or PostText response. AMAZON.FallbackIntent and AMAZON.KendraSearchIntent are only inserted if they are configured for the bot. For more information see [Amazon Lex Bot PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-nluIntentConfidenceThreshold) This value requires `enable_model_improvements` to be set to `true` and the default is `0`. Must be a float between 0 and 1.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableModelImprovements",
        "Set to `true` to enable access to natural language understanding improvements. When you set the `enable_model_improvements` parameter to true you can use the `nlu_intent_confidence_threshold` parameter to configure confidence scores. For more information, see [Confidence Scores](https://docs.aws.amazon.com/lex/latest/dg/confidence-scores.html). You can only set the `enable_model_improvements` parameter in certain Regions. If you set the parameter to true, your bot has access to accuracy improvements. For more information see the [Amazon Lex Bot PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-enableModelImprovements).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "voiceId",
        "The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user. The locale configured for the voice must match the locale of the bot. For more information, see [Available Voices](http://docs.aws.amazon.com/polly/latest/dg/voicelist.html) in the Amazon Polly Developer Guide.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "detectSentiment",
        "When set to true user utterances are sent to Amazon Comprehend for sentiment analysis. If you don't specify detectSentiment, the default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "locale",
        "Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the bot. For available locales, see [Amazon Lex Bot PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-locale). Default is `en-US`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the bot. Must be less than or equal to 200 characters in length.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "createVersion",
        "Determines if a new bot version is created when the initial resource is created and on each update. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "abortStatement",
        "The message that Amazon Lex uses to abort a conversation. Attributes are documented under statement.",
        lex_BotAbortStatement_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "processBehavior",
        "If you set the `process_behavior` element to `BUILD`, Amazon Lex builds the bot so that it can be run. If you set the element to `SAVE` Amazon Lex saves the bot, but doesn't build it. Default is `SAVE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "intents",
        "A set of Intent objects. Each intent represents a command that a user can express. Attributes are documented under intent. Can have up to 250 Intent objects.",
        lex_BotIntent_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the bot that you want to create, case sensitive. Must be between 2 and 50 characters in length.",
        [],
        false,
        true,
      ),
    ];
  }
}
