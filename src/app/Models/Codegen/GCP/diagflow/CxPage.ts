import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxPageAdvancedSettings,
  Diagflow_CxPageAdvancedSettings_GetTypes,
} from "../types/Diagflow_CxPageAdvancedSettings";
import {
  Diagflow_CxPageForm,
  Diagflow_CxPageForm_GetTypes,
} from "../types/Diagflow_CxPageForm";
import {
  Diagflow_CxPageTransitionRoute,
  Diagflow_CxPageTransitionRoute_GetTypes,
} from "../types/Diagflow_CxPageTransitionRoute";
import {
  Diagflow_CxPageEntryFulfillment,
  Diagflow_CxPageEntryFulfillment_GetTypes,
} from "../types/Diagflow_CxPageEntryFulfillment";
import {
  Diagflow_CxPageEventHandler,
  Diagflow_CxPageEventHandler_GetTypes,
} from "../types/Diagflow_CxPageEventHandler";

export interface CxPageArgs {
  /*
Hierarchical advanced settings for this page. The settings exposed at the lower level overrides the settings exposed at the higher level.
Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
Structure is documented below.
*/
  AdvancedSettings?: Diagflow_CxPageAdvancedSettings;

  /*
The form associated with the page, used for collecting parameters relevant to the page.
Structure is documented below.
*/
  Form?: Diagflow_CxPageForm;

  /*
Ordered list of TransitionRouteGroups associated with the page. Transition route groups must be unique within a page.
If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route > page's transition route group > flow's transition routes.
If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
*/
  TransitionRouteGroups?: Array<string>;

  /*
The flow to create a page for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
*/
  Parent?: string;

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
  TransitionRoutes?: Array<Diagflow_CxPageTransitionRoute>;

  /*
The human-readable name of the page, unique within the agent.


- - -
*/
  DisplayName?: string;

  /*
The fulfillment to call when the session is entering the page.
Structure is documented below.
*/
  EntryFulfillment?: Diagflow_CxPageEntryFulfillment;

  /*
Handlers associated with the page to handle events such as webhook errors, no match or no input.
Structure is documented below.
*/
  EventHandlers?: Array<Diagflow_CxPageEventHandler>;

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
  LanguageCode?: string;
}
export class CxPage extends Resource {
  /*
Handlers associated with the page to handle events such as webhook errors, no match or no input.
Structure is documented below.
*/
  public EventHandlers?: Array<Diagflow_CxPageEventHandler>;

  /*
The form associated with the page, used for collecting parameters relevant to the page.
Structure is documented below.
*/
  public Form?: Diagflow_CxPageForm;

  /*
(Output)
The unique identifier of this event handler.
*/
  public Name?: string;

  /*
The flow to create a page for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
*/
  public Parent?: string;

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
  public TransitionRoutes?: Array<Diagflow_CxPageTransitionRoute>;

  /*
The human-readable name of the page, unique within the agent.


- - -
*/
  public DisplayName?: string;

  /*
The fulfillment to call when the session is entering the page.
Structure is documented below.
*/
  public EntryFulfillment?: Diagflow_CxPageEntryFulfillment;

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
  public LanguageCode?: string;

  /*
Ordered list of TransitionRouteGroups associated with the page. Transition route groups must be unique within a page.
If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route > page's transition route group > flow's transition routes.
If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
*/
  public TransitionRouteGroups?: Array<string>;

  /*
Hierarchical advanced settings for this page. The settings exposed at the lower level overrides the settings exposed at the higher level.
Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
Structure is documented below.
*/
  public AdvancedSettings?: Diagflow_CxPageAdvancedSettings;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "TransitionRouteGroups",
        "Ordered list of TransitionRouteGroups associated with the page. Transition route groups must be unique within a page.\nIf multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route > page's transition route group > flow's transition routes.\nIf multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence.\nFormat:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The human-readable name of the page, unique within the agent.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "LanguageCode",
        "The language of the following fields in page:\nPage.entry_fulfillment.messages\nPage.entry_fulfillment.conditional_cases\nPage.event_handlers.trigger_fulfillment.messages\nPage.event_handlers.trigger_fulfillment.conditional_cases\nPage.form.parameters.fill_behavior.initial_prompt_fulfillment.messages\nPage.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases\nPage.form.parameters.fill_behavior.reprompt_event_handlers.messages\nPage.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases\nPage.transition_routes.trigger_fulfillment.messages\nPage.transition_routes.trigger_fulfillment.conditional_cases\nIf not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "TransitionRoutes",
        "A list of transitions for the transition rules of this page. They route the conversation to another page in the same flow, or another flow.\nWhen we are in a certain page, the TransitionRoutes are evalauted in the following order:\nTransitionRoutes defined in the page with intent specified.\nTransitionRoutes defined in the transition route groups with intent specified.\nTransitionRoutes defined in flow with intent specified.\nTransitionRoutes defined in the transition route groups with intent specified.\nTransitionRoutes defined in the page with only condition specified.\nTransitionRoutes defined in the transition route groups with only condition specified.\nStructure is documented below.",
        Diagflow_CxPageTransitionRoute_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EntryFulfillment",
        "The fulfillment to call when the session is entering the page.\nStructure is documented below.",
        Diagflow_CxPageEntryFulfillment_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "EventHandlers",
        "Handlers associated with the page to handle events such as webhook errors, no match or no input.\nStructure is documented below.",
        Diagflow_CxPageEventHandler_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AdvancedSettings",
        "Hierarchical advanced settings for this page. The settings exposed at the lower level overrides the settings exposed at the higher level.\nHierarchy: Agent->Flow->Page->Fulfillment/Parameter.\nStructure is documented below.",
        Diagflow_CxPageAdvancedSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Form",
        "The form associated with the page, used for collecting parameters relevant to the page.\nStructure is documented below.",
        Diagflow_CxPageForm_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The flow to create a page for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.",
        [],
        false,
        true,
      ),
    ];
  }
}
