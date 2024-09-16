import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DataSourceCredentialsCredentialPair {
  // Password, maximum length of 1024 characters.
  password?: string;

  // User name, maximum length of 64 characters.
  username?: string;
}

export function quicksight_DataSourceCredentialsCredentialPair_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'password',
      'Password, maximum length of 1024 characters.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'username',
      'User name, maximum length of 64 characters.',
      () => [],
      true,
      false,
    ),
  ];
}
