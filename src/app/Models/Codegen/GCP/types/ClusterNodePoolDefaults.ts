import { ClusterNodePoolDefaultsNodeConfigDefaults } from "./ClusterNodePoolDefaultsNodeConfigDefaults";

export interface ClusterNodePoolDefaults {
  // Subset of NodeConfig message that has defaults.
  NodeConfigDefaults?: ClusterNodePoolDefaultsNodeConfigDefaults;
}
