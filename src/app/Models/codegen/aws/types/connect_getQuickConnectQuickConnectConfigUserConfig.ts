import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface connect_getQuickConnectQuickConnectConfigUserConfig {
  // Identifier of the contact flow.
  contactFlowId?: string;

  // Identifier for the user.
  userId?: string;
}

export function connect_getQuickConnectQuickConnectConfigUserConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'contactFlowId',
      'Identifier of the contact flow.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'userId',
      'Identifier for the user.',
      () => [],
      true,
      false,
    ),
  ];
}
