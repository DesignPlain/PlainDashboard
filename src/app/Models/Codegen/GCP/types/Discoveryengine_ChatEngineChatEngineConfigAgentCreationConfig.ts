import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface discoveryengine_ChatEngineChatEngineConfigAgentCreationConfig {
  /*
Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine.

- - -
*/
  location?: string;

  // The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.
  timeZone?: string;

  // Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search.
  business?: string;

  // The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
  defaultLanguageCode?: string;
}

export function discoveryengine_ChatEngineChatEngineConfigAgentCreationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "location",
      "Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine.\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeZone",
      "The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "business",
      "Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultLanguageCode",
      "The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.",
      [],
      true,
      false,
    ),
  ];
}
