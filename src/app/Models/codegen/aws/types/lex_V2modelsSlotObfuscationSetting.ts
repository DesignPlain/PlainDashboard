import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lex_V2modelsSlotObfuscationSetting {
  // Whether Amazon Lex obscures slot values in conversation logs. Valid values are `DefaultObfuscation` and `None`.
  obfuscationSettingType?: string;
}

export function lex_V2modelsSlotObfuscationSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'obfuscationSettingType',
      'Whether Amazon Lex obscures slot values in conversation logs. Valid values are `DefaultObfuscation` and `None`.',
      () => [],
      true,
      false,
    ),
  ];
}
