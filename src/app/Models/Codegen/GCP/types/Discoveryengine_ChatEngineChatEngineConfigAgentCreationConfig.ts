import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Discoveryengine_ChatEngineChatEngineConfigAgentCreationConfig {
  // Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search.
  Business?: string;

  // The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
  DefaultLanguageCode?: string;

  /*
Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine.

- - -
*/
  Location?: string;

  // The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.
  TimeZone?: string;
}

export function Discoveryengine_ChatEngineChatEngineConfigAgentCreationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DefaultLanguageCode",
      "The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      "Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine.\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TimeZone",
      "The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Business",
      "Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search.",
      [],
      false,
      false,
    ),
  ];
}
