import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification";
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification";
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes";

export interface lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification {
  //
  allowInterrupt?: boolean;

  //
  allowedInputTypes?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes;

  //
  audioAndDtmfInputSpecification?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification;

  //
  mapBlockKey?: string;

  //
  textInputSpecification?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification;
}

export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowInterrupt",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allowedInputTypes",
      "",
      () =>
        lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "audioAndDtmfInputSpecification",
      "",
      () =>
        lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mapBlockKey",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "textInputSpecification",
      "",
      () =>
        lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification_GetTypes(),
      false,
      false,
    ),
  ];
}
