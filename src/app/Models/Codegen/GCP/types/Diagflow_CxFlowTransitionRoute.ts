import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxFlowTransitionRouteTriggerFulfillment,
  Diagflow_CxFlowTransitionRouteTriggerFulfillment_GetTypes,
} from "./Diagflow_CxFlowTransitionRouteTriggerFulfillment";

export interface Diagflow_CxFlowTransitionRoute {
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
  TriggerFulfillment?: Diagflow_CxFlowTransitionRouteTriggerFulfillment;
}

export function Diagflow_CxFlowTransitionRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "TargetPage",
      "The target page to transition to.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TriggerFulfillment",
      "The fulfillment to call when the condition is satisfied. At least one of triggerFulfillment and target must be specified. When both are defined, triggerFulfillment is executed first.\nStructure is documented below.",
      Diagflow_CxFlowTransitionRouteTriggerFulfillment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Condition",
      "The condition to evaluate against form parameters or session parameters.\nAt least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Intent",
      "The unique identifier of an Intent.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "(Output)\nThe unique identifier of this transition route.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TargetFlow",
      "The target flow to transition to.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.",
      [],
      false,
      false,
    ),
  ];
}
