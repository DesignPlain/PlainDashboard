export interface RepositoryWorkflowConfigInvocationConfigIncludedTarget {
  // The action's database (Google Cloud project ID).
  Database?: string;

  // The action's name, within database and schema.
  Name?: string;

  // The action's schema (BigQuery dataset ID), within database.
  Schema?: string;
}
