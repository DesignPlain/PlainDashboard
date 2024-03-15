import { StreamSourceConfigOracleSourceConfigStreamLargeObjects } from "./StreamSourceConfigOracleSourceConfigStreamLargeObjects";
import { StreamSourceConfigOracleSourceConfigDropLargeObjects } from "./StreamSourceConfigOracleSourceConfigDropLargeObjects";
import { StreamSourceConfigOracleSourceConfigExcludeObjects } from "./StreamSourceConfigOracleSourceConfigExcludeObjects";
import { StreamSourceConfigOracleSourceConfigIncludeObjects } from "./StreamSourceConfigOracleSourceConfigIncludeObjects";

export interface StreamSourceConfigOracleSourceConfig {
  // Configuration to drop large object values.
  DropLargeObjects?: StreamSourceConfigOracleSourceConfigDropLargeObjects;

  /*
Oracle objects to exclude from the stream.
Structure is documented below.
*/
  ExcludeObjects?: StreamSourceConfigOracleSourceConfigExcludeObjects;

  /*
Oracle objects to retrieve from the source.
Structure is documented below.
*/
  IncludeObjects?: StreamSourceConfigOracleSourceConfigIncludeObjects;

  /*
Maximum number of concurrent backfill tasks. The number should be non negative.
If not set (or set to 0), the system's default value will be used.
*/
  MaxConcurrentBackfillTasks?: number;

  /*
Maximum number of concurrent CDC tasks. The number should be non negative.
If not set (or set to 0), the system's default value will be used.
*/
  MaxConcurrentCdcTasks?: number;

  // Configuration to drop large object values.
  StreamLargeObjects?: StreamSourceConfigOracleSourceConfigStreamLargeObjects;
}
