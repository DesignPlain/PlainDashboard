import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  diagflow_CxFlowTransitionRoute,
  diagflow_CxFlowTransitionRoute_GetTypes,
} from "../types/diagflow_CxFlowTransitionRoute";
import {
  diagflow_CxFlowAdvancedSettings,
  diagflow_CxFlowAdvancedSettings_GetTypes,
} from "../types/diagflow_CxFlowAdvancedSettings";
import {
  diagflow_CxFlowEventHandler,
  diagflow_CxFlowEventHandler_GetTypes,
} from "../types/diagflow_CxFlowEventHandler";
import {
  diagflow_CxFlowNluSettings,
  diagflow_CxFlowNluSettings_GetTypes,
} from "../types/diagflow_CxFlowNluSettings";

export interface CxFlowArgs {
  /*
Hierarchical advanced settings for this flow. The settings exposed at the lower level overrides the settings exposed at the higher level.
Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
Structure is documented below.
*/
  advancedSettings?: diagflow_CxFlowAdvancedSettings;

  /*
The human-readable name of the flow.


- - -
*/
  displayName?: string;

  /*
A flow's event handlers serve two purposes:
They are responsible for handling events (e.g. no match, webhook errors) in the flow.
They are inherited by every page's [event handlers][Page.event_handlers], which can be used to handle common events regardless of the current page. Event handlers defined in the page have higher priority than those defined in the flow.
Unlike transitionRoutes, these handlers are evaluated on a first-match basis. The first one that matches the event get executed, with the rest being ignored.
Structure is documented below.
*/
  eventHandlers?: Array<diagflow_CxFlowEventHandler>;

  /*
Marks this as the [Default Start Flow](https://cloud.google.com/dialogflow/cx/docs/concept/flow#start) for an agent. When you create an agent, the Default Start Flow is created automatically.
The Default Start Flow cannot be deleted; deleting the `gcp.diagflow.CxFlow` resource does nothing to the underlying GCP resources.

> Avoid having multiple `gcp.diagflow.CxFlow` resources linked to the same agent with `is_default_start_flow = true` because they will compete to control a single Default Start Flow resource in GCP.
*/
  isDefaultStartFlow?: boolean;

  /*
NLU related settings of the flow.
Structure is documented below.
*/
  nluSettings?: diagflow_CxFlowNluSettings;

  /*
The agent to create a flow for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  parent?: string;

  /*
A flow's transition route group serve two purposes:
They are responsible for matching the user's first utterances in the flow.
They are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
*/
  transitionRouteGroups?: Array<string>;

  // The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.
  description?: string;

  /*
The language of the following fields in flow:
Flow.event_handlers.trigger_fulfillment.messages
Flow.event_handlers.trigger_fulfillment.conditional_cases
Flow.transition_routes.trigger_fulfillment.messages
Flow.transition_routes.trigger_fulfillment.conditional_cases
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
*/
  languageCode?: string;

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
  transitionRoutes?: Array<diagflow_CxFlowTransitionRoute>;
}
export class CxFlow extends Resource {
  /*
The human-readable name of the flow.


- - -
*/
  public displayName?: string;

  /*
Marks this as the [Default Start Flow](https://cloud.google.com/dialogflow/cx/docs/concept/flow#start) for an agent. When you create an agent, the Default Start Flow is created automatically.
The Default Start Flow cannot be deleted; deleting the `gcp.diagflow.CxFlow` resource does nothing to the underlying GCP resources.

> Avoid having multiple `gcp.diagflow.CxFlow` resources linked to the same agent with `is_default_start_flow = true` because they will compete to control a single Default Start Flow resource in GCP.
*/
  public isDefaultStartFlow?: boolean;

  /*
The language of the following fields in flow:
Flow.event_handlers.trigger_fulfillment.messages
Flow.event_handlers.trigger_fulfillment.conditional_cases
Flow.transition_routes.trigger_fulfillment.messages
Flow.transition_routes.trigger_fulfillment.conditional_cases
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
*/
  public languageCode?: string;

  /*
(Output)
The unique identifier of this event handler.
*/
  public name?: string;

  /*
NLU related settings of the flow.
Structure is documented below.
*/
  public nluSettings?: diagflow_CxFlowNluSettings;

  /*
A flow's transition route group serve two purposes:
They are responsible for matching the user's first utterances in the flow.
They are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
*/
  public transitionRouteGroups?: Array<string>;

  // The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.
  public description?: string;

  /*
A flow's event handlers serve two purposes:
They are responsible for handling events (e.g. no match, webhook errors) in the flow.
They are inherited by every page's [event handlers][Page.event_handlers], which can be used to handle common events regardless of the current page. Event handlers defined in the page have higher priority than those defined in the flow.
Unlike transitionRoutes, these handlers are evaluated on a first-match basis. The first one that matches the event get executed, with the rest being ignored.
Structure is documented below.
*/
  public eventHandlers?: Array<diagflow_CxFlowEventHandler>;

  /*
The agent to create a flow for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  public parent?: string;

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
  public transitionRoutes?: Array<diagflow_CxFlowTransitionRoute>;

  /*
Hierarchical advanced settings for this flow. The settings exposed at the lower level overrides the settings exposed at the higher level.
Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
Structure is documented below.
*/
  public advancedSettings?: diagflow_CxFlowAdvancedSettings;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "nluSettings",
        "NLU related settings of the flow.\nStructure is documented below.",
        diagflow_CxFlowNluSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "advancedSettings",
        "Hierarchical advanced settings for this flow. The settings exposed at the lower level overrides the settings exposed at the higher level.\nHierarchy: Agent->Flow->Page->Fulfillment/Parameter.\nStructure is documented below.",
        diagflow_CxFlowAdvancedSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The human-readable name of the flow.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "eventHandlers",
        "A flow's event handlers serve two purposes:\nThey are responsible for handling events (e.g. no match, webhook errors) in the flow.\nThey are inherited by every page's [event handlers][Page.event_handlers], which can be used to handle common events regardless of the current page. Event handlers defined in the page have higher priority than those defined in the flow.\nUnlike transitionRoutes, these handlers are evaluated on a first-match basis. The first one that matches the event get executed, with the rest being ignored.\nStructure is documented below.",
        diagflow_CxFlowEventHandler_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "isDefaultStartFlow",
        "Marks this as the [Default Start Flow](https://cloud.google.com/dialogflow/cx/docs/concept/flow#start) for an agent. When you create an agent, the Default Start Flow is created automatically.\nThe Default Start Flow cannot be deleted; deleting the `gcp.diagflow.CxFlow` resource does nothing to the underlying GCP resources.\n\n> Avoid having multiple `gcp.diagflow.CxFlow` resources linked to the same agent with `is_default_start_flow = true` because they will compete to control a single Default Start Flow resource in GCP.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The agent to create a flow for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "transitionRouteGroups",
        "A flow's transition route group serve two purposes:\nThey are responsible for matching the user's first utterances in the flow.\nThey are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.\nFormat:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "languageCode",
        "The language of the following fields in flow:\nFlow.event_handlers.trigger_fulfillment.messages\nFlow.event_handlers.trigger_fulfillment.conditional_cases\nFlow.transition_routes.trigger_fulfillment.messages\nFlow.transition_routes.trigger_fulfillment.conditional_cases\nIf not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "transitionRoutes",
        'A flow\'s transition routes serve two purposes:\nThey are responsible for matching the user\'s first utterances in the flow.\nThey are inherited by every page\'s [transition routes][Page.transition_routes] and can support use cases such as the user saying "help" or "can I talk to a human?", which can be handled in a common way regardless of the current page. Transition routes defined in the page have higher priority than those defined in the flow.\nTransitionRoutes are evalauted in the following order:\nTransitionRoutes with intent specified.\nTransitionRoutes with only condition specified.\nTransitionRoutes with intent specified are inherited by pages in the flow.\nStructure is documented below.',
        diagflow_CxFlowTransitionRoute_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
