import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsSlotTypeSlotTypeValuesSampleValue,
  lex_V2modelsSlotTypeSlotTypeValuesSampleValue_GetTypes,
} from './lex_V2modelsSlotTypeSlotTypeValuesSampleValue';
import {
  lex_V2modelsSlotTypeSlotTypeValuesSynonym,
  lex_V2modelsSlotTypeSlotTypeValuesSynonym_GetTypes,
} from './lex_V2modelsSlotTypeSlotTypeValuesSynonym';

export interface lex_V2modelsSlotTypeSlotTypeValues {
  // Value of the slot type entry.  See `sample_value` argument reference below.
  sampleValues?: Array<lex_V2modelsSlotTypeSlotTypeValuesSampleValue>;

  // Additional values related to the slot type entry. See `sample_value` argument reference below.
  synonyms?: Array<lex_V2modelsSlotTypeSlotTypeValuesSynonym>;
}

export function lex_V2modelsSlotTypeSlotTypeValues_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'sampleValues',
      'Value of the slot type entry.  See `sample_value` argument reference below.',
      () => lex_V2modelsSlotTypeSlotTypeValuesSampleValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'synonyms',
      'Additional values related to the slot type entry. See `sample_value` argument reference below.',
      () => lex_V2modelsSlotTypeSlotTypeValuesSynonym_GetTypes(),
      false,
      false,
    ),
  ];
}
