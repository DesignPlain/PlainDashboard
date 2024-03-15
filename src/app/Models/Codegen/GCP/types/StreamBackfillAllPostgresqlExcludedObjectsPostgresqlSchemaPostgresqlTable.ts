import { StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn } from "./StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn";

export interface StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTable {
  /*
PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  PostgresqlColumns?: Array<StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn>;

  // Table name.
  Table?: string;
}
