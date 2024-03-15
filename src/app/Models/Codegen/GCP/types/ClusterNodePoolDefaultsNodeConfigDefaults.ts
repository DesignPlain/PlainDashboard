import { ClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig } from "./ClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig";

export interface ClusterNodePoolDefaultsNodeConfigDefaults {
  // The default Google Container Filesystem (GCFS) configuration at the cluster level. e.g. enable [image streaming](https://cloud.google.com/kubernetes-engine/docs/how-to/image-streaming) across all the node pools within the cluster. Structure is documented below.
  GcfsConfig?: ClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig;

  // The type of logging agent that is deployed by default for newly created node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT. See [Increasing logging agent throughput](https://cloud.google.com/stackdriver/docs/solutions/gke/managing-logs#throughput) for more information.
  LoggingVariant?: string;
}
