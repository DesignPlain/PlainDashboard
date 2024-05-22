import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lex_V2modelsIntentSampleUtterance {
  // Sample utterance that Amazon Lex uses to build its machine-learning model to recognize intents.
  utterance?: string;
}

export function lex_V2modelsIntentSampleUtterance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "utterance",
      "Sample utterance that Amazon Lex uses to build its machine-learning model to recognize intents.",
      [],
      true,
      false,
    ),
  ];
}
