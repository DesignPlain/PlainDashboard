import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsSlotTypeCompositeSlotTypeSettingSubSlot,
  lex_V2modelsSlotTypeCompositeSlotTypeSettingSubSlot_GetTypes,
} from './lex_V2modelsSlotTypeCompositeSlotTypeSettingSubSlot';

export interface lex_V2modelsSlotTypeCompositeSlotTypeSetting {
  // Subslots in the composite slot. Contains filtered or unexported fields. See [`sub_slot_type_composition` argument reference] below.
  subSlots?: Array<lex_V2modelsSlotTypeCompositeSlotTypeSettingSubSlot>;
}

export function lex_V2modelsSlotTypeCompositeSlotTypeSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'subSlots',
      'Subslots in the composite slot. Contains filtered or unexported fields. See [`sub_slot_type_composition` argument reference] below.',
      () => lex_V2modelsSlotTypeCompositeSlotTypeSettingSubSlot_GetTypes(),
      true,
      false,
    ),
  ];
}
