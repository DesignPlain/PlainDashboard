import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentConditionalCase,
  Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentConditionalCase_GetTypes,
} from "./Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentConditionalCase";
import {
  Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessage,
  Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessage_GetTypes,
} from "./Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessage";
import {
  Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentSetParameterAction,
  Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentSetParameterAction_GetTypes,
} from "./Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentSetParameterAction";

export interface Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillment {
  /*
Conditional cases for this fulfillment.
Structure is documented below.
*/
  ConditionalCases?: Array<Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentConditionalCase>;

  /*
The list of rich message responses to present to the user.
Structure is documented below.
*/
  Messages?: Array<Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessage>;

  // Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  ReturnPartialResponses?: boolean;

  /*
Set parameter values before executing the webhook.
Structure is documented below.
*/
  SetParameterActions?: Array<Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentSetParameterAction>;

  // The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  Tag?: string;

  // The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  Webhook?: string;
}

export function Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillment_GetTypes(): DynamicUIProps[] {
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
      Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentConditionalCase_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Messages",
      "The list of rich message responses to present to the user.\nStructure is documented below.",
      Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessage_GetTypes(),
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
      Diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentSetParameterAction_GetTypes(),
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
