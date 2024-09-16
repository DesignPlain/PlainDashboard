import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface integrationconnectors_ConnectionLogConfig {
  // Enabled represents whether logging is enabled or not for a connection.
  enabled?: boolean;
}

export function integrationconnectors_ConnectionLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Enabled represents whether logging is enabled or not for a connection.',
      () => [],
      true,
      false,
    ),
  ];
}
