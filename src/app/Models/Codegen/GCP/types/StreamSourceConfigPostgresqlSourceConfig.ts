import { StreamSourceConfigPostgresqlSourceConfigExcludeObjects } from "./StreamSourceConfigPostgresqlSourceConfigExcludeObjects";
import { StreamSourceConfigPostgresqlSourceConfigIncludeObjects } from "./StreamSourceConfigPostgresqlSourceConfigIncludeObjects";

export interface StreamSourceConfigPostgresqlSourceConfig {
  /*
The name of the logical replication slot that's configured with
the pgoutput plugin.
*/
  ReplicationSlot?: string;

  /*
PostgreSQL objects to exclude from the stream.
Structure is documented below.
*/
  ExcludeObjects?: StreamSourceConfigPostgresqlSourceConfigExcludeObjects;

  /*
PostgreSQL objects to retrieve from the source.
Structure is documented below.
*/
  IncludeObjects?: StreamSourceConfigPostgresqlSourceConfigIncludeObjects;

  /*
Maximum number of concurrent backfill tasks. The number should be non
negative. If not set (or set to 0), the system's default value will be used.
*/
  MaxConcurrentBackfillTasks?: number;

  /*
The name of the publication that includes the set of all tables
that are defined in the stream's include_objects.
*/
  Publication?: string;
}
