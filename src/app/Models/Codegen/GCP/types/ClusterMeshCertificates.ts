export interface ClusterMeshCertificates {
  // Controls the issuance of workload mTLS certificates. It is enabled by default. Workload Identity is required, see workload_config.
  EnableCertificates?: boolean;
}
