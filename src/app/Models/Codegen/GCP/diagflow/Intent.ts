import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { IntentFollowupIntentInfo } from "../types/IntentFollowupIntentInfo";

export interface IntentArgs {
  /*
The priority of this intent. Higher numbers represent higher priorities.
- If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
to the Normal priority in the console.
- If the supplied value is negative, the intent is ignored in runtime detect intent requests.
*/
  Priority?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The name of the action associated with the intent.
Note: The action name must not contain whitespaces.
*/
  Action?: string;

  /*
The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.
*/
  Events?: Array<string>;

  /*
The list of context names required for this intent to be triggered.
Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.
*/
  InputContextNames?: Array<string>;

  // Indicates whether this is a fallback intent.
  IsFallback?: boolean;

  // Indicates whether to delete all contexts in the current session when this intent is matched.
  ResetContexts?: boolean;

  /*
Indicates whether webhooks are enabled for the intent.
- WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
- WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
filling prompt is forwarded to the webhook.
Possible values are: `WEBHOOK_STATE_ENABLED`, `WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING`.
*/
  WebhookState?: string;

  /*
The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED
(i.e. default platform).
Each value may be one of: `FACEBOOK`, `SLACK`, `TELEGRAM`, `KIK`, `SKYPE`, `LINE`, `VIBER`, `ACTIONS_ON_GOOGLE`, `GOOGLE_HANGOUTS`.
*/
  DefaultResponsePlatforms?: Array<string>;

  /*
The name of this intent to be displayed on the console.


- - -
*/
  DisplayName?: string;

  /*
Indicates whether Machine Learning is disabled for the intent.
Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off.
*/
  MlDisabled?: boolean;

  /*
The unique identifier of the parent intent in the chain of followup intents.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
*/
  ParentFollowupIntentName?: string;
}
export class Intent extends Resource {
  /*
The name of the action associated with the intent.
Note: The action name must not contain whitespaces.
*/
  public Action?: string;

  /*
The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED
(i.e. default platform).
Each value may be one of: `FACEBOOK`, `SLACK`, `TELEGRAM`, `KIK`, `SKYPE`, `LINE`, `VIBER`, `ACTIONS_ON_GOOGLE`, `GOOGLE_HANGOUTS`.
*/
  public DefaultResponsePlatforms?: Array<string>;

  /*
The name of this intent to be displayed on the console.


- - -
*/
  public DisplayName?: string;

  /*
Information about all followup intents that have this intent as a direct or indirect parent. We populate this field
only in the output.
Structure is documented below.
*/
  public FollowupIntentInfos?: Array<IntentFollowupIntentInfo>;

  // Indicates whether this is a fallback intent.
  public IsFallback?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Indicates whether to delete all contexts in the current session when this intent is matched.
  public ResetContexts?: boolean;

  /*
The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup
intents chain for this intent.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
*/
  public RootFollowupIntentName?: string;

  /*
Indicates whether webhooks are enabled for the intent.
- WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
- WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
filling prompt is forwarded to the webhook.
Possible values are: `WEBHOOK_STATE_ENABLED`, `WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING`.
*/
  public WebhookState?: string;

  /*
The list of context names required for this intent to be triggered.
Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.
*/
  public InputContextNames?: Array<string>;

  /*
Indicates whether Machine Learning is disabled for the intent.
Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off.
*/
  public MlDisabled?: boolean;

  /*
The unique identifier of this intent.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
*/
  public Name?: string;

  /*
The unique identifier of the parent intent in the chain of followup intents.
Format: projects/<Project ID>/agent/intents/<Intent ID>.
*/
  public ParentFollowupIntentName?: string;

  /*
The priority of this intent. Higher numbers represent higher priorities.
- If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
to the Normal priority in the console.
- If the supplied value is negative, the intent is ignored in runtime detect intent requests.
*/
  public Priority?: number;

  /*
The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.
*/
  public Events?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Action",
        "The name of the action associated with the intent.\nNote: The action name must not contain whitespaces.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "InputContextNames",
        "The list of context names required for this intent to be triggered.\nFormat: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ResetContexts",
        "Indicates whether to delete all contexts in the current session when this intent is matched.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "MlDisabled",
        "Indicates whether Machine Learning is disabled for the intent.\nNote: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML\nONLY match mode. Also, auto-markup in the UI is turned off.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ParentFollowupIntentName",
        "The unique identifier of the parent intent in the chain of followup intents.\nFormat: projects/<Project ID>/agent/intents/<Intent ID>.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "The priority of this intent. Higher numbers represent higher priorities.\n- If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds\nto the Normal priority in the console.\n- If the supplied value is negative, the intent is ignored in runtime detect intent requests.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Events",
        "The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of\nthe contexts must be present in the active user session for an event to trigger this intent. See the\n[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "IsFallback",
        "Indicates whether this is a fallback intent.",
      ),
      new DynamicUIProps(
        InputType.String,
        "WebhookState",
        "Indicates whether webhooks are enabled for the intent.\n* WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.\n* WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot\nfilling prompt is forwarded to the webhook.\nPossible values are: `WEBHOOK_STATE_ENABLED`, `WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING`.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "DefaultResponsePlatforms",
        "The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED\n(i.e. default platform).\nEach value may be one of: `FACEBOOK`, `SLACK`, `TELEGRAM`, `KIK`, `SKYPE`, `LINE`, `VIBER`, `ACTIONS_ON_GOOGLE`, `GOOGLE_HANGOUTS`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The name of this intent to be displayed on the console.\n\n\n- - -",
      ),
    ];
  }
}
