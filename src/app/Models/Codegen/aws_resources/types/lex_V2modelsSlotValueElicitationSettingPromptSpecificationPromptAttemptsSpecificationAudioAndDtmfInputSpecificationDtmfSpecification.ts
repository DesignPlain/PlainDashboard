import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification {
  //
  deletionCharacter?: string;

  //
  endCharacter?: string;

  //
  endTimeoutMs?: number;

  //
  maxLength?: number;
}

export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deletionCharacter",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "endCharacter", "", [], true, false),
    new DynamicUIProps(InputType.Number, "endTimeoutMs", "", [], true, false),
    new DynamicUIProps(InputType.Number, "maxLength", "", [], true, false),
  ];
}
