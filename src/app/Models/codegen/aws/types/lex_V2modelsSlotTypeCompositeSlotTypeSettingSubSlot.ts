import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lex_V2modelsSlotTypeCompositeSlotTypeSettingSubSlot {
  /*
Name of the slot type

The following arguments are optional:
*/
  name?: string;

  //
  subSlotId?: string;
}

export function lex_V2modelsSlotTypeCompositeSlotTypeSettingSubSlot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the slot type\n\nThe following arguments are optional:',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'subSlotId',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
