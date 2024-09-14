import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  diagflow_CxPageEventHandler,
  diagflow_CxPageEventHandler_GetTypes,
} from "../types/diagflow_CxPageEventHandler";
import {
  diagflow_CxPageEntryFulfillment,
  diagflow_CxPageEntryFulfillment_GetTypes,
} from "../types/diagflow_CxPageEntryFulfillment";
import {
  diagflow_CxPageForm,
  diagflow_CxPageForm_GetTypes,
} from "../types/diagflow_CxPageForm";
import {
  diagflow_CxPageTransitionRoute,
  diagflow_CxPageTransitionRoute_GetTypes,
} from "../types/diagflow_CxPageTransitionRoute";
import {
  diagflow_CxPageAdvancedSettings,
  diagflow_CxPageAdvancedSettings_GetTypes,
} from "../types/diagflow_CxPageAdvancedSettings";

export interface CxPageArgs {
  /*
The flow to create a page for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
*/
  parent?: string;

  /*
Ordered list of TransitionRouteGroups associated with the page. Transition route groups must be unique within a page.
If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route > page's transition route group > flow's transition routes.
If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
*/
  transitionRouteGroups?: Array<string>;

  /*
Hierarchical advanced settings for this page. The settings exposed at the lower level overrides the settings exposed at the higher level.
Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
Structure is documented below.
*/
  advancedSettings?: diagflow_CxPageAdvancedSettings;

  /*
The human-readable name of the page, unique within the agent.


- - -
*/
  displayName?: string;

  /*
Handlers associated with the page to handle events such as webhook errors, no match or no input.
Structure is documented below.
*/
  eventHandlers?: Array<diagflow_CxPageEventHandler>;

  /*
The language of the following fields in page:
Page.entry_fulfillment.messages
Page.entry_fulfillment.conditional_cases
Page.event_handlers.trigger_fulfillment.messages
Page.event_handlers.trigger_fulfillment.conditional_cases
Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages
Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases
Page.form.parameters.fill_behavior.reprompt_event_handlers.messages
Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases
Page.transition_routes.trigger_fulfillment.messages
Page.transition_routes.trigger_fulfillment.conditional_cases
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
*/
  languageCode?: string;

  /*
The fulfillment to call when the session is entering the page.
Structure is documented below.
*/
  entryFulfillment?: diagflow_CxPageEntryFulfillment;

  /*
The form associated with the page, used for collecting parameters relevant to the page.
Structure is documented below.
*/
  form?: diagflow_CxPageForm;

  /*
A list of transitions for the transition rules of this page. They route the conversation to another page in the same flow, or another flow.
When we are in a certain page, the TransitionRoutes are evalauted in the following order:
TransitionRoutes defined in the page with intent specified.
TransitionRoutes defined in the transition route groups with intent specified.
TransitionRoutes defined in flow with intent specified.
TransitionRoutes defined in the transition route groups with intent specified.
TransitionRoutes defined in the page with only condition specified.
TransitionRoutes defined in the transition route groups with only condition specified.
Structure is documented below.
*/
  transitionRoutes?: Array<diagflow_CxPageTransitionRoute>;
}
export class CxPage extends DS_Resource {
  /*
Ordered list of TransitionRouteGroups associated with the page. Transition route groups must be unique within a page.
If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route > page's transition route group > flow's transition routes.
If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
*/
  public transitionRouteGroups?: Array<string>;

  /*
Handlers associated with the page to handle events such as webhook errors, no match or no input.
Structure is documented below.
*/
  public eventHandlers?: Array<diagflow_CxPageEventHandler>;

  /*
The form associated with the page, used for collecting parameters relevant to the page.
Structure is documented below.
*/
  public form?: diagflow_CxPageForm;

  /*
The language of the following fields in page:
Page.entry_fulfillment.messages
Page.entry_fulfillment.conditional_cases
Page.event_handlers.trigger_fulfillment.messages
Page.event_handlers.trigger_fulfillment.conditional_cases
Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages
Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases
Page.form.parameters.fill_behavior.reprompt_event_handlers.messages
Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases
Page.transition_routes.trigger_fulfillment.messages
Page.transition_routes.trigger_fulfillment.conditional_cases
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
*/
  public languageCode?: string;

  /*
(Output)
The unique identifier of this event handler.
*/
  public name?: string;

  /*
A list of transitions for the transition rules of this page. They route the conversation to another page in the same flow, or another flow.
When we are in a certain page, the TransitionRoutes are evalauted in the following order:
TransitionRoutes defined in the page with intent specified.
TransitionRoutes defined in the transition route groups with intent specified.
TransitionRoutes defined in flow with intent specified.
TransitionRoutes defined in the transition route groups with intent specified.
TransitionRoutes defined in the page with only condition specified.
TransitionRoutes defined in the transition route groups with only condition specified.
Structure is documented below.
*/
  public transitionRoutes?: Array<diagflow_CxPageTransitionRoute>;

  /*
Hierarchical advanced settings for this page. The settings exposed at the lower level overrides the settings exposed at the higher level.
Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
Structure is documented below.
*/
  public advancedSettings?: diagflow_CxPageAdvancedSettings;

  /*
The human-readable name of the page, unique within the agent.


- - -
*/
  public displayName?: string;

  /*
The fulfillment to call when the session is entering the page.
Structure is documented below.
*/
  public entryFulfillment?: diagflow_CxPageEntryFulfillment;

  /*
The flow to create a page for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
*/
  public parent?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "form",
        "The form associated with the page, used for collecting parameters relevant to the page.\nStructure is documented below.",
        () => diagflow_CxPageForm_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "transitionRoutes",
        "A list of transitions for the transition rules of this page. They route the conversation to another page in the same flow, or another flow.\nWhen we are in a certain page, the TransitionRoutes are evalauted in the following order:\nTransitionRoutes defined in the page with intent specified.\nTransitionRoutes defined in the transition route groups with intent specified.\nTransitionRoutes defined in flow with intent specified.\nTransitionRoutes defined in the transition route groups with intent specified.\nTransitionRoutes defined in the page with only condition specified.\nTransitionRoutes defined in the transition route groups with only condition specified.\nStructure is documented below.",
        () => diagflow_CxPageTransitionRoute_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The flow to create a page for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "advancedSettings",
        "Hierarchical advanced settings for this page. The settings exposed at the lower level overrides the settings exposed at the higher level.\nHierarchy: Agent->Flow->Page->Fulfillment/Parameter.\nStructure is documented below.",
        () => diagflow_CxPageAdvancedSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "eventHandlers",
        "Handlers associated with the page to handle events such as webhook errors, no match or no input.\nStructure is documented below.",
        () => diagflow_CxPageEventHandler_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "entryFulfillment",
        "The fulfillment to call when the session is entering the page.\nStructure is documented below.",
        () => diagflow_CxPageEntryFulfillment_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "transitionRouteGroups",
        "Ordered list of TransitionRouteGroups associated with the page. Transition route groups must be unique within a page.\nIf multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route > page's transition route group > flow's transition routes.\nIf multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence.\nFormat:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The human-readable name of the page, unique within the agent.\n\n\n- - -",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "languageCode",
        "The language of the following fields in page:\nPage.entry_fulfillment.messages\nPage.entry_fulfillment.conditional_cases\nPage.event_handlers.trigger_fulfillment.messages\nPage.event_handlers.trigger_fulfillment.conditional_cases\nPage.form.parameters.fill_behavior.initial_prompt_fulfillment.messages\nPage.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases\nPage.form.parameters.fill_behavior.reprompt_event_handlers.messages\nPage.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases\nPage.transition_routes.trigger_fulfillment.messages\nPage.transition_routes.trigger_fulfillment.conditional_cases\nIf not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
