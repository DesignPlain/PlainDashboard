import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule,
  Compute_getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule_GetTypes,
} from "./Compute_getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule";
import {
  Compute_getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule,
  Compute_getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule_GetTypes,
} from "./Compute_getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule";
import {
  Compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule,
  Compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule_GetTypes,
} from "./Compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule";

export interface Compute_getResourcePolicySnapshotSchedulePolicySchedule {
  // The policy will execute every nth day at the specified time.
  DailySchedules?: Array<Compute_getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule>;

  // The policy will execute every nth hour starting at the specified time.
  HourlySchedules?: Array<Compute_getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule>;

  // Allows specifying a snapshot time for each day of the week.
  WeeklySchedules?: Array<Compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule>;
}

export function Compute_getResourcePolicySnapshotSchedulePolicySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "DailySchedules",
      "The policy will execute every nth day at the specified time.",
      Compute_getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "HourlySchedules",
      "The policy will execute every nth hour starting at the specified time.",
      Compute_getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "WeeklySchedules",
      "Allows specifying a snapshot time for each day of the week.",
      Compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule_GetTypes(),
      true,
      false,
    ),
  ];
}
