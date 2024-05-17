import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Composer_EnvironmentConfigRecoveryConfigScheduledSnapshotsConfig {
  // When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket.
  Enabled?: boolean;

  // Snapshot schedule, in the unix-cron format.
  SnapshotCreationSchedule?: string;

  // the URI of a bucket folder where to save the snapshot.
  SnapshotLocation?: string;

  // A time zone for the schedule. This value is a time offset and does not take into account daylight saving time changes. Valid values are from UTC-12 to UTC+12. Examples: UTC, UTC-01, UTC+03.
  TimeZone?: string;
}

export function Composer_EnvironmentConfigRecoveryConfigScheduledSnapshotsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SnapshotCreationSchedule",
      "Snapshot schedule, in the unix-cron format.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SnapshotLocation",
      "the URI of a bucket folder where to save the snapshot.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TimeZone",
      "A time zone for the schedule. This value is a time offset and does not take into account daylight saving time changes. Valid values are from UTC-12 to UTC+12. Examples: UTC, UTC-01, UTC+03.",
      [],
      false,
      false,
    ),
  ];
}
