import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_ConnectionCloudSqlCredential {
  /*
Password for database.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;

  // Username for database.
  username?: string;
}

export function bigquery_ConnectionCloudSqlCredential_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "password",
      "Password for database.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "username",
      "Username for database.",
      [],
      true,
      false,
    ),
  ];
}
