import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  diagflow_CxFlowTransitionRouteTriggerFulfillmentMessage,
  diagflow_CxFlowTransitionRouteTriggerFulfillmentMessage_GetTypes,
} from "./diagflow_CxFlowTransitionRouteTriggerFulfillmentMessage";
import {
  diagflow_CxFlowTransitionRouteTriggerFulfillmentSetParameterAction,
  diagflow_CxFlowTransitionRouteTriggerFulfillmentSetParameterAction_GetTypes,
} from "./diagflow_CxFlowTransitionRouteTriggerFulfillmentSetParameterAction";
import {
  diagflow_CxFlowTransitionRouteTriggerFulfillmentConditionalCase,
  diagflow_CxFlowTransitionRouteTriggerFulfillmentConditionalCase_GetTypes,
} from "./diagflow_CxFlowTransitionRouteTriggerFulfillmentConditionalCase";

export interface diagflow_CxFlowTransitionRouteTriggerFulfillment {
  // The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  webhook?: string;

  /*
Conditional cases for this fulfillment.
Structure is documented below.
*/
  conditionalCases?: Array<diagflow_CxFlowTransitionRouteTriggerFulfillmentConditionalCase>;

  /*
The list of rich message responses to present to the user.
Structure is documented below.
*/
  messages?: Array<diagflow_CxFlowTransitionRouteTriggerFulfillmentMessage>;

  // Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  returnPartialResponses?: boolean;

  /*
Set parameter values before executing the webhook.
Structure is documented below.
*/
  setParameterActions?: Array<diagflow_CxFlowTransitionRouteTriggerFulfillmentSetParameterAction>;

  // The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  tag?: string;
}

export function diagflow_CxFlowTransitionRouteTriggerFulfillment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "conditionalCases",
      "Conditional cases for this fulfillment.\nStructure is documented below.",
      diagflow_CxFlowTransitionRouteTriggerFulfillmentConditionalCase_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "messages",
      "The list of rich message responses to present to the user.\nStructure is documented below.",
      diagflow_CxFlowTransitionRouteTriggerFulfillmentMessage_GetTypes(),
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
      diagflow_CxFlowTransitionRouteTriggerFulfillmentSetParameterAction_GetTypes(),
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
  ];
}
