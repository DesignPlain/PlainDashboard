import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface databasemigrationservice_ConnectionProfileAlloydbSettingsInitialUser {
  /*
(Output)
Output only. Indicates if the initialUser.password field has been set.
*/
  passwordSet?: boolean;

  // The database username.
  user?: string;

  /*
The initial password for the user.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;
}

export function databasemigrationservice_ConnectionProfileAlloydbSettingsInitialUser_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'passwordSet',
      '(Output)\nOutput only. Indicates if the initialUser.password field has been set.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'user',
      'The database username.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'password',
      'The initial password for the user.\n**Note**: This property is sensitive and will not be displayed in the plan.',
      () => [],
      true,
      false,
    ),
  ];
}
