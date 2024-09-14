import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_IntentConclusionStatement,
  lex_IntentConclusionStatement_GetTypes,
} from "../types/lex_IntentConclusionStatement";
import {
  lex_IntentDialogCodeHook,
  lex_IntentDialogCodeHook_GetTypes,
} from "../types/lex_IntentDialogCodeHook";
import {
  lex_IntentSlot,
  lex_IntentSlot_GetTypes,
} from "../types/lex_IntentSlot";
import {
  lex_IntentConfirmationPrompt,
  lex_IntentConfirmationPrompt_GetTypes,
} from "../types/lex_IntentConfirmationPrompt";
import {
  lex_IntentFollowUpPrompt,
  lex_IntentFollowUpPrompt_GetTypes,
} from "../types/lex_IntentFollowUpPrompt";
import {
  lex_IntentFulfillmentActivity,
  lex_IntentFulfillmentActivity_GetTypes,
} from "../types/lex_IntentFulfillmentActivity";
import {
  lex_IntentRejectionStatement,
  lex_IntentRejectionStatement_GetTypes,
} from "../types/lex_IntentRejectionStatement";

export interface IntentArgs {
  /*
Prompts the user to confirm the intent. This question should
have a yes or no answer. You you must provide both the `rejection_statement` and `confirmation_prompt`,
or neither. Attributes are documented under prompt.
*/
  confirmationPrompt?: lex_IntentConfirmationPrompt;

  /*
Determines if a new slot type version is created when the initial
resource is created and on each update. Defaults to `false`.
*/
  createVersion?: boolean;

  /*
Amazon Lex uses this prompt to solicit additional activity after
fulfilling an intent. For example, after the OrderPizza intent is fulfilled, you might prompt the
user to order a drink. The `follow_up_prompt` field and the `conclusion_statement` field are mutually
exclusive. You can specify only one. Attributes are documented under follow_up_prompt.
*/
  followUpPrompt?: lex_IntentFollowUpPrompt;

  /*
Describes how the intent is fulfilled. For example, after a
user provides all of the information for a pizza order, `fulfillment_activity` defines how the bot
places an order with a local pizza store. Attributes are documented under fulfillment_activity.
*/
  fulfillmentActivity?: lex_IntentFulfillmentActivity;

  // The name of the intent, not case sensitive. Must be less than or equal to 100 characters in length.
  name?: string;

  /*
When the user answers "no" to the question defined in
`confirmation_prompt`, Amazon Lex responds with this statement to acknowledge that the intent was
canceled. You must provide both the `rejection_statement` and the `confirmation_prompt`, or neither.
Attributes are documented under statement.
*/
  rejectionStatement?: lex_IntentRejectionStatement;

  /*
The statement that you want Amazon Lex to convey to the user
after the intent is successfully fulfilled by the Lambda function. This element is relevant only if
you provide a Lambda function in the `fulfillment_activity`. If you return the intent to the client
application, you can't specify this element. The `follow_up_prompt` and `conclusion_statement` are
mutually exclusive. You can specify only one. Attributes are documented under statement.
*/
  conclusionStatement?: lex_IntentConclusionStatement;

  // A description of the intent. Must be less than or equal to 200 characters in length.
  description?: string;

  /*
Specifies a Lambda function to invoke for each user input. You can
invoke this Lambda function to personalize user interaction. Attributes are documented under code_hook.
*/
  dialogCodeHook?: lex_IntentDialogCodeHook;

  /*
A unique identifier for the built-in intent to base this
intent on. To find the signature for an intent, see
[Standard Built-in Intents](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents)
in the Alexa Skills Kit.
*/
  parentIntentSignature?: string;

  /*
An array of utterances (strings) that a user might say to signal
the intent. For example, "I want {PizzaSize} pizza", "Order {Quantity} {PizzaSize} pizzas".
In each utterance, a slot name is enclosed in curly braces. Must have between 1 and 10 items in the list, and each item must be less than or equal to 200 characters in length.
*/
  sampleUtterances?: Array<string>;

  /*
An list of intent slots. At runtime, Amazon Lex elicits required slot values
from the user using prompts defined in the slots. Attributes are documented under slot.
*/
  slots?: Array<lex_IntentSlot>;
}
export class Intent extends DS_Resource {
  /*
Prompts the user to confirm the intent. This question should
have a yes or no answer. You you must provide both the `rejection_statement` and `confirmation_prompt`,
or neither. Attributes are documented under prompt.
*/
  public confirmationPrompt?: lex_IntentConfirmationPrompt;

  /*
An array of utterances (strings) that a user might say to signal
the intent. For example, "I want {PizzaSize} pizza", "Order {Quantity} {PizzaSize} pizzas".
In each utterance, a slot name is enclosed in curly braces. Must have between 1 and 10 items in the list, and each item must be less than or equal to 200 characters in length.
*/
  public sampleUtterances?: Array<string>;

  /*
A unique identifier for the built-in intent to base this
intent on. To find the signature for an intent, see
[Standard Built-in Intents](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents)
in the Alexa Skills Kit.
*/
  public parentIntentSignature?: string;

  /*
An list of intent slots. At runtime, Amazon Lex elicits required slot values
from the user using prompts defined in the slots. Attributes are documented under slot.
*/
  public slots?: Array<lex_IntentSlot>;

  /*
Checksum identifying the version of the intent that was created. The checksum is not
included as an argument because the resource will add it automatically when updating the intent.
*/
  public checksum?: string;

  /*
Amazon Lex uses this prompt to solicit additional activity after
fulfilling an intent. For example, after the OrderPizza intent is fulfilled, you might prompt the
user to order a drink. The `follow_up_prompt` field and the `conclusion_statement` field are mutually
exclusive. You can specify only one. Attributes are documented under follow_up_prompt.
*/
  public followUpPrompt?: lex_IntentFollowUpPrompt;

  // The date when the $LATEST version of this intent was updated.
  public lastUpdatedDate?: string;

  // The date when the intent version was created.
  public createdDate?: string;

  /*
Specifies a Lambda function to invoke for each user input. You can
invoke this Lambda function to personalize user interaction. Attributes are documented under code_hook.
*/
  public dialogCodeHook?: lex_IntentDialogCodeHook;

  /*
When the user answers "no" to the question defined in
`confirmation_prompt`, Amazon Lex responds with this statement to acknowledge that the intent was
canceled. You must provide both the `rejection_statement` and the `confirmation_prompt`, or neither.
Attributes are documented under statement.
*/
  public rejectionStatement?: lex_IntentRejectionStatement;

  // The ARN of the Lex intent.
  public arn?: string;

  /*
The statement that you want Amazon Lex to convey to the user
after the intent is successfully fulfilled by the Lambda function. This element is relevant only if
you provide a Lambda function in the `fulfillment_activity`. If you return the intent to the client
application, you can't specify this element. The `follow_up_prompt` and `conclusion_statement` are
mutually exclusive. You can specify only one. Attributes are documented under statement.
*/
  public conclusionStatement?: lex_IntentConclusionStatement;

  /*
Determines if a new slot type version is created when the initial
resource is created and on each update. Defaults to `false`.
*/
  public createVersion?: boolean;

  // The version of the bot.
  public version?: string;

  // A description of the intent. Must be less than or equal to 200 characters in length.
  public description?: string;

  /*
Describes how the intent is fulfilled. For example, after a
user provides all of the information for a pizza order, `fulfillment_activity` defines how the bot
places an order with a local pizza store. Attributes are documented under fulfillment_activity.
*/
  public fulfillmentActivity?: lex_IntentFulfillmentActivity;

  // The name of the intent, not case sensitive. Must be less than or equal to 100 characters in length.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "sampleUtterances",
        'An array of utterances (strings) that a user might say to signal\nthe intent. For example, "I want {PizzaSize} pizza", "Order {Quantity} {PizzaSize} pizzas".\nIn each utterance, a slot name is enclosed in curly braces. Must have between 1 and 10 items in the list, and each item must be less than or equal to 200 characters in length.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "fulfillmentActivity",
        "Describes how the intent is fulfilled. For example, after a\nuser provides all of the information for a pizza order, `fulfillment_activity` defines how the bot\nplaces an order with a local pizza store. Attributes are documented under fulfillment_activity.",
        () => lex_IntentFulfillmentActivity_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the intent, not case sensitive. Must be less than or equal to 100 characters in length.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "rejectionStatement",
        'When the user answers "no" to the question defined in\n`confirmation_prompt`, Amazon Lex responds with this statement to acknowledge that the intent was\ncanceled. You must provide both the `rejection_statement` and the `confirmation_prompt`, or neither.\nAttributes are documented under statement.',
        () => lex_IntentRejectionStatement_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "conclusionStatement",
        "The statement that you want Amazon Lex to convey to the user\nafter the intent is successfully fulfilled by the Lambda function. This element is relevant only if\nyou provide a Lambda function in the `fulfillment_activity`. If you return the intent to the client\napplication, you can't specify this element. The `follow_up_prompt` and `conclusion_statement` are\nmutually exclusive. You can specify only one. Attributes are documented under statement.",
        () => lex_IntentConclusionStatement_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dialogCodeHook",
        "Specifies a Lambda function to invoke for each user input. You can\ninvoke this Lambda function to personalize user interaction. Attributes are documented under code_hook.",
        () => lex_IntentDialogCodeHook_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "slots",
        "An list of intent slots. At runtime, Amazon Lex elicits required slot values\nfrom the user using prompts defined in the slots. Attributes are documented under slot.",
        () => lex_IntentSlot_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "confirmationPrompt",
        "Prompts the user to confirm the intent. This question should\nhave a yes or no answer. You you must provide both the `rejection_statement` and `confirmation_prompt`,\nor neither. Attributes are documented under prompt.",
        () => lex_IntentConfirmationPrompt_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "createVersion",
        "Determines if a new slot type version is created when the initial\nresource is created and on each update. Defaults to `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "followUpPrompt",
        "Amazon Lex uses this prompt to solicit additional activity after\nfulfilling an intent. For example, after the OrderPizza intent is fulfilled, you might prompt the\nuser to order a drink. The `follow_up_prompt` field and the `conclusion_statement` field are mutually\nexclusive. You can specify only one. Attributes are documented under follow_up_prompt.",
        () => lex_IntentFollowUpPrompt_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the intent. Must be less than or equal to 200 characters in length.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parentIntentSignature",
        "A unique identifier for the built-in intent to base this\nintent on. To find the signature for an intent, see\n[Standard Built-in Intents](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents)\nin the Alexa Skills Kit.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
