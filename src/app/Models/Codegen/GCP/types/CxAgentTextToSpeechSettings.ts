export interface CxAgentTextToSpeechSettings {
  /*
Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig).
These settings affect:
- The phone gateway synthesize configuration set via Agent.text_to_speech_settings.
- How speech is synthesized when invoking session APIs. `Agent.text_to_speech_settings` only applies if `OutputAudioConfig.synthesize_speech_config` is not specified.
*/
  SynthesizeSpeechConfigs?: string;
}
