import { StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema } from "./StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema";

export interface StreamSourceConfigPostgresqlSourceConfigIncludeObjects {
  /*
PostgreSQL schemas on the server
Structure is documented below.
*/
  PostgresqlSchemas?: Array<StreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchema>;
}
