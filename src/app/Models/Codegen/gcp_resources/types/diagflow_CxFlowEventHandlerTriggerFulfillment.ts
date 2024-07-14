import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  diagflow_CxFlowEventHandlerTriggerFulfillmentSetParameterAction,
  diagflow_CxFlowEventHandlerTriggerFulfillmentSetParameterAction_GetTypes,
} from "./diagflow_CxFlowEventHandlerTriggerFulfillmentSetParameterAction";
import {
  diagflow_CxFlowEventHandlerTriggerFulfillmentConditionalCase,
  diagflow_CxFlowEventHandlerTriggerFulfillmentConditionalCase_GetTypes,
} from "./diagflow_CxFlowEventHandlerTriggerFulfillmentConditionalCase";
import {
  diagflow_CxFlowEventHandlerTriggerFulfillmentMessage,
  diagflow_CxFlowEventHandlerTriggerFulfillmentMessage_GetTypes,
} from "./diagflow_CxFlowEventHandlerTriggerFulfillmentMessage";

export interface diagflow_CxFlowEventHandlerTriggerFulfillment {
  // Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  returnPartialResponses?: boolean;

  /*
Set parameter values before executing the webhook.
Structure is documented below.
*/
  setParameterActions?: Array<diagflow_CxFlowEventHandlerTriggerFulfillmentSetParameterAction>;

  // The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  tag?: string;

  // The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  webhook?: string;

  /*
Conditional cases for this fulfillment.
Structure is documented below.
*/
  conditionalCases?: Array<diagflow_CxFlowEventHandlerTriggerFulfillmentConditionalCase>;

  /*
The list of rich message responses to present to the user.
Structure is documented below.
*/
  messages?: Array<diagflow_CxFlowEventHandlerTriggerFulfillmentMessage>;
}

export function diagflow_CxFlowEventHandlerTriggerFulfillment_GetTypes(): DynamicUIProps[] {
  return [
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
      diagflow_CxFlowEventHandlerTriggerFulfillmentSetParameterAction_GetTypes(),
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
      diagflow_CxFlowEventHandlerTriggerFulfillmentConditionalCase_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "messages",
      "The list of rich message responses to present to the user.\nStructure is documented below.",
      diagflow_CxFlowEventHandlerTriggerFulfillmentMessage_GetTypes(),
      false,
      false,
    ),
  ];
}
