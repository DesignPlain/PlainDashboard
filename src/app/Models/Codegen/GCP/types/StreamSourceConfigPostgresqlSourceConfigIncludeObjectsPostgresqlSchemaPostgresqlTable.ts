import { StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn } from "./StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn";

export interface StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemaPostgresqlTable {
  /*
PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  PostgresqlColumns?: Array<StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn>;

  // Table name.
  Table?: string;
}
