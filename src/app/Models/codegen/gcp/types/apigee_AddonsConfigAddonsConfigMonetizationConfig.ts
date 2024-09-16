import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface apigee_AddonsConfigAddonsConfigMonetizationConfig {
  // Flag that specifies whether the Advanced API Ops add-on is enabled.
  enabled?: boolean;
}

export function apigee_AddonsConfigAddonsConfigMonetizationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Flag that specifies whether the Advanced API Ops add-on is enabled.',
      () => [],
      false,
      false,
    ),
  ];
}
