import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AgentArgs {
  /*
The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.
*/
  defaultLanguageCode?: string;

  // The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
  description?: string;

  // The name of this agent.
  displayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The list of all languages supported by this agent (except for the defaultLanguageCode).
  supportedLanguageCodes?: Array<string>;

  /*
API version displayed in Dialogflow console. If not specified, V2 API is assumed. Clients are free to query
different service endpoints for different API versions. However, bots connectors and webhook calls will follow
the specified API version.
- API_VERSION_V1: Legacy V1 API.
- API_VERSION_V2: V2 API.
- API_VERSION_V2_BETA_1: V2beta1 API.
Possible values are: `API_VERSION_V1`, `API_VERSION_V2`, `API_VERSION_V2_BETA_1`.
*/
  apiVersion?: string;

  /*
To filter out false positive results and still get variety in matched natural language inputs for your agent,
you can tune the machine learning classification threshold. If the returned score value is less than the threshold
value, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be
triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the
default of 0.3 is used.
*/
  classificationThreshold?: number;

  /*
Determines how intents are detected from user queries.
- MATCH_MODE_HYBRID: Best for agents with a small number of examples in intents and/or wide use of templates
syntax and composite entities.
- MATCH_MODE_ML_ONLY: Can be used for agents with a large number of examples in intents, especially the ones
using @sys.any or very large developer entities.
Possible values are: `MATCH_MODE_HYBRID`, `MATCH_MODE_ML_ONLY`.
*/
  matchMode?: string;

  /*
The agent tier. If not specified, TIER_STANDARD is assumed.
- TIER_STANDARD: Standard tier.
- TIER_ENTERPRISE: Enterprise tier (Essentials).
- TIER_ENTERPRISE_PLUS: Enterprise tier (Plus).
NOTE: Due to consistency issues, the provider will not read this field from the API. Drift is possible between
the the provider state and Dialogflow if the agent tier is changed outside of the provider.
*/
  tier?: string;

  /*
The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,
Europe/Paris.


- - -
*/
  timeZone?: string;

  /*
The URI of the agent's avatar, which are used throughout the Dialogflow console. When an image URL is entered
into this field, the Dialogflow will save the image in the backend. The address of the backend image returned
from the API will be shown in the [avatarUriBackend] field.
*/
  avatarUri?: string;

  // Determines whether this agent should log conversation queries.
  enableLogging?: boolean;
}
export class Agent extends Resource {
  /*
The URI of the agent's avatar as returned from the API. Output only. To provide an image URL for the agent avatar,
the [avatarUri] field can be used.
*/
  public avatarUriBackend?: string;

  // The name of this agent.
  public displayName?: string;

  // Determines whether this agent should log conversation queries.
  public enableLogging?: boolean;

  // The list of all languages supported by this agent (except for the defaultLanguageCode).
  public supportedLanguageCodes?: Array<string>;

  /*
The agent tier. If not specified, TIER_STANDARD is assumed.
- TIER_STANDARD: Standard tier.
- TIER_ENTERPRISE: Enterprise tier (Essentials).
- TIER_ENTERPRISE_PLUS: Enterprise tier (Plus).
NOTE: Due to consistency issues, the provider will not read this field from the API. Drift is possible between
the the provider state and Dialogflow if the agent tier is changed outside of the provider.
*/
  public tier?: string;

  /*
The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,
Europe/Paris.


- - -
*/
  public timeZone?: string;

  /*
API version displayed in Dialogflow console. If not specified, V2 API is assumed. Clients are free to query
different service endpoints for different API versions. However, bots connectors and webhook calls will follow
the specified API version.
- API_VERSION_V1: Legacy V1 API.
- API_VERSION_V2: V2 API.
- API_VERSION_V2_BETA_1: V2beta1 API.
Possible values are: `API_VERSION_V1`, `API_VERSION_V2`, `API_VERSION_V2_BETA_1`.
*/
  public apiVersion?: string;

  /*
The URI of the agent's avatar, which are used throughout the Dialogflow console. When an image URL is entered
into this field, the Dialogflow will save the image in the backend. The address of the backend image returned
from the API will be shown in the [avatarUriBackend] field.
*/
  public avatarUri?: string;

  /*
To filter out false positive results and still get variety in matched natural language inputs for your agent,
you can tune the machine learning classification threshold. If the returned score value is less than the threshold
value, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be
triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the
default of 0.3 is used.
*/
  public classificationThreshold?: number;

  /*
The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.
*/
  public defaultLanguageCode?: string;

  // The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
  public description?: string;

  /*
Determines how intents are detected from user queries.
- MATCH_MODE_HYBRID: Best for agents with a small number of examples in intents and/or wide use of templates
syntax and composite entities.
- MATCH_MODE_ML_ONLY: Can be used for agents with a large number of examples in intents, especially the ones
using @sys.any or very large developer entities.
Possible values are: `MATCH_MODE_HYBRID`, `MATCH_MODE_ML_ONLY`.
*/
  public matchMode?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "classificationThreshold",
        "To filter out false positive results and still get variety in matched natural language inputs for your agent,\nyou can tune the machine learning classification threshold. If the returned score value is less than the threshold\nvalue, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be\ntriggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the\ndefault of 0.3 is used.",
        [],
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
        "defaultLanguageCode",
        "The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/docs/reference/language)\nfor a list of the currently supported language codes. This field cannot be updated after creation.",
        [],
        true,
        true,
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
        InputType.String,
        "displayName",
        "The name of this agent.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "supportedLanguageCodes",
        "The list of all languages supported by this agent (except for the defaultLanguageCode).",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiVersion",
        "API version displayed in Dialogflow console. If not specified, V2 API is assumed. Clients are free to query\ndifferent service endpoints for different API versions. However, bots connectors and webhook calls will follow\nthe specified API version.\n* API_VERSION_V1: Legacy V1 API.\n* API_VERSION_V2: V2 API.\n* API_VERSION_V2_BETA_1: V2beta1 API.\nPossible values are: `API_VERSION_V1`, `API_VERSION_V2`, `API_VERSION_V2_BETA_1`.",
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
        InputType.String,
        "matchMode",
        "Determines how intents are detected from user queries.\n* MATCH_MODE_HYBRID: Best for agents with a small number of examples in intents and/or wide use of templates\nsyntax and composite entities.\n* MATCH_MODE_ML_ONLY: Can be used for agents with a large number of examples in intents, especially the ones\nusing @sys.any or very large developer entities.\nPossible values are: `MATCH_MODE_HYBRID`, `MATCH_MODE_ML_ONLY`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tier",
        "The agent tier. If not specified, TIER_STANDARD is assumed.\n* TIER_STANDARD: Standard tier.\n* TIER_ENTERPRISE: Enterprise tier (Essentials).\n* TIER_ENTERPRISE_PLUS: Enterprise tier (Plus).\nNOTE: Due to consistency issues, the provider will not read this field from the API. Drift is possible between\nthe the provider state and Dialogflow if the agent tier is changed outside of the provider.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "avatarUri",
        "The URI of the agent's avatar, which are used throughout the Dialogflow console. When an image URL is entered\ninto this field, the Dialogflow will save the image in the backend. The address of the backend image returned\nfrom the API will be shown in the [avatarUriBackend] field.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableLogging",
        "Determines whether this agent should log conversation queries.",
        [],
        false,
        false,
      ),
    ];
  }
}
