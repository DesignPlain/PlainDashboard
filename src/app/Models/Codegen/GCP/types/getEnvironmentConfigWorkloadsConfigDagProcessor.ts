export interface getEnvironmentConfigWorkloadsConfigDagProcessor {
  // CPU request and limit for DAG processor.
  Cpu?: number;

  // Memory (GB) request and limit for DAG processor.
  MemoryGb?: number;

  // Storage (GB) request and limit for DAG processor.
  StorageGb?: number;
}
