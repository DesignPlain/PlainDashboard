export interface NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
  // Number of blue nodes to drain in a batch.
  BatchNodeCount?: number;

  // Percentage of the blue pool nodes to drain in a batch.
  BatchPercentage?: number;

  // Soak time after each batch gets drained.
  BatchSoakDuration?: string;
}
