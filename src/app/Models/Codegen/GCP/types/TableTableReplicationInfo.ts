export interface TableTableReplicationInfo {
  // The interval at which the source materialized view is polled for updates. The default is 300000.
  ReplicationIntervalMs?: number;

  // The ID of the source dataset.
  SourceDatasetId?: string;

  // The ID of the source project.
  SourceProjectId?: string;

  // The ID of the source materialized view.
  SourceTableId?: string;
}
