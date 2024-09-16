import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface connect_getQuickConnectQuickConnectConfigPhoneConfig {
  // Phone number in in E.164 format.
  phoneNumber?: string;
}

export function connect_getQuickConnectQuickConnectConfigPhoneConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'phoneNumber',
      'Phone number in in E.164 format.',
      () => [],
      true,
      false,
    ),
  ];
}
