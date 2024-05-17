import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Databasemigrationservice_ConnectionProfileMysqlSsl,
  Databasemigrationservice_ConnectionProfileMysqlSsl_GetTypes,
} from "./Databasemigrationservice_ConnectionProfileMysqlSsl";

export interface Databasemigrationservice_ConnectionProfileMysql {
  // If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.
  CloudSqlId?: string;

  // Required. The IP or hostname of the source MySQL database.
  Host?: string;

  /*
Required. Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  /*
(Output)
Output only. Indicates If this connection profile password is stored.
*/
  PasswordSet?: boolean;

  // Required. The network port of the source MySQL database.
  Port?: number;

  /*
SSL configuration for the destination to connect to the source database.
Structure is documented below.
*/
  Ssl?: Databasemigrationservice_ConnectionProfileMysqlSsl;

  // Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
  Username?: string;
}

export function Databasemigrationservice_ConnectionProfileMysql_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CloudSqlId",
      "If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Host",
      "Required. The IP or hostname of the source MySQL database.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Password",
      "Required. Input only. The password for the user that Database Migration Service will be using to connect to the database.\nThis field is not returned on request, and the value is encrypted when stored in Database Migration Service.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "PasswordSet",
      "(Output)\nOutput only. Indicates If this connection profile password is stored.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "Required. The network port of the source MySQL database.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Ssl",
      "SSL configuration for the destination to connect to the source database.\nStructure is documented below.",
      Databasemigrationservice_ConnectionProfileMysqlSsl_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Username",
      "Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.",
      [],
      true,
      false,
    ),
  ];
}
