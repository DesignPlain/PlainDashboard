import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage {
  // SSML text that defines the prompt.
  value?: string;
}

export function lex_V2modelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "SSML text that defines the prompt.",
      () => [],
      true,
      false,
    ),
  ];
}
