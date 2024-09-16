import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsIntentSampleUtterance,
  lex_V2modelsIntentSampleUtterance_GetTypes,
} from '../types/lex_V2modelsIntentSampleUtterance';
import {
  lex_V2modelsIntentKendraConfiguration,
  lex_V2modelsIntentKendraConfiguration_GetTypes,
} from '../types/lex_V2modelsIntentKendraConfiguration';
import {
  lex_V2modelsIntentInitialResponseSetting,
  lex_V2modelsIntentInitialResponseSetting_GetTypes,
} from '../types/lex_V2modelsIntentInitialResponseSetting';
import {
  lex_V2modelsIntentDialogCodeHook,
  lex_V2modelsIntentDialogCodeHook_GetTypes,
} from '../types/lex_V2modelsIntentDialogCodeHook';
import {
  lex_V2modelsIntentSlotPriority,
  lex_V2modelsIntentSlotPriority_GetTypes,
} from '../types/lex_V2modelsIntentSlotPriority';
import {
  lex_V2modelsIntentTimeouts,
  lex_V2modelsIntentTimeouts_GetTypes,
} from '../types/lex_V2modelsIntentTimeouts';
import {
  lex_V2modelsIntentOutputContext,
  lex_V2modelsIntentOutputContext_GetTypes,
} from '../types/lex_V2modelsIntentOutputContext';
import {
  lex_V2modelsIntentClosingSetting,
  lex_V2modelsIntentClosingSetting_GetTypes,
} from '../types/lex_V2modelsIntentClosingSetting';
import {
  lex_V2modelsIntentInputContext,
  lex_V2modelsIntentInputContext_GetTypes,
} from '../types/lex_V2modelsIntentInputContext';
import {
  lex_V2modelsIntentConfirmationSetting,
  lex_V2modelsIntentConfirmationSetting_GetTypes,
} from '../types/lex_V2modelsIntentConfirmationSetting';
import {
  lex_V2modelsIntentFulfillmentCodeHook,
  lex_V2modelsIntentFulfillmentCodeHook_GetTypes,
} from '../types/lex_V2modelsIntentFulfillmentCodeHook';

export interface V2modelsIntentArgs {
  // Version of the bot associated with this intent.
  botVersion?: string;

  // Configuration block for the response that Amazon Lex sends to the user when the intent is closed. See `closing_setting`.
  closingSetting?: lex_V2modelsIntentClosingSetting;

  // Description of the intent. Use the description to help identify the intent in lists.
  description?: string;

  // Configuration blocks for contexts that must be active for this intent to be considered by Amazon Lex. When an intent has an input context list, Amazon Lex only considers using the intent in an interaction with the user when the specified contexts are included in the active context list for the session. If the contexts are not active, then Amazon Lex will not use the intent. A context can be automatically activated using the outputContexts property or it can be set at runtime. See `input_context`.
  inputContexts?: Array<lex_V2modelsIntentInputContext>;

  // Configuration block for strings that a user might say to signal the intent. See `sample_utterance`.
  sampleUtterances?: Array<lex_V2modelsIntentSampleUtterance>;

  //
  confirmationSetting?: lex_V2modelsIntentConfirmationSetting;

  // Configuration block for invoking the alias Lambda function when the intent is ready for fulfillment. You can invoke this function to complete the bot's transaction with the user. See `fulfillment_code_hook`.
  fulfillmentCodeHook?: lex_V2modelsIntentFulfillmentCodeHook;

  // Configuration block for information required to use the AMAZON.KendraSearchIntent intent to connect to an Amazon Kendra index. The AMAZON.KendraSearchIntent intent is called when Amazon Lex can't determine another intent to invoke. See `kendra_configuration`.
  kendraConfiguration?: lex_V2modelsIntentKendraConfiguration;

  // Configuration block for a new list of slots and their priorities that are contained by the intent. This is ignored on create and only valid for updates. See `slot_priority`.
  slotPriorities?: Array<lex_V2modelsIntentSlotPriority>;

  //
  timeouts?: lex_V2modelsIntentTimeouts;

  // Identifier of the bot associated with this intent.
  botId?: string;

  // Configuration block for the response that is sent to the user at the beginning of a conversation, before eliciting slot values. See `initial_response_setting`.
  initialResponseSetting?: lex_V2modelsIntentInitialResponseSetting;

  // Identifier of the language and locale where this intent is used. All of the bots, slot types, and slots used by the intent must have the same locale.
  localeId?: string;

  /*
Name of the intent. Intent names must be unique in the locale that contains the intent and cannot match the name of any built-in intent.

The following arguments are optional:
*/
  name?: string;

  // Configuration blocks for contexts that the intent activates when it is fulfilled. You can use an output context to indicate the intents that Amazon Lex should consider for the next turn of the conversation with a customer. When you use the outputContextsList property, all of the contexts specified in the list are activated when the intent is fulfilled. You can set up to 10 output contexts. You can also set the number of conversation turns that the context should be active, or the length of time that the context should be active. See `output_context`.
  outputContexts?: Array<lex_V2modelsIntentOutputContext>;

  // Identifier for the built-in intent to base this intent on.
  parentIntentSignature?: string;

  // Configuration block for invoking the alias Lambda function for each user input. You can invoke this Lambda function to personalize user interaction. See `dialog_code_hook`.
  dialogCodeHook?: lex_V2modelsIntentDialogCodeHook;
}
export class V2modelsIntent extends DS_Resource {
  // Identifier of the bot associated with this intent.
  public botId?: string;

  // Configuration block for the response that Amazon Lex sends to the user when the intent is closed. See `closing_setting`.
  public closingSetting?: lex_V2modelsIntentClosingSetting;

  // Configuration block for invoking the alias Lambda function for each user input. You can invoke this Lambda function to personalize user interaction. See `dialog_code_hook`.
  public dialogCodeHook?: lex_V2modelsIntentDialogCodeHook;

  // Timestamp of the last time that the intent was modified.
  public lastUpdatedDateTime?: string;

  // Description of the intent. Use the description to help identify the intent in lists.
  public description?: string;

  // Configuration block for the response that is sent to the user at the beginning of a conversation, before eliciting slot values. See `initial_response_setting`.
  public initialResponseSetting?: lex_V2modelsIntentInitialResponseSetting;

  // Unique identifier for the intent.
  public intentId?: string;

  // Configuration block for information required to use the AMAZON.KendraSearchIntent intent to connect to an Amazon Kendra index. The AMAZON.KendraSearchIntent intent is called when Amazon Lex can't determine another intent to invoke. See `kendra_configuration`.
  public kendraConfiguration?: lex_V2modelsIntentKendraConfiguration;

  // Identifier of the language and locale where this intent is used. All of the bots, slot types, and slots used by the intent must have the same locale.
  public localeId?: string;

  // Identifier for the built-in intent to base this intent on.
  public parentIntentSignature?: string;

  // Configuration block for a new list of slots and their priorities that are contained by the intent. This is ignored on create and only valid for updates. See `slot_priority`.
  public slotPriorities?: Array<lex_V2modelsIntentSlotPriority>;

  // Version of the bot associated with this intent.
  public botVersion?: string;

  /*
Name of the intent. Intent names must be unique in the locale that contains the intent and cannot match the name of any built-in intent.

The following arguments are optional:
*/
  public name?: string;

  // Configuration block for strings that a user might say to signal the intent. See `sample_utterance`.
  public sampleUtterances?: Array<lex_V2modelsIntentSampleUtterance>;

  //
  public timeouts?: lex_V2modelsIntentTimeouts;

  //
  public confirmationSetting?: lex_V2modelsIntentConfirmationSetting;

  // Timestamp of the date and time that the intent was created.
  public creationDateTime?: string;

  // Configuration block for invoking the alias Lambda function when the intent is ready for fulfillment. You can invoke this function to complete the bot's transaction with the user. See `fulfillment_code_hook`.
  public fulfillmentCodeHook?: lex_V2modelsIntentFulfillmentCodeHook;

  // Configuration blocks for contexts that must be active for this intent to be considered by Amazon Lex. When an intent has an input context list, Amazon Lex only considers using the intent in an interaction with the user when the specified contexts are included in the active context list for the session. If the contexts are not active, then Amazon Lex will not use the intent. A context can be automatically activated using the outputContexts property or it can be set at runtime. See `input_context`.
  public inputContexts?: Array<lex_V2modelsIntentInputContext>;

  // Configuration blocks for contexts that the intent activates when it is fulfilled. You can use an output context to indicate the intents that Amazon Lex should consider for the next turn of the conversation with a customer. When you use the outputContextsList property, all of the contexts specified in the list are activated when the intent is fulfilled. You can set up to 10 output contexts. You can also set the number of conversation turns that the context should be active, or the length of time that the context should be active. See `output_context`.
  public outputContexts?: Array<lex_V2modelsIntentOutputContext>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'confirmationSetting',
        '',
        () => lex_V2modelsIntentConfirmationSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'fulfillmentCodeHook',
        "Configuration block for invoking the alias Lambda function when the intent is ready for fulfillment. You can invoke this function to complete the bot's transaction with the user. See `fulfillment_code_hook`.",
        () => lex_V2modelsIntentFulfillmentCodeHook_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'botId',
        'Identifier of the bot associated with this intent.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'outputContexts',
        'Configuration blocks for contexts that the intent activates when it is fulfilled. You can use an output context to indicate the intents that Amazon Lex should consider for the next turn of the conversation with a customer. When you use the outputContextsList property, all of the contexts specified in the list are activated when the intent is fulfilled. You can set up to 10 output contexts. You can also set the number of conversation turns that the context should be active, or the length of time that the context should be active. See `output_context`.',
        () => lex_V2modelsIntentOutputContext_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'dialogCodeHook',
        'Configuration block for invoking the alias Lambda function for each user input. You can invoke this Lambda function to personalize user interaction. See `dialog_code_hook`.',
        () => lex_V2modelsIntentDialogCodeHook_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'inputContexts',
        'Configuration blocks for contexts that must be active for this intent to be considered by Amazon Lex. When an intent has an input context list, Amazon Lex only considers using the intent in an interaction with the user when the specified contexts are included in the active context list for the session. If the contexts are not active, then Amazon Lex will not use the intent. A context can be automatically activated using the outputContexts property or it can be set at runtime. See `input_context`.',
        () => lex_V2modelsIntentInputContext_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'sampleUtterances',
        'Configuration block for strings that a user might say to signal the intent. See `sample_utterance`.',
        () => lex_V2modelsIntentSampleUtterance_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'kendraConfiguration',
        "Configuration block for information required to use the AMAZON.KendraSearchIntent intent to connect to an Amazon Kendra index. The AMAZON.KendraSearchIntent intent is called when Amazon Lex can't determine another intent to invoke. See `kendra_configuration`.",
        () => lex_V2modelsIntentKendraConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'slotPriorities',
        'Configuration block for a new list of slots and their priorities that are contained by the intent. This is ignored on create and only valid for updates. See `slot_priority`.',
        () => lex_V2modelsIntentSlotPriority_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => lex_V2modelsIntentTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the intent. Intent names must be unique in the locale that contains the intent and cannot match the name of any built-in intent.\n\nThe following arguments are optional:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'closingSetting',
        'Configuration block for the response that Amazon Lex sends to the user when the intent is closed. See `closing_setting`.',
        () => lex_V2modelsIntentClosingSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the intent. Use the description to help identify the intent in lists.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'botVersion',
        'Version of the bot associated with this intent.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'localeId',
        'Identifier of the language and locale where this intent is used. All of the bots, slot types, and slots used by the intent must have the same locale.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'parentIntentSignature',
        'Identifier for the built-in intent to base this intent on.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'initialResponseSetting',
        'Configuration block for the response that is sent to the user at the beginning of a conversation, before eliciting slot values. See `initial_response_setting`.',
        () => lex_V2modelsIntentInitialResponseSetting_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
