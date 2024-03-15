import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AgentArgs {
  /*
The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,
Europe/Paris.


- - -
*/
  TimeZone?: string;

  /*
API version displayed in Dialogflow console. If not specified, V2 API is assumed. Clients are free to query
different service endpoints for different API versions. However, bots connectors and webhook calls will follow
the specified API version.
- API_VERSION_V1: Legacy V1 API.
- API_VERSION_V2: V2 API.
- API_VERSION_V2_BETA_1: V2beta1 API.
Possible values are: `API_VERSION_V1`, `API_VERSION_V2`, `API_VERSION_V2_BETA_1`.
*/
  ApiVersion?: string;

  /*
The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.
*/
  DefaultLanguageCode?: string;

  // The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
  Description?: string;

  // Determines whether this agent should log conversation queries.
  EnableLogging?: boolean;

  /*
Determines how intents are detected from user queries.
- MATCH_MODE_HYBRID: Best for agents with a small number of examples in intents and/or wide use of templates
syntax and composite entities.
- MATCH_MODE_ML_ONLY: Can be used for agents with a large number of examples in intents, especially the ones
using @sys.any or very large developer entities.
Possible values are: `MATCH_MODE_HYBRID`, `MATCH_MODE_ML_ONLY`.
*/
  MatchMode?: string;

  // The list of all languages supported by this agent (except for the defaultLanguageCode).
  SupportedLanguageCodes?: Array<string>;

  /*
The URI of the agent's avatar, which are used throughout the Dialogflow console. When an image URL is entered
into this field, the Dialogflow will save the image in the backend. The address of the backend image returned
from the API will be shown in the [avatarUriBackend] field.
*/
  AvatarUri?: string;

  /*
To filter out false positive results and still get variety in matched natural language inputs for your agent,
you can tune the machine learning classification threshold. If the returned score value is less than the threshold
value, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be
triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the
default of 0.3 is used.
*/
  ClassificationThreshold?: number;

  // The name of this agent.
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The agent tier. If not specified, TIER_STANDARD is assumed.
- TIER_STANDARD: Standard tier.
- TIER_ENTERPRISE: Enterprise tier (Essentials).
- TIER_ENTERPRISE_PLUS: Enterprise tier (Plus).
NOTE: Due to consistency issues, the provider will not read this field from the API. Drift is possible between
the the provider state and Dialogflow if the agent tier is changed outside of the provider.
*/
  Tier?: string;
}
export class Agent extends Resource {
  /*
The URI of the agent's avatar as returned from the API. Output only. To provide an image URL for the agent avatar,
the [avatarUri] field can be used.
*/
  public AvatarUriBackend?: string;

  /*
The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.
*/
  public DefaultLanguageCode?: string;

  // The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
  public Description?: string;

  /*
The agent tier. If not specified, TIER_STANDARD is assumed.
- TIER_STANDARD: Standard tier.
- TIER_ENTERPRISE: Enterprise tier (Essentials).
- TIER_ENTERPRISE_PLUS: Enterprise tier (Plus).
NOTE: Due to consistency issues, the provider will not read this field from the API. Drift is possible between
the the provider state and Dialogflow if the agent tier is changed outside of the provider.
*/
  public Tier?: string;

  /*
The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,
Europe/Paris.


- - -
*/
  public TimeZone?: string;

  /*
Determines how intents are detected from user queries.
- MATCH_MODE_HYBRID: Best for agents with a small number of examples in intents and/or wide use of templates
syntax and composite entities.
- MATCH_MODE_ML_ONLY: Can be used for agents with a large number of examples in intents, especially the ones
using @sys.any or very large developer entities.
Possible values are: `MATCH_MODE_HYBRID`, `MATCH_MODE_ML_ONLY`.
*/
  public MatchMode?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The list of all languages supported by this agent (except for the defaultLanguageCode).
  public SupportedLanguageCodes?: Array<string>;

  /*
API version displayed in Dialogflow console. If not specified, V2 API is assumed. Clients are free to query
different service endpoints for different API versions. However, bots connectors and webhook calls will follow
the specified API version.
- API_VERSION_V1: Legacy V1 API.
- API_VERSION_V2: V2 API.
- API_VERSION_V2_BETA_1: V2beta1 API.
Possible values are: `API_VERSION_V1`, `API_VERSION_V2`, `API_VERSION_V2_BETA_1`.
*/
  public ApiVersion?: string;

  /*
The URI of the agent's avatar, which are used throughout the Dialogflow console. When an image URL is entered
into this field, the Dialogflow will save the image in the backend. The address of the backend image returned
from the API will be shown in the [avatarUriBackend] field.
*/
  public AvatarUri?: string;

  /*
To filter out false positive results and still get variety in matched natural language inputs for your agent,
you can tune the machine learning classification threshold. If the returned score value is less than the threshold
value, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be
triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the
default of 0.3 is used.
*/
  public ClassificationThreshold?: number;

  // The name of this agent.
  public DisplayName?: string;

  // Determines whether this agent should log conversation queries.
  public EnableLogging?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DefaultLanguageCode",
        "The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/docs/reference/language)\nfor a list of the currently supported language codes. This field cannot be updated after creation.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AvatarUri",
        "The URI of the agent's avatar, which are used throughout the Dialogflow console. When an image URL is entered\ninto this field, the Dialogflow will save the image in the backend. The address of the backend image returned\nfrom the API will be shown in the [avatarUriBackend] field.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TimeZone",
        "The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,\nEurope/Paris.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableLogging",
        "Determines whether this agent should log conversation queries.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MatchMode",
        "Determines how intents are detected from user queries.\n* MATCH_MODE_HYBRID: Best for agents with a small number of examples in intents and/or wide use of templates\nsyntax and composite entities.\n* MATCH_MODE_ML_ONLY: Can be used for agents with a large number of examples in intents, especially the ones\nusing @sys.any or very large developer entities.\nPossible values are: `MATCH_MODE_HYBRID`, `MATCH_MODE_ML_ONLY`.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "SupportedLanguageCodes",
        "The list of all languages supported by this agent (except for the defaultLanguageCode).",
      ),
      new DynamicUIProps(
        InputType.Number,
        "ClassificationThreshold",
        "To filter out false positive results and still get variety in matched natural language inputs for your agent,\nyou can tune the machine learning classification threshold. If the returned score value is less than the threshold\nvalue, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be\ntriggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the\ndefault of 0.3 is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The name of this agent.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Tier",
        "The agent tier. If not specified, TIER_STANDARD is assumed.\n* TIER_STANDARD: Standard tier.\n* TIER_ENTERPRISE: Enterprise tier (Essentials).\n* TIER_ENTERPRISE_PLUS: Enterprise tier (Plus).\nNOTE: Due to consistency issues, the provider will not read this field from the API. Drift is possible between\nthe the provider state and Dialogflow if the agent tier is changed outside of the provider.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ApiVersion",
        "API version displayed in Dialogflow console. If not specified, V2 API is assumed. Clients are free to query\ndifferent service endpoints for different API versions. However, bots connectors and webhook calls will follow\nthe specified API version.\n* API_VERSION_V1: Legacy V1 API.\n* API_VERSION_V2: V2 API.\n* API_VERSION_V2_BETA_1: V2beta1 API.\nPossible values are: `API_VERSION_V1`, `API_VERSION_V2`, `API_VERSION_V2_BETA_1`.",
      ),
    ];
  }
}
