import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  diagflow_CxAgentTextToSpeechSettings,
  diagflow_CxAgentTextToSpeechSettings_GetTypes,
} from "../types/diagflow_CxAgentTextToSpeechSettings";
import {
  diagflow_CxAgentSpeechToTextSettings,
  diagflow_CxAgentSpeechToTextSettings_GetTypes,
} from "../types/diagflow_CxAgentSpeechToTextSettings";
import {
  diagflow_CxAgentAdvancedSettings,
  diagflow_CxAgentAdvancedSettings_GetTypes,
} from "../types/diagflow_CxAgentAdvancedSettings";
import {
  diagflow_CxAgentGitIntegrationSettings,
  diagflow_CxAgentGitIntegrationSettings_GetTypes,
} from "../types/diagflow_CxAgentGitIntegrationSettings";

export interface CxAgentArgs {
  // The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
  description?: string;

  // The human-readable name of the agent, unique within the location.
  displayName?: string;

  // Indicates if automatic spell correction is enabled in detect intent requests.
  enableSpellCorrection?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The list of all languages supported by this agent (except for the default_language_code).
  supportedLanguageCodes?: Array<string>;

  /*
Settings related to speech synthesizing.
Structure is documented below.
*/
  textToSpeechSettings?: diagflow_CxAgentTextToSpeechSettings;

  /*
The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.
*/
  defaultLanguageCode?: string;

  // Determines whether this agent should log conversation queries.
  enableStackdriverLogging?: boolean;

  /*
The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,
Europe/Paris.


- - -
*/
  timeZone?: string;

  /*
The name of the location this agent is located in.
> --Note:-- The first time you are deploying an Agent in your project you must configure location settings.
This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
Another options is to use global location so you don't need to manually configure location settings.
*/
  location?: string;

  /*
Settings related to speech recognition.
Structure is documented below.
*/
  speechToTextSettings?: diagflow_CxAgentSpeechToTextSettings;

  /*
Hierarchical advanced settings for this agent. The settings exposed at the lower level overrides the settings exposed at the higher level.
Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
Structure is documented below.
*/
  advancedSettings?: diagflow_CxAgentAdvancedSettings;

  // The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.
  avatarUri?: string;

  /*
Git integration settings for this agent.
Structure is documented below.
*/
  gitIntegrationSettings?: diagflow_CxAgentGitIntegrationSettings;

  // Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  securitySettings?: string;
}
export class CxAgent extends Resource {
  /*
The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.
*/
  public defaultLanguageCode?: string;

  /*
Settings related to speech recognition.
Structure is documented below.
*/
  public speechToTextSettings?: diagflow_CxAgentSpeechToTextSettings;

  // The list of all languages supported by this agent (except for the default_language_code).
  public supportedLanguageCodes?: Array<string>;

  /*
The name of the location this agent is located in.
> --Note:-- The first time you are deploying an Agent in your project you must configure location settings.
This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
Another options is to use global location so you don't need to manually configure location settings.
*/
  public location?: string;

  /*
Hierarchical advanced settings for this agent. The settings exposed at the lower level overrides the settings exposed at the higher level.
Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
Structure is documented below.
*/
  public advancedSettings?: diagflow_CxAgentAdvancedSettings;

  // The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
  public description?: string;

  // Determines whether this agent should log conversation queries.
  public enableStackdriverLogging?: boolean;

  /*
Git integration settings for this agent.
Structure is documented below.
*/
  public gitIntegrationSettings?: diagflow_CxAgentGitIntegrationSettings;

  /*
The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,
Europe/Paris.


- - -
*/
  public timeZone?: string;

  // The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.
  public avatarUri?: string;

  // Indicates if automatic spell correction is enabled in detect intent requests.
  public enableSpellCorrection?: boolean;

  // Name of the start flow in this agent. A start flow will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  public startFlow?: string;

  /*
Settings related to speech synthesizing.
Structure is documented below.
*/
  public textToSpeechSettings?: diagflow_CxAgentTextToSpeechSettings;

  // The human-readable name of the agent, unique within the location.
  public displayName?: string;

  // The unique identifier of the agent.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  public securitySettings?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enableSpellCorrection",
        "Indicates if automatic spell correction is enabled in detect intent requests.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "textToSpeechSettings",
        "Settings related to speech synthesizing.\nStructure is documented below.",
        diagflow_CxAgentTextToSpeechSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "avatarUri",
        "The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "supportedLanguageCodes",
        "The list of all languages supported by this agent (except for the default_language_code).",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "timeZone",
        "The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,\nEurope/Paris.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The name of the location this agent is located in.\n> **Note:** The first time you are deploying an Agent in your project you must configure location settings.\nThis is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.\nAnother options is to use global location so you don't need to manually configure location settings.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The human-readable name of the agent, unique within the location.",
        [],
        true,
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
        InputType.Object,
        "speechToTextSettings",
        "Settings related to speech recognition.\nStructure is documented below.",
        diagflow_CxAgentSpeechToTextSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "advancedSettings",
        "Hierarchical advanced settings for this agent. The settings exposed at the lower level overrides the settings exposed at the higher level.\nHierarchy: Agent->Flow->Page->Fulfillment/Parameter.\nStructure is documented below.",
        diagflow_CxAgentAdvancedSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "securitySettings",
        "Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultLanguageCode",
        "The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)\nfor a list of the currently supported language codes. This field cannot be updated after creation.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableStackdriverLogging",
        "Determines whether this agent should log conversation queries.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "gitIntegrationSettings",
        "Git integration settings for this agent.\nStructure is documented below.",
        diagflow_CxAgentGitIntegrationSettings_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
