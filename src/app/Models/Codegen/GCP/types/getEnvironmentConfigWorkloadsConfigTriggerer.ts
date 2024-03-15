export interface getEnvironmentConfigWorkloadsConfigTriggerer {
  // The number of triggerers.
  Count?: number;

  // CPU request and limit for a single Airflow triggerer replica.
  Cpu?: number;

  // Memory (GB) request and limit for a single Airflow triggerer replica.
  MemoryGb?: number;
}
