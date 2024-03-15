export interface getEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig {
  // the URI of a bucket folder where to save the snapshot.
  SnapshotLocation?: string;

  // A time zone for the schedule. This value is a time offset and does not take into account daylight saving time changes. Valid values are from UTC-12 to UTC+12. Examples: UTC, UTC-01, UTC+03.
  TimeZone?: string;

  // When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket.
  Enabled?: boolean;

  // Snapshot schedule, in the unix-cron format.
  SnapshotCreationSchedule?: string;
}
