import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lex_getSlotTypeEnumerationValue {
  //
  value?: string;

  //
  synonyms?: Array<string>;
}

export function lex_getSlotTypeEnumerationValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'value', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'synonyms',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
