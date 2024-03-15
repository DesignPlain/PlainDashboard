export interface ClusterMigrationSource {
  // The host and port of the on-premises instance in host:port format
  HostPort?: string;

  // Place holder for the external source identifier(e.g DMS job name) that created the cluster.
  ReferenceId?: string;

  // Type of migration source.
  SourceType?: string;
}
