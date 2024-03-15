export interface EnvironmentConfigWorkloadsConfigDagProcessor {
  // Storage (GB) request and limit for DAG processor.
  StorageGb?: number;

  // CPU request and limit for DAG processor.
  Cpu?: number;

  // Memory (GB) request and limit for DAG processor.
  MemoryGb?: number;
}
