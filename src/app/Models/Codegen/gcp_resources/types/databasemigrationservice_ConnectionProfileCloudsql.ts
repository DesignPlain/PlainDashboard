import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  databasemigrationservice_ConnectionProfileCloudsqlSettings,
  databasemigrationservice_ConnectionProfileCloudsqlSettings_GetTypes,
} from "./databasemigrationservice_ConnectionProfileCloudsqlSettings";

export interface databasemigrationservice_ConnectionProfileCloudsql {
  /*
(Output)
Output only. The Cloud SQL instance ID that this connection profile is associated with.
*/
  cloudSqlId?: string;

  /*
(Output)
Output only. The Cloud SQL database instance's private IP.
*/
  privateIp?: string;

  /*
(Output)
Output only. The Cloud SQL database instance's public IP.
*/
  publicIp?: string;

  /*
Immutable. Metadata used to create the destination Cloud SQL database.
Structure is documented below.
*/
  settings?: databasemigrationservice_ConnectionProfileCloudsqlSettings;
}

export function databasemigrationservice_ConnectionProfileCloudsql_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "settings",
      "Immutable. Metadata used to create the destination Cloud SQL database.\nStructure is documented below.",
      databasemigrationservice_ConnectionProfileCloudsqlSettings_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudSqlId",
      "(Output)\nOutput only. The Cloud SQL instance ID that this connection profile is associated with.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateIp",
      "(Output)\nOutput only. The Cloud SQL database instance's private IP.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "publicIp",
      "(Output)\nOutput only. The Cloud SQL database instance's public IP.",
      [],
      false,
      false,
    ),
  ];
}
