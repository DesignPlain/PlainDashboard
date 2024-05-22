import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification {
  //
  endTimeoutMs?: number;

  //
  maxLengthMs?: number;
}

export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "endTimeoutMs", "", [], true, false),
    new DynamicUIProps(InputType.Number, "maxLengthMs", "", [], true, false),
  ];
}
