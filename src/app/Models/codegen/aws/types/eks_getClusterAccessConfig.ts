import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface eks_getClusterAccessConfig {
  // Values returned are `CONFIG_MAP`, `API` or `API_AND_CONFIG_MAP`
  authenticationMode?: string;

  // Default to `true`.
  bootstrapClusterCreatorAdminPermissions?: boolean;
}

export function eks_getClusterAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'authenticationMode',
      'Values returned are `CONFIG_MAP`, `API` or `API_AND_CONFIG_MAP`',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'bootstrapClusterCreatorAdminPermissions',
      'Default to `true`.',
      () => [],
      true,
      false,
    ),
  ];
}
