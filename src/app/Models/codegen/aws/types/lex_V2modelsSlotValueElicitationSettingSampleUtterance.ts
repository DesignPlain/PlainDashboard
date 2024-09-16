import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lex_V2modelsSlotValueElicitationSettingSampleUtterance {
  //
  utterance?: string;
}

export function lex_V2modelsSlotValueElicitationSettingSampleUtterance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'utterance',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
