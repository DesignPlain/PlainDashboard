import { StreamBackfillAllOracleExcludedObjects } from "./StreamBackfillAllOracleExcludedObjects";
import { StreamBackfillAllPostgresqlExcludedObjects } from "./StreamBackfillAllPostgresqlExcludedObjects";
import { StreamBackfillAllMysqlExcludedObjects } from "./StreamBackfillAllMysqlExcludedObjects";

export interface StreamBackfillAll {
  /*
MySQL data source objects to avoid backfilling.
Structure is documented below.
*/
  MysqlExcludedObjects?: StreamBackfillAllMysqlExcludedObjects;

  /*
PostgreSQL data source objects to avoid backfilling.
Structure is documented below.
*/
  OracleExcludedObjects?: StreamBackfillAllOracleExcludedObjects;

  /*
PostgreSQL data source objects to avoid backfilling.
Structure is documented below.
*/
  PostgresqlExcludedObjects?: StreamBackfillAllPostgresqlExcludedObjects;
}
