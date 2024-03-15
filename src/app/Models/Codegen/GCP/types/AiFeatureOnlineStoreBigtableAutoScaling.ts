export interface AiFeatureOnlineStoreBigtableAutoScaling {
  /*
A percentage of the cluster's CPU capacity. Can be from 10%!!(MISSING)t(MISSING)o 80%!!(MISSING) (MISSING)When a cluster's CPU utilization exceeds the target that you have set, Bigtable immediately adds nodes to the cluster. When CPU utilization is substantially lower than the target, Bigtable removes nodes. If not set will default to 50%!!(MISSING)
(MISSING)
*/
  CpuUtilizationTarget?: number;

  // The maximum number of nodes to scale up to. Must be greater than or equal to minNodeCount, and less than or equal to 10 times of 'minNodeCount'.
  MaxNodeCount?: number;

  // The minimum number of nodes to scale down to. Must be greater than or equal to 1.
  MinNodeCount?: number;
}
