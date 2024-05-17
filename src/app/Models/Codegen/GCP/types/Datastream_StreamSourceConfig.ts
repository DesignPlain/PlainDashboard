import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigMysqlSourceConfig,
  Datastream_StreamSourceConfigMysqlSourceConfig_GetTypes,
} from "./Datastream_StreamSourceConfigMysqlSourceConfig";
import {
  Datastream_StreamSourceConfigOracleSourceConfig,
  Datastream_StreamSourceConfigOracleSourceConfig_GetTypes,
} from "./Datastream_StreamSourceConfigOracleSourceConfig";
import {
  Datastream_StreamSourceConfigPostgresqlSourceConfig,
  Datastream_StreamSourceConfigPostgresqlSourceConfig_GetTypes,
} from "./Datastream_StreamSourceConfigPostgresqlSourceConfig";

export interface Datastream_StreamSourceConfig {
  /*
PostgreSQL data source configuration.
Structure is documented below.
*/
  PostgresqlSourceConfig?: Datastream_StreamSourceConfigPostgresqlSourceConfig;

  // Source connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  SourceConnectionProfile?: string;

  /*
MySQL data source configuration.
Structure is documented below.
*/
  MysqlSourceConfig?: Datastream_StreamSourceConfigMysqlSourceConfig;

  /*
MySQL data source configuration.
Structure is documented below.
*/
  OracleSourceConfig?: Datastream_StreamSourceConfigOracleSourceConfig;
}

export function Datastream_StreamSourceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PostgresqlSourceConfig",
      "PostgreSQL data source configuration.\nStructure is documented below.",
      Datastream_StreamSourceConfigPostgresqlSourceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceConnectionProfile",
      "Source connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MysqlSourceConfig",
      "MySQL data source configuration.\nStructure is documented below.",
      Datastream_StreamSourceConfigMysqlSourceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "OracleSourceConfig",
      "MySQL data source configuration.\nStructure is documented below.",
      Datastream_StreamSourceConfigOracleSourceConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
