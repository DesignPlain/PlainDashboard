import { getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig } from "./getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig";

export interface getClusterNodePoolDefaultNodeConfigDefault {
  // GCFS configuration for this node.
  GcfsConfigs?: Array<getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig>;

  // Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  LoggingVariant?: string;
}
