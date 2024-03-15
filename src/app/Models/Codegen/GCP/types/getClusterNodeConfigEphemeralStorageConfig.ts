export interface getClusterNodeConfigEphemeralStorageConfig {
  // Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
  LocalSsdCount?: number;
}
