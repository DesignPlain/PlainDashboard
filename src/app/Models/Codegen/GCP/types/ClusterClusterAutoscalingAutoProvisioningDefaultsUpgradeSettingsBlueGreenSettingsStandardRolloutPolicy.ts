export interface ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
  // Number of blue nodes to drain in a batch. Only one of the batch_percentage or batch_node_count can be specified.
  BatchNodeCount?: number;

  // Percentage of the bool pool nodes to drain in a batch. The range of this field should be (0.0, 1.0). Only one of the batch_percentage or batch_node_count can be specified.
  BatchPercentage?: number;

  // Soak time after each batch gets drained. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".`.
  BatchSoakDuration?: string;
}
