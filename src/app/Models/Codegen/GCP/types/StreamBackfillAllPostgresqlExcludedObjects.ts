import { StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema } from "./StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema";

export interface StreamBackfillAllPostgresqlExcludedObjects {
  /*
PostgreSQL schemas on the server
Structure is documented below.
*/
  PostgresqlSchemas?: Array<StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchema>;
}
