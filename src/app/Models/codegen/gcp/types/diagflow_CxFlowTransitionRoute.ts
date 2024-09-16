import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  diagflow_CxFlowTransitionRouteTriggerFulfillment,
  diagflow_CxFlowTransitionRouteTriggerFulfillment_GetTypes,
} from './diagflow_CxFlowTransitionRouteTriggerFulfillment';

export interface diagflow_CxFlowTransitionRoute {
  /*
The unique identifier of an Intent.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
*/
  intent?: string;

  /*
(Output)
The unique identifier of this transition route.
*/
  name?: string;

  /*
The target flow to transition to.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
*/
  targetFlow?: string;

  /*
The target page to transition to.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
*/
  targetPage?: string;

  /*
The fulfillment to call when the condition is satisfied. At least one of triggerFulfillment and target must be specified. When both are defined, triggerFulfillment is executed first.
Structure is documented below.
*/
  triggerFulfillment?: diagflow_CxFlowTransitionRouteTriggerFulfillment;

  /*
The condition to evaluate against form parameters or session parameters.
At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
*/
  condition?: string;
}

export function diagflow_CxFlowTransitionRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'intent',
      'The unique identifier of an Intent.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      '(Output)\nThe unique identifier of this transition route.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'targetFlow',
      'The target flow to transition to.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'targetPage',
      'The target page to transition to.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'triggerFulfillment',
      'The fulfillment to call when the condition is satisfied. At least one of triggerFulfillment and target must be specified. When both are defined, triggerFulfillment is executed first.\nStructure is documented below.',
      () => diagflow_CxFlowTransitionRouteTriggerFulfillment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'condition',
      'The condition to evaluate against form parameters or session parameters.\nAt least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.',
      () => [],
      false,
      false,
    ),
  ];
}
