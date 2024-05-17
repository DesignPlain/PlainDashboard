import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxAgentTextToSpeechSettings,
  Diagflow_CxAgentTextToSpeechSettings_GetTypes,
} from "../types/Diagflow_CxAgentTextToSpeechSettings";
import {
  Diagflow_CxAgentSpeechToTextSettings,
  Diagflow_CxAgentSpeechToTextSettings_GetTypes,
} from "../types/Diagflow_CxAgentSpeechToTextSettings";
import {
  Diagflow_CxAgentGitIntegrationSettings,
  Diagflow_CxAgentGitIntegrationSettings_GetTypes,
} from "../types/Diagflow_CxAgentGitIntegrationSettings";
import {
  Diagflow_CxAgentAdvancedSettings,
  Diagflow_CxAgentAdvancedSettings_GetTypes,
} from "../types/Diagflow_CxAgentAdvancedSettings";

export interface CxAgentArgs {
  /*
Settings related to speech synthesizing.
Structure is documented below.
*/
  TextToSpeechSettings?: Diagflow_CxAgentTextToSpeechSettings;

  /*
Settings related to speech recognition.
Structure is documented below.
*/
  SpeechToTextSettings?: Diagflow_CxAgentSpeechToTextSettings;

  // The list of all languages supported by this agent (except for the default_language_code).
  SupportedLanguageCodes?: Array<string>;

  // Indicates if automatic spell correction is enabled in detect intent requests.
  EnableSpellCorrection?: boolean;

  // Determines whether this agent should log conversation queries.
  EnableStackdriverLogging?: boolean;

  // Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  SecuritySettings?: string;

  /*
The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.
*/
  DefaultLanguageCode?: string;

  // The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.
  AvatarUri?: string;

  // The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
  Description?: string;

  // The human-readable name of the agent, unique within the location.
  DisplayName?: string;

  /*
Git integration settings for this agent.
Structure is documented below.
*/
  GitIntegrationSettings?: Diagflow_CxAgentGitIntegrationSettings;

  /*
The name of the location this agent is located in.
> --Note:-- The first time you are deploying an Agent in your project you must configure location settings.
This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
Another options is to use global location so you don't need to manually configure location settings.
*/
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,
Europe/Paris.


- - -
*/
  TimeZone?: string;

  /*
Hierarchical advanced settings for this agent. The settings exposed at the lower level overrides the settings exposed at the higher level.
Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
Structure is documented below.
*/
  AdvancedSettings?: Diagflow_CxAgentAdvancedSettings;
}
export class CxAgent extends Resource {
  // The list of all languages supported by this agent (except for the default_language_code).
  public SupportedLanguageCodes?: Array<string>;

  /*
The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,
Europe/Paris.


- - -
*/
  public TimeZone?: string;

  /*
Git integration settings for this agent.
Structure is documented below.
*/
  public GitIntegrationSettings?: Diagflow_CxAgentGitIntegrationSettings;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  public SecuritySettings?: string;

  // Name of the start flow in this agent. A start flow will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  public StartFlow?: string;

  /*
The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.
*/
  public DefaultLanguageCode?: string;

  // The human-readable name of the agent, unique within the location.
  public DisplayName?: string;

  // Determines whether this agent should log conversation queries.
  public EnableStackdriverLogging?: boolean;

  // The unique identifier of the agent.
  public Name?: string;

  // The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
  public Description?: string;

  // Indicates if automatic spell correction is enabled in detect intent requests.
  public EnableSpellCorrection?: boolean;

  /*
The name of the location this agent is located in.
> --Note:-- The first time you are deploying an Agent in your project you must configure location settings.
This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
Another options is to use global location so you don't need to manually configure location settings.
*/
  public Location?: string;

  /*
Settings related to speech recognition.
Structure is documented below.
*/
  public SpeechToTextSettings?: Diagflow_CxAgentSpeechToTextSettings;

  /*
Settings related to speech synthesizing.
Structure is documented below.
*/
  public TextToSpeechSettings?: Diagflow_CxAgentTextToSpeechSettings;

  /*
Hierarchical advanced settings for this agent. The settings exposed at the lower level overrides the settings exposed at the higher level.
Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
Structure is documented below.
*/
  public AdvancedSettings?: Diagflow_CxAgentAdvancedSettings;

  // The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.
  public AvatarUri?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AvatarUri",
        "The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableStackdriverLogging",
        "Determines whether this agent should log conversation queries.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DefaultLanguageCode",
        "The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)\nfor a list of the currently supported language codes. This field cannot be updated after creation.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AdvancedSettings",
        "Hierarchical advanced settings for this agent. The settings exposed at the lower level overrides the settings exposed at the higher level.\nHierarchy: Agent->Flow->Page->Fulfillment/Parameter.\nStructure is documented below.",
        Diagflow_CxAgentAdvancedSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SpeechToTextSettings",
        "Settings related to speech recognition.\nStructure is documented below.",
        Diagflow_CxAgentSpeechToTextSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableSpellCorrection",
        "Indicates if automatic spell correction is enabled in detect intent requests.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "SecuritySettings",
        "Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location this agent is located in.\n> **Note:** The first time you are deploying an Agent in your project you must configure location settings.\nThis is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.\nAnother options is to use global location so you don't need to manually configure location settings.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "TimeZone",
        "The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,\nEurope/Paris.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "TextToSpeechSettings",
        "Settings related to speech synthesizing.\nStructure is documented below.",
        Diagflow_CxAgentTextToSpeechSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "SupportedLanguageCodes",
        "The list of all languages supported by this agent (except for the default_language_code).",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The human-readable name of the agent, unique within the location.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GitIntegrationSettings",
        "Git integration settings for this agent.\nStructure is documented below.",
        Diagflow_CxAgentGitIntegrationSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
