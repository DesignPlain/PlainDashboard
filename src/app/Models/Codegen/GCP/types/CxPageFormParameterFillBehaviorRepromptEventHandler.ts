import { CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillment } from "./CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillment";

export interface CxPageFormParameterFillBehaviorRepromptEventHandler {
  // The name of the event to handle.
  Event?: string;

  /*
(Output)
The unique identifier of this event handler.
*/
  Name?: string;

  /*
The target flow to transition to.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
*/
  TargetFlow?: string;

  /*
The target page to transition to.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
*/
  TargetPage?: string;

  /*
The fulfillment to call when the event occurs. Handling webhook errors with a fulfillment enabled with webhook could cause infinite loop. It is invalid to specify such fulfillment for a handler handling webhooks.
Structure is documented below.
*/
  TriggerFulfillment?: CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillment;
}
