export interface ConnectionCloudSpanner {
  // If set, the request will be executed via Spanner independent compute resources. `use_parallelism` must be set when using data boost.
  UseDataBoost?: boolean;

  // If parallelism should be used when reading from Cloud Spanner.
  UseParallelism?: boolean;

  /*
(Optional, Deprecated)
If the serverless analytics service should be used to read data from Cloud Spanner. `useParallelism` must be set when using serverless analytics.

> --Warning:-- `useServerlessAnalytics` is deprecated and will be removed in a future major release. Use `useDataBoost` instead.
*/
  UseServerlessAnalytics?: boolean;

  // Cloud Spanner database in the form `project/instance/database'.
  Database?: string;

  // Cloud Spanner database role for fine-grained access control. The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as `SELECT` and `INSERT`. Other users should only use roles provided by their Cloud Spanner admins. The database role name must start with a letter, and can only contain letters, numbers, and underscores. For more details, see https://cloud.google.com/spanner/docs/fgac-about.
  DatabaseRole?: string;

  // Allows setting max parallelism per query when executing on Spanner independent compute resources. If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. `useParallelism` and `useDataBoost` must be set when setting max parallelism.
  MaxParallelism?: number;
}
