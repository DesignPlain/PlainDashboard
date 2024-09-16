import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_ClusterAddonsConfigGcsFuseCsiDriverConfig {
  // Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.
  enabled?: boolean;
}

export function container_ClusterAddonsConfigGcsFuseCsiDriverConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.',
      () => [],
      true,
      false,
    ),
  ];
}
