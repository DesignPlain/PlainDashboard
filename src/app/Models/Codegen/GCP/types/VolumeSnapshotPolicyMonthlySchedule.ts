export interface VolumeSnapshotPolicyMonthlySchedule {
  // Set the day or days of the month to make a snapshot (1-31). Accepts a comma separated number of days. Defaults to '1'.
  DaysOfMonth?: string;

  // Set the hour to create the snapshot (0-23), defaults to midnight (0).
  Hour?: number;

  // Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).
  Minute?: number;

  // The maximum number of snapshots to keep for the monthly schedule
  SnapshotsToKeep?: number;
}
