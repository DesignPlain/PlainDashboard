export interface ClusterNodeConfigEphemeralStorageLocalSsdConfig {
  // Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD is 375 GB in size. If zero, it means to disable using local SSDs as ephemeral storage.
  LocalSsdCount?: number;
}
