import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Databasemigrationservice_ConnectionProfileAlloydbSettingsInitialUser {
  /*
The initial password for the user.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  /*
(Output)
Output only. Indicates if the initialUser.password field has been set.
*/
  PasswordSet?: boolean;

  // The database username.
  User?: string;
}

export function Databasemigrationservice_ConnectionProfileAlloydbSettingsInitialUser_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Password",
      "The initial password for the user.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "PasswordSet",
      "(Output)\nOutput only. Indicates if the initialUser.password field has been set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "User",
      "The database username.",
      [],
      true,
      false,
    ),
  ];
}
