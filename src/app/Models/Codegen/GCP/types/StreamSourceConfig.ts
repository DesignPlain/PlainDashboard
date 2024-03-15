import { StreamSourceConfigMysqlSourceConfig } from "./StreamSourceConfigMysqlSourceConfig";
import { StreamSourceConfigOracleSourceConfig } from "./StreamSourceConfigOracleSourceConfig";
import { StreamSourceConfigPostgresqlSourceConfig } from "./StreamSourceConfigPostgresqlSourceConfig";

export interface StreamSourceConfig {
  /*
MySQL data source configuration.
Structure is documented below.
*/
  MysqlSourceConfig?: StreamSourceConfigMysqlSourceConfig;

  /*
MySQL data source configuration.
Structure is documented below.
*/
  OracleSourceConfig?: StreamSourceConfigOracleSourceConfig;

  /*
PostgreSQL data source configuration.
Structure is documented below.
*/
  PostgresqlSourceConfig?: StreamSourceConfigPostgresqlSourceConfig;

  // Source connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  SourceConnectionProfile?: string;
}
