import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentConditionalCase,
  diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentConditionalCase_GetTypes,
} from "./diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentConditionalCase";
import {
  diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessage,
  diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessage_GetTypes,
} from "./diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessage";
import {
  diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentSetParameterAction,
  diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentSetParameterAction_GetTypes,
} from "./diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentSetParameterAction";

export interface diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillment {
  /*
Conditional cases for this fulfillment.
Structure is documented below.
*/
  conditionalCases?: Array<diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentConditionalCase>;

  /*
The list of rich message responses to present to the user.
Structure is documented below.
*/
  messages?: Array<diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessage>;

  // Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  returnPartialResponses?: boolean;

  /*
Set parameter values before executing the webhook.
Structure is documented below.
*/
  setParameterActions?: Array<diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentSetParameterAction>;

  // The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  tag?: string;

  // The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  webhook?: string;
}

export function diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "messages",
      "The list of rich message responses to present to the user.\nStructure is documented below.",
      diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "returnPartialResponses",
      "Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "setParameterActions",
      "Set parameter values before executing the webhook.\nStructure is documented below.",
      diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentSetParameterAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tag",
      "The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "webhook",
      "The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "conditionalCases",
      "Conditional cases for this fulfillment.\nStructure is documented below.",
      diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentConditionalCase_GetTypes(),
      false,
      false,
    ),
  ];
}
