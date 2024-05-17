import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Databasemigrationservice_ConnectionProfileCloudsqlSettings,
  Databasemigrationservice_ConnectionProfileCloudsqlSettings_GetTypes,
} from "./Databasemigrationservice_ConnectionProfileCloudsqlSettings";

export interface Databasemigrationservice_ConnectionProfileCloudsql {
  /*
(Output)
Output only. The Cloud SQL instance ID that this connection profile is associated with.
*/
  CloudSqlId?: string;

  /*
(Output)
Output only. The Cloud SQL database instance's private IP.
*/
  PrivateIp?: string;

  /*
(Output)
Output only. The Cloud SQL database instance's public IP.
*/
  PublicIp?: string;

  /*
Immutable. Metadata used to create the destination Cloud SQL database.
Structure is documented below.
*/
  Settings?: Databasemigrationservice_ConnectionProfileCloudsqlSettings;
}

export function Databasemigrationservice_ConnectionProfileCloudsql_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CloudSqlId",
      "(Output)\nOutput only. The Cloud SQL instance ID that this connection profile is associated with.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrivateIp",
      "(Output)\nOutput only. The Cloud SQL database instance's private IP.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PublicIp",
      "(Output)\nOutput only. The Cloud SQL database instance's public IP.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Settings",
      "Immutable. Metadata used to create the destination Cloud SQL database.\nStructure is documented below.",
      Databasemigrationservice_ConnectionProfileCloudsqlSettings_GetTypes(),
      false,
      true,
    ),
  ];
}
