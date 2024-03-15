import { StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTable } from "./StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTable";

export interface StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema {
  /*
Tables in the schema.
Structure is documented below.
*/
  PostgresqlTables?: Array<StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemaPostgresqlTable>;

  // Database name.
  Schema?: string;
}
