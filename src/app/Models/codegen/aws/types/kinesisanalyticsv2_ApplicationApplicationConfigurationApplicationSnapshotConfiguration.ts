import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationSnapshotConfiguration {
  // Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
  snapshotsEnabled?: boolean;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationSnapshotConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "snapshotsEnabled",
      "Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.",
      () => [],
      true,
      false,
    ),
  ];
}
