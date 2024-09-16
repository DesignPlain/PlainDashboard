import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting,
  lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting_GetTypes,
} from './lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting';

export interface lex_V2modelsSlotSubSlotSettingSlotSpecification {
  //
  mapBlockKey?: string;

  // Unique identifier for the slot type associated with this slot.
  slotTypeId?: string;

  /*
Prompts that Amazon Lex sends to the user to elicit a response that provides the value for the slot.

The following arguments are optional:
*/
  valueElicitationSettings?: Array<lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting>;
}

export function lex_V2modelsSlotSubSlotSettingSlotSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'mapBlockKey',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'slotTypeId',
      'Unique identifier for the slot type associated with this slot.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'valueElicitationSettings',
      'Prompts that Amazon Lex sends to the user to elicit a response that provides the value for the slot.\n\nThe following arguments are optional:',
      () =>
        lex_V2modelsSlotSubSlotSettingSlotSpecificationValueElicitationSetting_GetTypes(),
      false,
      false,
    ),
  ];
}
