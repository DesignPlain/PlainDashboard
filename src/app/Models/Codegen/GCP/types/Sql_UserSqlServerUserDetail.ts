import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_UserSqlServerUserDetail {
  // If the user has been disabled.
  disabled?: boolean;

  // The server roles for this user in the database.
  serverRoles?: Array<string>;
}

export function sql_UserSqlServerUserDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "disabled",
      "If the user has been disabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "serverRoles",
      "The server roles for this user in the database.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
