export interface TableMaterializedView {
  /*
Allow non incremental materialized view definition.
The default value is false.
*/
  AllowNonIncrementalDefinition?: boolean;

  /*
Specifies whether to use BigQuery's automatic refresh for this materialized view when the base table is updated.
The default value is true.
*/
  EnableRefresh?: boolean;

  // A query whose result is persisted.
  Query?: string;

  /*
The maximum frequency at which this materialized view will be refreshed.
The default value is 1800000
*/
  RefreshIntervalMs?: number;
}
