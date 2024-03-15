export interface getEnvironmentConfigWorkloadsConfigScheduler {
  // The number of schedulers.
  Count?: number;

  // CPU request and limit for a single Airflow scheduler replica
  Cpu?: number;

  // Memory (GB) request and limit for a single Airflow scheduler replica.
  MemoryGb?: number;

  // Storage (GB) request and limit for a single Airflow scheduler replica.
  StorageGb?: number;
}
