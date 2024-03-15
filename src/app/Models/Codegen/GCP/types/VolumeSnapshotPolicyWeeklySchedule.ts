export interface VolumeSnapshotPolicyWeeklySchedule {
  // Set the day or days of the week to make a snapshot. Accepts a comma separated days of the week. Defaults to 'Sunday'.
  Day?: string;

  // Set the hour to create the snapshot (0-23), defaults to midnight (0).
  Hour?: number;

  // Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).
  Minute?: number;

  // The maximum number of snapshots to keep for the weekly schedule.
  SnapshotsToKeep?: number;
}
