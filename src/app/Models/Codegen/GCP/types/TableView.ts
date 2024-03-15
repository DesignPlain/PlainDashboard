export interface TableView {
  // A query that BigQuery executes when the view is referenced.
  Query?: string;

  /*
Specifies whether to use BigQuery's legacy SQL for this view.
The default value is true. If set to false, the view will use BigQuery's standard SQL.
*/
  UseLegacySql?: boolean;
}
