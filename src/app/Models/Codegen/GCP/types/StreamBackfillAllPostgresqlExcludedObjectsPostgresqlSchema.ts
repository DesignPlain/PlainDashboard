import { StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable } from "./StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable";

export interface StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema {
  /*
Tables in the schema.
Structure is documented below.
*/
  PostgresqlTables?: Array<StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable>;

  // Database name.
  Schema?: string;
}
