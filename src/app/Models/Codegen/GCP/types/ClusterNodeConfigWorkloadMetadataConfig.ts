export interface ClusterNodeConfigWorkloadMetadataConfig {
  /*
How to expose the node metadata to the workload running on the node.
Accepted values are:
- UNSPECIFIED: Not Set
- GCE_METADATA: Expose all Compute Engine metadata to pods.
- GKE_METADATA: Run the GKE Metadata Server on this node. The GKE Metadata Server exposes a metadata API to workloads that is compatible with the V1 Compute Metadata APIs exposed by the Compute Engine and App Engine Metadata Servers. This feature can only be enabled if [workload identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity) is enabled at the cluster level.
*/
  Mode?: string;
}
