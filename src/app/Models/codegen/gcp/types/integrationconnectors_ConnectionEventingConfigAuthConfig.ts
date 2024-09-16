import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  integrationconnectors_ConnectionEventingConfigAuthConfigUserPassword,
  integrationconnectors_ConnectionEventingConfigAuthConfigUserPassword_GetTypes,
} from './integrationconnectors_ConnectionEventingConfigAuthConfigUserPassword';
import {
  integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariable,
  integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariable_GetTypes,
} from './integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariable';

export interface integrationconnectors_ConnectionEventingConfigAuthConfig {
  // The type of authentication configured.
  authKey?: string;

  /*
authType of the Connection
Possible values are: `USER_PASSWORD`.
*/
  authType?: string;

  /*
User password for Authentication.
Structure is documented below.
*/
  userPassword?: integrationconnectors_ConnectionEventingConfigAuthConfigUserPassword;

  /*
List containing additional auth configs.
Structure is documented below.
*/
  additionalVariables?: Array<integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariable>;
}

export function integrationconnectors_ConnectionEventingConfigAuthConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'authKey',
      'The type of authentication configured.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'authType',
      'authType of the Connection\nPossible values are: `USER_PASSWORD`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'userPassword',
      'User password for Authentication.\nStructure is documented below.',
      () =>
        integrationconnectors_ConnectionEventingConfigAuthConfigUserPassword_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'additionalVariables',
      'List containing additional auth configs.\nStructure is documented below.',
      () =>
        integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariable_GetTypes(),
      false,
      false,
    ),
  ];
}
