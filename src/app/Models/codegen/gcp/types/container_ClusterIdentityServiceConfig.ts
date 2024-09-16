import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_ClusterIdentityServiceConfig {
  // Whether to enable the Identity Service component. It is disabled by default. Set `enabled=true` to enable.
  enabled?: boolean;
}

export function container_ClusterIdentityServiceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether to enable the Identity Service component. It is disabled by default. Set `enabled=true` to enable.',
      () => [],
      false,
      false,
    ),
  ];
}
