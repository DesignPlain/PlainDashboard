import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxAgentSpeechToTextSettings {
  // Whether to use speech adaptation for speech recognition.
  EnableSpeechAdaptation?: boolean;
}

export function Diagflow_CxAgentSpeechToTextSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableSpeechAdaptation",
      "Whether to use speech adaptation for speech recognition.",
      [],
      false,
      false,
    ),
  ];
}
