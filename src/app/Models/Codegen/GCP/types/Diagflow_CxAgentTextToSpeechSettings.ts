import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface diagflow_CxAgentTextToSpeechSettings {
  /*
Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig).
These settings affect:
- The phone gateway synthesize configuration set via Agent.text_to_speech_settings.
- How speech is synthesized when invoking session APIs. `Agent.text_to_speech_settings` only applies if `OutputAudioConfig.synthesize_speech_config` is not specified.
*/
  synthesizeSpeechConfigs?: string;
}

export function diagflow_CxAgentTextToSpeechSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "synthesizeSpeechConfigs",
      "Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig).\nThese settings affect:\n* The phone gateway synthesize configuration set via Agent.text_to_speech_settings.\n* How speech is synthesized when invoking session APIs. `Agent.text_to_speech_settings` only applies if `OutputAudioConfig.synthesize_speech_config` is not specified.",
      [],
      false,
      false,
    ),
  ];
}
