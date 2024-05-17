import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_ConnectionCloudSqlCredential {
  /*
Password for database.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  // Username for database.
  Username?: string;
}

export function Bigquery_ConnectionCloudSqlCredential_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Password",
      "Password for database.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Username",
      "Username for database.",
      [],
      true,
      false,
    ),
  ];
}
