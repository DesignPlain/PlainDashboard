export interface getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy {
  // Number of blue nodes to drain in a batch.
  BatchNodeCount?: number;

  // Percentage of the bool pool nodes to drain in a batch. The range of this field should be (0.0, 1.0].
  BatchPercentage?: number;

  /*
Soak time after each batch gets drained.

																			A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  BatchSoakDuration?: string;
}
