import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillment,
  diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillment_GetTypes,
} from "./diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillment";
import {
  diagflow_CxPageFormParameterFillBehaviorRepromptEventHandler,
  diagflow_CxPageFormParameterFillBehaviorRepromptEventHandler_GetTypes,
} from "./diagflow_CxPageFormParameterFillBehaviorRepromptEventHandler";

export interface diagflow_CxPageFormParameterFillBehavior {
  /*
The fulfillment to provide the initial prompt that the agent can present to the user in order to fill the parameter.
Structure is documented below.
*/
  initialPromptFulfillment?: diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillment;

  /*
The handlers for parameter-level events, used to provide reprompt for the parameter or transition to a different page/flow. The supported events are:
- sys.no-match-<N>, where N can be from 1 to 6
- sys.no-match-default
- sys.no-input-<N>, where N can be from 1 to 6
- sys.no-input-default
- sys.invalid-parameter
[initialPromptFulfillment][initialPromptFulfillment] provides the first prompt for the parameter.
If the user's response does not fill the parameter, a no-match/no-input event will be triggered, and the fulfillment associated with the sys.no-match-1/sys.no-input-1 handler (if defined) will be called to provide a prompt. The sys.no-match-2/sys.no-input-2 handler (if defined) will respond to the next no-match/no-input event, and so on.
A sys.no-match-default or sys.no-input-default handler will be used to handle all following no-match/no-input events after all numbered no-match/no-input handlers for the parameter are consumed.
A sys.invalid-parameter handler can be defined to handle the case where the parameter values have been invalidated by webhook. For example, if the user's response fill the parameter, however the parameter was invalidated by webhook, the fulfillment associated with the sys.invalid-parameter handler (if defined) will be called to provide a prompt.
If the event handler for the corresponding event can't be found on the parameter, initialPromptFulfillment will be re-prompted.
Structure is documented below.
*/
  repromptEventHandlers?: Array<diagflow_CxPageFormParameterFillBehaviorRepromptEventHandler>;
}

export function diagflow_CxPageFormParameterFillBehavior_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "initialPromptFulfillment",
      "The fulfillment to provide the initial prompt that the agent can present to the user in order to fill the parameter.\nStructure is documented below.",
      diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "repromptEventHandlers",
      "The handlers for parameter-level events, used to provide reprompt for the parameter or transition to a different page/flow. The supported events are:\n* sys.no-match-<N>, where N can be from 1 to 6\n* sys.no-match-default\n* sys.no-input-<N>, where N can be from 1 to 6\n* sys.no-input-default\n* sys.invalid-parameter\n[initialPromptFulfillment][initialPromptFulfillment] provides the first prompt for the parameter.\nIf the user's response does not fill the parameter, a no-match/no-input event will be triggered, and the fulfillment associated with the sys.no-match-1/sys.no-input-1 handler (if defined) will be called to provide a prompt. The sys.no-match-2/sys.no-input-2 handler (if defined) will respond to the next no-match/no-input event, and so on.\nA sys.no-match-default or sys.no-input-default handler will be used to handle all following no-match/no-input events after all numbered no-match/no-input handlers for the parameter are consumed.\nA sys.invalid-parameter handler can be defined to handle the case where the parameter values have been invalidated by webhook. For example, if the user's response fill the parameter, however the parameter was invalidated by webhook, the fulfillment associated with the sys.invalid-parameter handler (if defined) will be called to provide a prompt.\nIf the event handler for the corresponding event can't be found on the parameter, initialPromptFulfillment will be re-prompted.\nStructure is documented below.",
      diagflow_CxPageFormParameterFillBehaviorRepromptEventHandler_GetTypes(),
      false,
      false,
    ),
  ];
}
