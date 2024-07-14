import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface diagflow_CxAgentSpeechToTextSettings {
  // Whether to use speech adaptation for speech recognition.
  enableSpeechAdaptation?: boolean;
}

export function diagflow_CxAgentSpeechToTextSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableSpeechAdaptation",
      "Whether to use speech adaptation for speech recognition.",
      [],
      false,
      false,
    ),
  ];
}
