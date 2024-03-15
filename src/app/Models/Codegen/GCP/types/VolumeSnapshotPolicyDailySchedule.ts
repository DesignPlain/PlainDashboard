export interface VolumeSnapshotPolicyDailySchedule {
  // Set the hour to create the snapshot (0-23), defaults to midnight (0).
  Hour?: number;

  // Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).
  Minute?: number;

  // The maximum number of snapshots to keep for the daily schedule.
  SnapshotsToKeep?: number;
}
