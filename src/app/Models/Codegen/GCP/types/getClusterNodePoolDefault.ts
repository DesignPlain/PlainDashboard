import { getClusterNodePoolDefaultNodeConfigDefault } from "./getClusterNodePoolDefaultNodeConfigDefault";

export interface getClusterNodePoolDefault {
  // Subset of NodeConfig message that has defaults.
  NodeConfigDefaults?: Array<getClusterNodePoolDefaultNodeConfigDefault>;
}
