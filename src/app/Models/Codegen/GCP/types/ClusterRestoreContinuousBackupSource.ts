export interface ClusterRestoreContinuousBackupSource {
  // The name of the source cluster that this cluster is restored from.
  Cluster?: string;

  // The point in time that this cluster is restored to, in RFC 3339 format.
  PointInTime?: string;
}
