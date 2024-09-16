import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sesv2_ConfigurationSetSendingOptions {
  // If `true`, email sending is enabled for the configuration set. If `false`, email sending is disabled for the configuration set.
  sendingEnabled?: boolean;
}

export function sesv2_ConfigurationSetSendingOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'sendingEnabled',
      'If `true`, email sending is enabled for the configuration set. If `false`, email sending is disabled for the configuration set.',
      () => [],
      false,
      false,
    ),
  ];
}
