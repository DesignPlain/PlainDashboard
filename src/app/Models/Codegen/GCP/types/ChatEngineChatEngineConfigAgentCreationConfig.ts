export interface ChatEngineChatEngineConfigAgentCreationConfig {
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
