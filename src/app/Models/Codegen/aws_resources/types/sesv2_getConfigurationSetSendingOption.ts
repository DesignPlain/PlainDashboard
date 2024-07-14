import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sesv2_getConfigurationSetSendingOption {
  // Specifies whether email sending is enabled.
  sendingEnabled?: boolean;
}

export function sesv2_getConfigurationSetSendingOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "sendingEnabled",
      "Specifies whether email sending is enabled.",
      [],
      true,
      false,
    ),
  ];
}
