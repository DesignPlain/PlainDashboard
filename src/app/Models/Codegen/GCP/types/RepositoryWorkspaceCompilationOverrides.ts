export interface RepositoryWorkspaceCompilationOverrides {
  // The default database (Google Cloud project ID).
  DefaultDatabase?: string;

  // The suffix that should be appended to all schema (BigQuery dataset ID) names.
  SchemaSuffix?: string;

  // The prefix that should be prepended to all table names.
  TablePrefix?: string;
}
