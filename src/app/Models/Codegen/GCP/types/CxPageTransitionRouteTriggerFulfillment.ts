import { CxPageTransitionRouteTriggerFulfillmentSetParameterAction } from "./CxPageTransitionRouteTriggerFulfillmentSetParameterAction";
import { CxPageTransitionRouteTriggerFulfillmentConditionalCase } from "./CxPageTransitionRouteTriggerFulfillmentConditionalCase";
import { CxPageTransitionRouteTriggerFulfillmentMessage } from "./CxPageTransitionRouteTriggerFulfillmentMessage";

export interface CxPageTransitionRouteTriggerFulfillment {
  // Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  ReturnPartialResponses?: boolean;

  /*
Set parameter values before executing the webhook.
Structure is documented below.
*/
  SetParameterActions?: Array<CxPageTransitionRouteTriggerFulfillmentSetParameterAction>;

  // The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  Tag?: string;

  // The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  Webhook?: string;

  /*
Conditional cases for this fulfillment.
Structure is documented below.
*/
  ConditionalCases?: Array<CxPageTransitionRouteTriggerFulfillmentConditionalCase>;

  /*
The list of rich message responses to present to the user.
Structure is documented below.
*/
  Messages?: Array<CxPageTransitionRouteTriggerFulfillmentMessage>;
}
