import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting,
  lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting_GetTypes,
} from './lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting';

export interface lex_V2modelsSlotTypeExternalSourceSetting {
  // Settings required for a slot type based on a grammar that you provide. See `grammar_slot_type_setting` argument reference below.
  grammarSlotTypeSetting?: lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting;
}

export function lex_V2modelsSlotTypeExternalSourceSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'grammarSlotTypeSetting',
      'Settings required for a slot type based on a grammar that you provide. See `grammar_slot_type_setting` argument reference below.',
      () =>
        lex_V2modelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting_GetTypes(),
      false,
      false,
    ),
  ];
}
