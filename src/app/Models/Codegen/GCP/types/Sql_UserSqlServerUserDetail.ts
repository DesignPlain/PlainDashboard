import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_UserSqlServerUserDetail {
  // If the user has been disabled.
  Disabled?: boolean;

  // The server roles for this user in the database.
  ServerRoles?: Array<string>;
}

export function Sql_UserSqlServerUserDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Disabled",
      "If the user has been disabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ServerRoles",
      "The server roles for this user in the database.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
