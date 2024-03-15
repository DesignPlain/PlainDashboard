import { CxPageTransitionRouteTriggerFulfillment } from "./CxPageTransitionRouteTriggerFulfillment";

export interface CxPageTransitionRoute {
  /*
The condition to evaluate against form parameters or session parameters.
At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
*/
  Condition?: string;

  /*
The unique identifier of an Intent.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
*/
  Intent?: string;

  /*
(Output)
The unique identifier of this transition route.
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
The fulfillment to call when the condition is satisfied. At least one of triggerFulfillment and target must be specified. When both are defined, triggerFulfillment is executed first.
Structure is documented below.
*/
  TriggerFulfillment?: CxPageTransitionRouteTriggerFulfillment;
}
