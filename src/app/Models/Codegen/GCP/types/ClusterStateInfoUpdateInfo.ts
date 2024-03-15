export interface ClusterStateInfoUpdateInfo {
  // Target number of replica nodes per shard.
  TargetReplicaCount?: number;

  // Target number of shards for redis cluster.
  TargetShardCount?: number;
}
