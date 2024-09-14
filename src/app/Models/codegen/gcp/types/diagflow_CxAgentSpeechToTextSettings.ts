import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

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
      () => [],
      false,
      false,
    ),
  ];
}
