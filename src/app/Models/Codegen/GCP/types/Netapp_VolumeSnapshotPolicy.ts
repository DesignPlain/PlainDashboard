import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Netapp_VolumeSnapshotPolicyWeeklySchedule,
  Netapp_VolumeSnapshotPolicyWeeklySchedule_GetTypes,
} from "./Netapp_VolumeSnapshotPolicyWeeklySchedule";
import {
  Netapp_VolumeSnapshotPolicyDailySchedule,
  Netapp_VolumeSnapshotPolicyDailySchedule_GetTypes,
} from "./Netapp_VolumeSnapshotPolicyDailySchedule";
import {
  Netapp_VolumeSnapshotPolicyHourlySchedule,
  Netapp_VolumeSnapshotPolicyHourlySchedule_GetTypes,
} from "./Netapp_VolumeSnapshotPolicyHourlySchedule";
import {
  Netapp_VolumeSnapshotPolicyMonthlySchedule,
  Netapp_VolumeSnapshotPolicyMonthlySchedule_GetTypes,
} from "./Netapp_VolumeSnapshotPolicyMonthlySchedule";

export interface Netapp_VolumeSnapshotPolicy {
  /*
Daily schedule policy.
Structure is documented below.
*/
  DailySchedule?: Netapp_VolumeSnapshotPolicyDailySchedule;

  /*
Enables automated snapshot creation according to defined schedule. Default is false.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.
*/
  Enabled?: boolean;

  /*
Hourly schedule policy.
Structure is documented below.
*/
  HourlySchedule?: Netapp_VolumeSnapshotPolicyHourlySchedule;

  /*
Monthly schedule policy.
Structure is documented below.
*/
  MonthlySchedule?: Netapp_VolumeSnapshotPolicyMonthlySchedule;

  /*
Weekly schedule policy.
Structure is documented below.
*/
  WeeklySchedule?: Netapp_VolumeSnapshotPolicyWeeklySchedule;
}

export function Netapp_VolumeSnapshotPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "HourlySchedule",
      "Hourly schedule policy.\nStructure is documented below.",
      Netapp_VolumeSnapshotPolicyHourlySchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MonthlySchedule",
      "Monthly schedule policy.\nStructure is documented below.",
      Netapp_VolumeSnapshotPolicyMonthlySchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WeeklySchedule",
      "Weekly schedule policy.\nStructure is documented below.",
      Netapp_VolumeSnapshotPolicyWeeklySchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DailySchedule",
      "Daily schedule policy.\nStructure is documented below.",
      Netapp_VolumeSnapshotPolicyDailySchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Enables automated snapshot creation according to defined schedule. Default is false.\nTo disable automatic snapshot creation you have to remove the whole snapshot_policy block.",
      [],
      false,
      false,
    ),
  ];
}
