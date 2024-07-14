import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule,
  compute_getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule_GetTypes,
} from "./compute_getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule";
import {
  compute_getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule,
  compute_getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule_GetTypes,
} from "./compute_getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule";
import {
  compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule,
  compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule_GetTypes,
} from "./compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule";

export interface compute_getResourcePolicySnapshotSchedulePolicySchedule {
  // The policy will execute every nth day at the specified time.
  dailySchedules?: Array<compute_getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule>;

  // The policy will execute every nth hour starting at the specified time.
  hourlySchedules?: Array<compute_getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule>;

  // Allows specifying a snapshot time for each day of the week.
  weeklySchedules?: Array<compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule>;
}

export function compute_getResourcePolicySnapshotSchedulePolicySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dailySchedules",
      "The policy will execute every nth day at the specified time.",
      compute_getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "hourlySchedules",
      "The policy will execute every nth hour starting at the specified time.",
      compute_getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "weeklySchedules",
      "Allows specifying a snapshot time for each day of the week.",
      compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule_GetTypes(),
      true,
      false,
    ),
  ];
}
