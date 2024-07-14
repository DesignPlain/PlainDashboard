import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface connect_QuickConnectQuickConnectConfigPhoneConfig {
  // Specifies the phone number in in E.164 format.
  phoneNumber?: string;
}

export function connect_QuickConnectQuickConnectConfigPhoneConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "phoneNumber",
      "Specifies the phone number in in E.164 format.",
      [],
      true,
      false,
    ),
  ];
}
