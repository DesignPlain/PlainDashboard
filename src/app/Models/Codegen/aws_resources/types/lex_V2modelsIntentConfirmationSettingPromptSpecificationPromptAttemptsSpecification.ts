import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes";
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification";
import {
  lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification,
  lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification";

export interface lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification {
  // Configuration block for the settings on text input. See `text_input_specification`.
  textInputSpecification?: lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification;

  // Whether the user can interrupt a speech prompt attempt from the bot.
  allowInterrupt?: boolean;

  // Configuration block for the allowed input types of the prompt attempt. See `allowed_input_types`.
  allowedInputTypes?: lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes;

  // Configuration block for settings on audio and DTMF input. See `audio_and_dtmf_input_specification`.
  audioAndDtmfInputSpecification?: lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification;

  // Which attempt to configure. Valid values are `Initial`, `Retry1`, `Retry2`, `Retry3`, `Retry4`, `Retry5`.
  mapBlockKey?: string;
}

export function lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "audioAndDtmfInputSpecification",
      "Configuration block for settings on audio and DTMF input. See `audio_and_dtmf_input_specification`.",
      lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mapBlockKey",
      "Which attempt to configure. Valid values are `Initial`, `Retry1`, `Retry2`, `Retry3`, `Retry4`, `Retry5`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "textInputSpecification",
      "Configuration block for the settings on text input. See `text_input_specification`.",
      lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowInterrupt",
      "Whether the user can interrupt a speech prompt attempt from the bot.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allowedInputTypes",
      "Configuration block for the allowed input types of the prompt attempt. See `allowed_input_types`.",
      lex_V2modelsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes_GetTypes(),
      true,
      false,
    ),
  ];
}
