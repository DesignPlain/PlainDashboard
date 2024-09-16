import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lex_SlotTypeEnumerationValue {
  // Additional values related to the slot type value. Each item must be less than or equal to 140 characters in length.
  synonyms?: Array<string>;

  // The value of the slot type. Must be less than or equal to 140 characters in length.
  value?: string;
}

export function lex_SlotTypeEnumerationValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'synonyms',
      'Additional values related to the slot type value. Each item must be less than or equal to 140 characters in length.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The value of the slot type. Must be less than or equal to 140 characters in length.',
      () => [],
      true,
      false,
    ),
  ];
}
