import { StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema } from "./StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema";

export interface StreamSourceConfigPostgresqlSourceConfigExcludeObjects {
  /*
PostgreSQL schemas on the server
Structure is documented below.
*/
  PostgresqlSchemas?: Array<StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema>;
}
