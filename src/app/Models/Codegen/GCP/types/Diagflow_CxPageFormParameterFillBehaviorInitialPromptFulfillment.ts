import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentSetParameterAction,
  Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentSetParameterAction_GetTypes,
} from "./Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentSetParameterAction";
import {
  Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentConditionalCase,
  Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentConditionalCase_GetTypes,
} from "./Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentConditionalCase";
import {
  Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessage,
  Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessage_GetTypes,
} from "./Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessage";

export interface Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillment {
  // The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  Tag?: string;

  // The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  Webhook?: string;

  /*
Conditional cases for this fulfillment.
Structure is documented below.
*/
  ConditionalCases?: Array<Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentConditionalCase>;

  /*
The list of rich message responses to present to the user.
Structure is documented below.
*/
  Messages?: Array<Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessage>;

  // Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  ReturnPartialResponses?: boolean;

  /*
Set parameter values before executing the webhook.
Structure is documented below.
*/
  SetParameterActions?: Array<Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentSetParameterAction>;
}

export function Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Webhook",
      "The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ConditionalCases",
      "Conditional cases for this fulfillment.\nStructure is documented below.",
      Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentConditionalCase_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Messages",
      "The list of rich message responses to present to the user.\nStructure is documented below.",
      Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ReturnPartialResponses",
      "Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SetParameterActions",
      "Set parameter values before executing the webhook.\nStructure is documented below.",
      Diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentSetParameterAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Tag",
      "The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.",
      [],
      false,
      false,
    ),
  ];
}
