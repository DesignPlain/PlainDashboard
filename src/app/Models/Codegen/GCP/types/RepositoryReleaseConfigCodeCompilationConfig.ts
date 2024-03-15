export interface RepositoryReleaseConfigCodeCompilationConfig {
  // Optional. The suffix that should be appended to all database (Google Cloud project ID) names.
  DatabaseSuffix?: string;

  // Optional. The default database (Google Cloud project ID).
  DefaultDatabase?: string;

  /*
Optional. The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.
*/
  DefaultLocation?: string;

  // Optional. The default schema (BigQuery dataset ID).
  DefaultSchema?: string;

  // Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.
  SchemaSuffix?: string;

  // Optional. The prefix that should be prepended to all table names.
  TablePrefix?: string;

  /*
Optional. User-defined variables that are made available to project code during compilation.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  Vars?: Map<string, string>;

  // Optional. The default schema (BigQuery dataset ID) for assertions.
  AssertionSchema?: string;
}
