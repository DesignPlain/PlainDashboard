import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface netapp_VolumeSnapshotPolicyHourlySchedule {
  // Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).
  minute?: number;

  // The maximum number of snapshots to keep for the hourly schedule.
  snapshotsToKeep?: number;
}

export function netapp_VolumeSnapshotPolicyHourlySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minute",
      "Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "snapshotsToKeep",
      "The maximum number of snapshots to keep for the hourly schedule.",
      [],
      true,
      false,
    ),
  ];
}
