import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification {
  //
  endTimeoutMs?: number;

  //
  maxLengthMs?: number;
}

export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "endTimeoutMs",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxLengthMs",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
