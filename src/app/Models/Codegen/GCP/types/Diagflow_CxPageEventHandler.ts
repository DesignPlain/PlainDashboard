import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxPageEventHandlerTriggerFulfillment,
  Diagflow_CxPageEventHandlerTriggerFulfillment_GetTypes,
} from "./Diagflow_CxPageEventHandlerTriggerFulfillment";

export interface Diagflow_CxPageEventHandler {
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
  TriggerFulfillment?: Diagflow_CxPageEventHandlerTriggerFulfillment;
}

export function Diagflow_CxPageEventHandler_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Event",
      "The name of the event to handle.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "(Output)\nThe unique identifier of this event handler.",
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
      "The fulfillment to call when the event occurs. Handling webhook errors with a fulfillment enabled with webhook could cause infinite loop. It is invalid to specify such fulfillment for a handler handling webhooks.\nStructure is documented below.",
      Diagflow_CxPageEventHandlerTriggerFulfillment_GetTypes(),
      false,
      false,
    ),
  ];
}
