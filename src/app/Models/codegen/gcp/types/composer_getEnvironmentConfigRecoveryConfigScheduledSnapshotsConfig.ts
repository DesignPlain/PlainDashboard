import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface composer_getEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig {
  // When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket.
  enabled?: boolean;

  // Snapshot schedule, in the unix-cron format.
  snapshotCreationSchedule?: string;

  // the URI of a bucket folder where to save the snapshot.
  snapshotLocation?: string;

  // A time zone for the schedule. This value is a time offset and does not take into account daylight saving time changes. Valid values are from UTC-12 to UTC+12. Examples: UTC, UTC-01, UTC+03.
  timeZone?: string;
}

export function composer_getEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "snapshotCreationSchedule",
      "Snapshot schedule, in the unix-cron format.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "snapshotLocation",
      "the URI of a bucket folder where to save the snapshot.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeZone",
      "A time zone for the schedule. This value is a time offset and does not take into account daylight saving time changes. Valid values are from UTC-12 to UTC+12. Examples: UTC, UTC-01, UTC+03.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket.",
      () => [],
      true,
      false,
    ),
  ];
}
