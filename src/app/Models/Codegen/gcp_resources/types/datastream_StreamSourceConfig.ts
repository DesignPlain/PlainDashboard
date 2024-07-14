import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datastream_StreamSourceConfigOracleSourceConfig,
  datastream_StreamSourceConfigOracleSourceConfig_GetTypes,
} from "./datastream_StreamSourceConfigOracleSourceConfig";
import {
  datastream_StreamSourceConfigPostgresqlSourceConfig,
  datastream_StreamSourceConfigPostgresqlSourceConfig_GetTypes,
} from "./datastream_StreamSourceConfigPostgresqlSourceConfig";
import {
  datastream_StreamSourceConfigMysqlSourceConfig,
  datastream_StreamSourceConfigMysqlSourceConfig_GetTypes,
} from "./datastream_StreamSourceConfigMysqlSourceConfig";

export interface datastream_StreamSourceConfig {
  /*
MySQL data source configuration.
Structure is documented below.
*/
  mysqlSourceConfig?: datastream_StreamSourceConfigMysqlSourceConfig;

  /*
MySQL data source configuration.
Structure is documented below.
*/
  oracleSourceConfig?: datastream_StreamSourceConfigOracleSourceConfig;

  /*
PostgreSQL data source configuration.
Structure is documented below.
*/
  postgresqlSourceConfig?: datastream_StreamSourceConfigPostgresqlSourceConfig;

  // Source connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  sourceConnectionProfile?: string;
}

export function datastream_StreamSourceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "mysqlSourceConfig",
      "MySQL data source configuration.\nStructure is documented below.",
      datastream_StreamSourceConfigMysqlSourceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "oracleSourceConfig",
      "MySQL data source configuration.\nStructure is documented below.",
      datastream_StreamSourceConfigOracleSourceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "postgresqlSourceConfig",
      "PostgreSQL data source configuration.\nStructure is documented below.",
      datastream_StreamSourceConfigPostgresqlSourceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceConnectionProfile",
      "Source connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}",
      [],
      true,
      true,
    ),
  ];
}
