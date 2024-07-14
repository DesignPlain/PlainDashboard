import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource,
  lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource_GetTypes,
} from "./lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource";

export interface lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting {
  // Source of the grammar used to create the slot type. See `grammar_slot_type_source` argument reference below.
  source?: lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource;
}

export function lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "source",
      "Source of the grammar used to create the slot type. See `grammar_slot_type_source` argument reference below.",
      lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource_GetTypes(),
      false,
      false,
    ),
  ];
}
