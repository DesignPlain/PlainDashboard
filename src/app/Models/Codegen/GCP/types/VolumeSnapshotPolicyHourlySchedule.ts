export interface VolumeSnapshotPolicyHourlySchedule {
  // Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).
  Minute?: number;

  // The maximum number of snapshots to keep for the hourly schedule.
  SnapshotsToKeep?: number;
}
