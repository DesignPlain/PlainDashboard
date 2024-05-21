import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  diagflow_IntentFollowupIntentInfo,
  diagflow_IntentFollowupIntentInfo_GetTypes,
} from "../types/diagflow_IntentFollowupIntentInfo";

export interface IntentArgs {
  /*
The list of context names required for this intent to be triggered.
Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.
*/
  inputContextNames?: Array<string>;

  /*
Indicates whether Machine Learning is disabled for the intent.
Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off.
*/
  mlDisabled?: boolean;

  /*
The unique identifier of the parent intent in the chain of followup intents.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
*/
  parentFollowupIntentName?: string;

  /*
The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED
(i.e. default platform).
Each value may be one of: `FACEBOOK`, `SLACK`, `TELEGRAM`, `KIK`, `SKYPE`, `LINE`, `VIBER`, `ACTIONS_ON_GOOGLE`, `GOOGLE_HANGOUTS`.
*/
  defaultResponsePlatforms?: Array<string>;

  /*
The name of this intent to be displayed on the console.


- - -
*/
  displayName?: string;

  // Indicates whether this is a fallback intent.
  isFallback?: boolean;

  /*
The priority of this intent. Higher numbers represent higher priorities.
- If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
to the Normal priority in the console.
- If the supplied value is negative, the intent is ignored in runtime detect intent requests.
*/
  priority?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Indicates whether to delete all contexts in the current session when this intent is matched.
  resetContexts?: boolean;

  /*
Indicates whether webhooks are enabled for the intent.
- WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
- WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
filling prompt is forwarded to the webhook.
Possible values are: `WEBHOOK_STATE_ENABLED`, `WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING`.
*/
  webhookState?: string;

  /*
The name of the action associated with the intent.
Note: The action name must not contain whitespaces.
*/
  action?: string;

  /*
The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.
*/
  events?: Array<string>;
}
export class Intent extends Resource {
  /*
The name of the action associated with the intent.
Note: The action name must not contain whitespaces.
*/
  public action?: string;

  /*
Information about all followup intents that have this intent as a direct or indirect parent. We populate this field
only in the output.
Structure is documented below.
*/
  public followupIntentInfos?: Array<diagflow_IntentFollowupIntentInfo>;

  /*
The list of context names required for this intent to be triggered.
Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.
*/
  public inputContextNames?: Array<string>;

  /*
The priority of this intent. Higher numbers represent higher priorities.
- If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
to the Normal priority in the console.
- If the supplied value is negative, the intent is ignored in runtime detect intent requests.
*/
  public priority?: number;

  /*
Indicates whether webhooks are enabled for the intent.
- WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
- WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
filling prompt is forwarded to the webhook.
Possible values are: `WEBHOOK_STATE_ENABLED`, `WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING`.
*/
  public webhookState?: string;

  /*
The name of this intent to be displayed on the console.


- - -
*/
  public displayName?: string;

  /*
The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.
*/
  public events?: Array<string>;

  // Indicates whether this is a fallback intent.
  public isFallback?: boolean;

  /*
Indicates whether Machine Learning is disabled for the intent.
Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off.
*/
  public mlDisabled?: boolean;

  /*
The unique identifier of this intent.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
*/
  public name?: string;

  /*
The unique identifier of the parent intent in the chain of followup intents.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
*/
  public parentFollowupIntentName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Indicates whether to delete all contexts in the current session when this intent is matched.
  public resetContexts?: boolean;

  /*
The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup
intents chain for this intent.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
*/
  public rootFollowupIntentName?: string;

  /*
The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED
(i.e. default platform).
Each value may be one of: `FACEBOOK`, `SLACK`, `TELEGRAM`, `KIK`, `SKYPE`, `LINE`, `VIBER`, `ACTIONS_ON_GOOGLE`, `GOOGLE_HANGOUTS`.
*/
  public defaultResponsePlatforms?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "parentFollowupIntentName",
        "The unique identifier of the parent intent in the chain of followup intents.\nFormat: projects/<Project ID>/agent/intents/<Intent ID>.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The name of this intent to be displayed on the console.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "isFallback",
        "Indicates whether this is a fallback intent.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "resetContexts",
        "Indicates whether to delete all contexts in the current session when this intent is matched.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "action",
        "The name of the action associated with the intent.\nNote: The action name must not contain whitespaces.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "inputContextNames",
        "The list of context names required for this intent to be triggered.\nFormat: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "defaultResponsePlatforms",
        "The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED\n(i.e. default platform).\nEach value may be one of: `FACEBOOK`, `SLACK`, `TELEGRAM`, `KIK`, `SKYPE`, `LINE`, `VIBER`, `ACTIONS_ON_GOOGLE`, `GOOGLE_HANGOUTS`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "The priority of this intent. Higher numbers represent higher priorities.\n- If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds\nto the Normal priority in the console.\n- If the supplied value is negative, the intent is ignored in runtime detect intent requests.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "webhookState",
        "Indicates whether webhooks are enabled for the intent.\n* WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.\n* WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot\nfilling prompt is forwarded to the webhook.\nPossible values are: `WEBHOOK_STATE_ENABLED`, `WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "events",
        "The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of\nthe contexts must be present in the active user session for an event to trigger this intent. See the\n[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "mlDisabled",
        "Indicates whether Machine Learning is disabled for the intent.\nNote: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML\nONLY match mode. Also, auto-markup in the UI is turned off.",
        [],
        false,
        false,
      ),
    ];
  }
}
