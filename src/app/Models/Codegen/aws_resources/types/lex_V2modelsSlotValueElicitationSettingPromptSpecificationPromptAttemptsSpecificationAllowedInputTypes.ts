import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes {
  //
  allowAudioInput?: boolean;

  //
  allowDtmfInput?: boolean;
}

export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "allowAudioInput", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "allowDtmfInput", "", [], true, false),
  ];
}
