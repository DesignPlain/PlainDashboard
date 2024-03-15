export interface EnvironmentConfigWorkloadsConfigWebServer {
  // CPU request and limit for Airflow web server.
  Cpu?: number;

  // Memory (GB) request and limit for Airflow web server.
  MemoryGb?: number;

  // Storage (GB) request and limit for Airflow web server.
  StorageGb?: number;
}
