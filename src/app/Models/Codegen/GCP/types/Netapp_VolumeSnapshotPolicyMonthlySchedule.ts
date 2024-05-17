import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Netapp_VolumeSnapshotPolicyMonthlySchedule {
  // Set the day or days of the month to make a snapshot (1-31). Accepts a comma separated number of days. Defaults to '1'.
  DaysOfMonth?: string;

  // Set the hour to create the snapshot (0-23), defaults to midnight (0).
  Hour?: number;

  // Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).
  Minute?: number;

  // The maximum number of snapshots to keep for the monthly schedule
  SnapshotsToKeep?: number;
}

export function Netapp_VolumeSnapshotPolicyMonthlySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DaysOfMonth",
      "Set the day or days of the month to make a snapshot (1-31). Accepts a comma separated number of days. Defaults to '1'.",
      [],
      false,
      false,
    ),
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
      "The maximum number of snapshots to keep for the monthly schedule",
      [],
      true,
      false,
    ),
  ];
}
