import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxFlowNluSettings,
  Diagflow_CxFlowNluSettings_GetTypes,
} from "../types/Diagflow_CxFlowNluSettings";
import {
  Diagflow_CxFlowEventHandler,
  Diagflow_CxFlowEventHandler_GetTypes,
} from "../types/Diagflow_CxFlowEventHandler";
import {
  Diagflow_CxFlowTransitionRoute,
  Diagflow_CxFlowTransitionRoute_GetTypes,
} from "../types/Diagflow_CxFlowTransitionRoute";
import {
  Diagflow_CxFlowAdvancedSettings,
  Diagflow_CxFlowAdvancedSettings_GetTypes,
} from "../types/Diagflow_CxFlowAdvancedSettings";

export interface CxFlowArgs {
  /*
Marks this as the [Default Start Flow](https://cloud.google.com/dialogflow/cx/docs/concept/flow#start) for an agent. When you create an agent, the Default Start Flow is created automatically.
The Default Start Flow cannot be deleted; deleting the `gcp.diagflow.CxFlow` resource does nothing to the underlying GCP resources.

> Avoid having multiple `gcp.diagflow.CxFlow` resources linked to the same agent with `is_default_start_flow = true` because they will compete to control a single Default Start Flow resource in GCP.
*/
  IsDefaultStartFlow?: boolean;

  /*
NLU related settings of the flow.
Structure is documented below.
*/
  NluSettings?: Diagflow_CxFlowNluSettings;

  /*
A flow's transition route group serve two purposes:
They are responsible for matching the user's first utterances in the flow.
They are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
*/
  TransitionRouteGroups?: Array<string>;

  /*
The human-readable name of the flow.


- - -
*/
  DisplayName?: string;

  /*
A flow's event handlers serve two purposes:
They are responsible for handling events (e.g. no match, webhook errors) in the flow.
They are inherited by every page's [event handlers][Page.event_handlers], which can be used to handle common events regardless of the current page. Event handlers defined in the page have higher priority than those defined in the flow.
Unlike transitionRoutes, these handlers are evaluated on a first-match basis. The first one that matches the event get executed, with the rest being ignored.
Structure is documented below.
*/
  EventHandlers?: Array<Diagflow_CxFlowEventHandler>;

  /*
The language of the following fields in flow:
Flow.event_handlers.trigger_fulfillment.messages
Flow.event_handlers.trigger_fulfillment.conditional_cases
Flow.transition_routes.trigger_fulfillment.messages
Flow.transition_routes.trigger_fulfillment.conditional_cases
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
*/
  LanguageCode?: string;

  /*
The agent to create a flow for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  Parent?: string;

  /*
A flow's transition routes serve two purposes:
They are responsible for matching the user's first utterances in the flow.
They are inherited by every page's [transition routes][Page.transition_routes] and can support use cases such as the user saying "help" or "can I talk to a human?", which can be handled in a common way regardless of the current page. Transition routes defined in the page have higher priority than those defined in the flow.
TransitionRoutes are evalauted in the following order:
TransitionRoutes with intent specified.
TransitionRoutes with only condition specified.
TransitionRoutes with intent specified are inherited by pages in the flow.
Structure is documented below.
*/
  TransitionRoutes?: Array<Diagflow_CxFlowTransitionRoute>;

  /*
Hierarchical advanced settings for this flow. The settings exposed at the lower level overrides the settings exposed at the higher level.
Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
Structure is documented below.
*/
  AdvancedSettings?: Diagflow_CxFlowAdvancedSettings;

  // The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.
  Description?: string;
}
export class CxFlow extends Resource {
  /*
Hierarchical advanced settings for this flow. The settings exposed at the lower level overrides the settings exposed at the higher level.
Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
Structure is documented below.
*/
  public AdvancedSettings?: Diagflow_CxFlowAdvancedSettings;

  // The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.
  public Description?: string;

  /*
Marks this as the [Default Start Flow](https://cloud.google.com/dialogflow/cx/docs/concept/flow#start) for an agent. When you create an agent, the Default Start Flow is created automatically.
The Default Start Flow cannot be deleted; deleting the `gcp.diagflow.CxFlow` resource does nothing to the underlying GCP resources.

> Avoid having multiple `gcp.diagflow.CxFlow` resources linked to the same agent with `is_default_start_flow = true` because they will compete to control a single Default Start Flow resource in GCP.
*/
  public IsDefaultStartFlow?: boolean;

  /*
(Output)
The unique identifier of this event handler.
*/
  public Name?: string;

  /*
NLU related settings of the flow.
Structure is documented below.
*/
  public NluSettings?: Diagflow_CxFlowNluSettings;

  /*
The agent to create a flow for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  public Parent?: string;

  /*
A flow's transition routes serve two purposes:
They are responsible for matching the user's first utterances in the flow.
They are inherited by every page's [transition routes][Page.transition_routes] and can support use cases such as the user saying "help" or "can I talk to a human?", which can be handled in a common way regardless of the current page. Transition routes defined in the page have higher priority than those defined in the flow.
TransitionRoutes are evalauted in the following order:
TransitionRoutes with intent specified.
TransitionRoutes with only condition specified.
TransitionRoutes with intent specified are inherited by pages in the flow.
Structure is documented below.
*/
  public TransitionRoutes?: Array<Diagflow_CxFlowTransitionRoute>;

  /*
The human-readable name of the flow.


- - -
*/
  public DisplayName?: string;

  /*
A flow's event handlers serve two purposes:
They are responsible for handling events (e.g. no match, webhook errors) in the flow.
They are inherited by every page's [event handlers][Page.event_handlers], which can be used to handle common events regardless of the current page. Event handlers defined in the page have higher priority than those defined in the flow.
Unlike transitionRoutes, these handlers are evaluated on a first-match basis. The first one that matches the event get executed, with the rest being ignored.
Structure is documented below.
*/
  public EventHandlers?: Array<Diagflow_CxFlowEventHandler>;

  /*
The language of the following fields in flow:
Flow.event_handlers.trigger_fulfillment.messages
Flow.event_handlers.trigger_fulfillment.conditional_cases
Flow.transition_routes.trigger_fulfillment.messages
Flow.transition_routes.trigger_fulfillment.conditional_cases
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
*/
  public LanguageCode?: string;

  /*
A flow's transition route group serve two purposes:
They are responsible for matching the user's first utterances in the flow.
They are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
*/
  public TransitionRouteGroups?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The agent to create a flow for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "TransitionRoutes",
        'A flow\'s transition routes serve two purposes:\nThey are responsible for matching the user\'s first utterances in the flow.\nThey are inherited by every page\'s [transition routes][Page.transition_routes] and can support use cases such as the user saying "help" or "can I talk to a human?", which can be handled in a common way regardless of the current page. Transition routes defined in the page have higher priority than those defined in the flow.\nTransitionRoutes are evalauted in the following order:\nTransitionRoutes with intent specified.\nTransitionRoutes with only condition specified.\nTransitionRoutes with intent specified are inherited by pages in the flow.\nStructure is documented below.',
        Diagflow_CxFlowTransitionRoute_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "TransitionRouteGroups",
        "A flow's transition route group serve two purposes:\nThey are responsible for matching the user's first utterances in the flow.\nThey are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.\nFormat:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "EventHandlers",
        "A flow's event handlers serve two purposes:\nThey are responsible for handling events (e.g. no match, webhook errors) in the flow.\nThey are inherited by every page's [event handlers][Page.event_handlers], which can be used to handle common events regardless of the current page. Event handlers defined in the page have higher priority than those defined in the flow.\nUnlike transitionRoutes, these handlers are evaluated on a first-match basis. The first one that matches the event get executed, with the rest being ignored.\nStructure is documented below.",
        Diagflow_CxFlowEventHandler_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "LanguageCode",
        "The language of the following fields in flow:\nFlow.event_handlers.trigger_fulfillment.messages\nFlow.event_handlers.trigger_fulfillment.conditional_cases\nFlow.transition_routes.trigger_fulfillment.messages\nFlow.transition_routes.trigger_fulfillment.conditional_cases\nIf not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AdvancedSettings",
        "Hierarchical advanced settings for this flow. The settings exposed at the lower level overrides the settings exposed at the higher level.\nHierarchy: Agent->Flow->Page->Fulfillment/Parameter.\nStructure is documented below.",
        Diagflow_CxFlowAdvancedSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "IsDefaultStartFlow",
        "Marks this as the [Default Start Flow](https://cloud.google.com/dialogflow/cx/docs/concept/flow#start) for an agent. When you create an agent, the Default Start Flow is created automatically.\nThe Default Start Flow cannot be deleted; deleting the `gcp.diagflow.CxFlow` resource does nothing to the underlying GCP resources.\n\n> Avoid having multiple `gcp.diagflow.CxFlow` resources linked to the same agent with `is_default_start_flow = true` because they will compete to control a single Default Start Flow resource in GCP.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NluSettings",
        "NLU related settings of the flow.\nStructure is documented below.",
        Diagflow_CxFlowNluSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The human-readable name of the flow.\n\n\n- - -",
        [],
        true,
        false,
      ),
    ];
  }
}
