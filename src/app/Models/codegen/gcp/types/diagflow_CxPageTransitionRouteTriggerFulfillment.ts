import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  diagflow_CxPageTransitionRouteTriggerFulfillmentMessage,
  diagflow_CxPageTransitionRouteTriggerFulfillmentMessage_GetTypes,
} from './diagflow_CxPageTransitionRouteTriggerFulfillmentMessage';
import {
  diagflow_CxPageTransitionRouteTriggerFulfillmentSetParameterAction,
  diagflow_CxPageTransitionRouteTriggerFulfillmentSetParameterAction_GetTypes,
} from './diagflow_CxPageTransitionRouteTriggerFulfillmentSetParameterAction';
import {
  diagflow_CxPageTransitionRouteTriggerFulfillmentConditionalCase,
  diagflow_CxPageTransitionRouteTriggerFulfillmentConditionalCase_GetTypes,
} from './diagflow_CxPageTransitionRouteTriggerFulfillmentConditionalCase';

export interface diagflow_CxPageTransitionRouteTriggerFulfillment {
  // Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  returnPartialResponses?: boolean;

  /*
Set parameter values before executing the webhook.
Structure is documented below.
*/
  setParameterActions?: Array<diagflow_CxPageTransitionRouteTriggerFulfillmentSetParameterAction>;

  // The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  tag?: string;

  // The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  webhook?: string;

  /*
Conditional cases for this fulfillment.
Structure is documented below.
*/
  conditionalCases?: Array<diagflow_CxPageTransitionRouteTriggerFulfillmentConditionalCase>;

  /*
The list of rich message responses to present to the user.
Structure is documented below.
*/
  messages?: Array<diagflow_CxPageTransitionRouteTriggerFulfillmentMessage>;
}

export function diagflow_CxPageTransitionRouteTriggerFulfillment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'setParameterActions',
      'Set parameter values before executing the webhook.\nStructure is documented below.',
      () =>
        diagflow_CxPageTransitionRouteTriggerFulfillmentSetParameterAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tag',
      'The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'webhook',
      'The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'conditionalCases',
      'Conditional cases for this fulfillment.\nStructure is documented below.',
      () =>
        diagflow_CxPageTransitionRouteTriggerFulfillmentConditionalCase_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'messages',
      'The list of rich message responses to present to the user.\nStructure is documented below.',
      () => diagflow_CxPageTransitionRouteTriggerFulfillmentMessage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'returnPartialResponses',
      'Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.',
      () => [],
      false,
      false,
    ),
  ];
}
