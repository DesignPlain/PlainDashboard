import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  integrationconnectors_ConnectionEventingConfigAuthConfigUserPasswordPassword,
  integrationconnectors_ConnectionEventingConfigAuthConfigUserPasswordPassword_GetTypes,
} from './integrationconnectors_ConnectionEventingConfigAuthConfigUserPasswordPassword';

export interface integrationconnectors_ConnectionEventingConfigAuthConfigUserPassword {
  /*
Password for Authentication.
Structure is documented below.
*/
  password?: integrationconnectors_ConnectionEventingConfigAuthConfigUserPasswordPassword;

  // Username for Authentication.
  username?: string;
}

export function integrationconnectors_ConnectionEventingConfigAuthConfigUserPassword_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'password',
      'Password for Authentication.\nStructure is documented below.',
      () =>
        integrationconnectors_ConnectionEventingConfigAuthConfigUserPasswordPassword_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'username',
      'Username for Authentication.',
      () => [],
      false,
      false,
    ),
  ];
}
