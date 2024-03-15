export interface ClusterNodePoolNetworkConfigPodCidrOverprovisionConfig {
  /*
Whether the cluster disables default in-node sNAT rules. In-node sNAT rules will be disabled when defaultSnatStatus is disabled.When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic

<a name="nested_cluster_telemetry"></a>The `cluster_telemetry` block supports
*/
  Disabled?: boolean;
}
