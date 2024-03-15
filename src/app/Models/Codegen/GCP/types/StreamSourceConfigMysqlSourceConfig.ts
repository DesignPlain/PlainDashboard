import { StreamSourceConfigMysqlSourceConfigIncludeObjects } from "./StreamSourceConfigMysqlSourceConfigIncludeObjects";
import { StreamSourceConfigMysqlSourceConfigExcludeObjects } from "./StreamSourceConfigMysqlSourceConfigExcludeObjects";

export interface StreamSourceConfigMysqlSourceConfig {
  /*
MySQL objects to retrieve from the source.
Structure is documented below.
*/
  IncludeObjects?: StreamSourceConfigMysqlSourceConfigIncludeObjects;

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

  /*
MySQL objects to exclude from the stream.
Structure is documented below.
*/
  ExcludeObjects?: StreamSourceConfigMysqlSourceConfigExcludeObjects;
}
