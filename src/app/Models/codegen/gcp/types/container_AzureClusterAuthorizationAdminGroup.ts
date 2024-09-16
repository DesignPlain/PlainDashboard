import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_AzureClusterAuthorizationAdminGroup {
  // The name of the group, e.g. `my-group@domain.com`.
  group?: string;
}

export function container_AzureClusterAuthorizationAdminGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'group',
      'The name of the group, e.g. `my-group@domain.com`.',
      () => [],
      true,
      false,
    ),
  ];
}
