import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface datazone_GlossaryTermTermRelations {
  // String array that calssifies the term relations.
  classifies?: Array<string>;

  //
  isAs?: Array<string>;
}

export function datazone_GlossaryTermTermRelations_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'classifies',
      'String array that calssifies the term relations.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'isAs',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
