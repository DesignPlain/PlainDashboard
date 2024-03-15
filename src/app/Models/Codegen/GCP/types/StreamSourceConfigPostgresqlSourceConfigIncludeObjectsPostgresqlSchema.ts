import { StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemaPostgresqlTable } from "./StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemaPostgresqlTable";

export interface StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema {
  /*
Tables in the schema.
Structure is documented below.
*/
  PostgresqlTables?: Array<StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemaPostgresqlTable>;

  // Database name.
  Schema?: string;
}
