import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_AzureClusterAuthorizationAdminUser {
  // The name of the user, e.g. `my-gcp-id@gmail.com`.
  username?: string;
}

export function container_AzureClusterAuthorizationAdminUser_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'username',
      'The name of the user, e.g. `my-gcp-id@gmail.com`.',
      () => [],
      true,
      false,
    ),
  ];
}
