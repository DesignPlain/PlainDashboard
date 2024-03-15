export interface DatabaseInstanceSettingsAdvancedMachineFeatures {
  // The number of threads per core. The value of this flag can be 1 or 2. To disable SMT, set this flag to 1. Only available in Cloud SQL for SQL Server instances. See [smt](https://cloud.google.com/sql/docs/sqlserver/create-instance#smt-create-instance) for more details.
  ThreadsPerCore?: number;
}
