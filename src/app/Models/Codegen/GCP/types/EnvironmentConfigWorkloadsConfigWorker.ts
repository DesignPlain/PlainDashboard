export interface EnvironmentConfigWorkloadsConfigWorker {
  // Minimum number of workers for autoscaling.
  MinCount?: number;

  // Storage (GB) request and limit for a single Airflow worker replica.
  StorageGb?: number;

  // CPU request and limit for a single Airflow worker replica.
  Cpu?: number;

  // Maximum number of workers for autoscaling.
  MaxCount?: number;

  // Memory (GB) request and limit for a single Airflow worker replica.
  MemoryGb?: number;
}
