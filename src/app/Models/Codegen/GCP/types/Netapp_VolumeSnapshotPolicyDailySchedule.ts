import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Netapp_VolumeSnapshotPolicyDailySchedule {
  // Set the hour to create the snapshot (0-23), defaults to midnight (0).
  Hour?: number;

  // Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).
  Minute?: number;

  // The maximum number of snapshots to keep for the daily schedule.
  SnapshotsToKeep?: number;
}

export function Netapp_VolumeSnapshotPolicyDailySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Hour",
      "Set the hour to create the snapshot (0-23), defaults to midnight (0).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Minute",
      "Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "SnapshotsToKeep",
      "The maximum number of snapshots to keep for the daily schedule.",
      [],
      true,
      false,
    ),
  ];
}
