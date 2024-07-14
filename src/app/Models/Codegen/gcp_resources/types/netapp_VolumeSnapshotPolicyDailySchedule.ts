import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface netapp_VolumeSnapshotPolicyDailySchedule {
  // Set the hour to create the snapshot (0-23), defaults to midnight (0).
  hour?: number;

  // Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).
  minute?: number;

  // The maximum number of snapshots to keep for the daily schedule.
  snapshotsToKeep?: number;
}

export function netapp_VolumeSnapshotPolicyDailySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "snapshotsToKeep",
      "The maximum number of snapshots to keep for the daily schedule.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "hour",
      "Set the hour to create the snapshot (0-23), defaults to midnight (0).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minute",
      "Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).",
      [],
      false,
      false,
    ),
  ];
}
